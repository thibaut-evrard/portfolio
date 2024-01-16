const fragment = `
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// CUSTOM START
uniform sampler2D gummyMap;
uniform vec3 coreColor;
uniform float gummyStrength;
uniform mat4 modelMatrix;

vec3 getGummyEmission(vec3 geometryPosition, vec3 normal, float thinness, vec3 gummyColor) {
	float thickness = 1. - thinness;
	vec3 emit = vec3(0.);

	#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;

	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];

		vec3 lightToFrag = pointLight.position - geometryPosition + normal;
		vec3 camToLight = -normalize(pointLight.position);
		vec3 lightToFragDirection = normalize(lightToFrag);

		vec3 refractedLightToFragThickness = refract(lightToFragDirection, normalize(-normal), (thickness * 2.) - 1.);
		vec3 reflectedLightToFragThickness = reflect(lightToFragDirection, normalize(-normal));

		float angleLightNormal = dot(lightToFragDirection, -normal);
		float backsideToLight = length(lightToFrag) - clamp(angleLightNormal * 0.5, 0., 1.) * thickness * length(lightToFrag);
		float lightIntensity = getDistanceAttenuation( max(length(backsideToLight), 0.), pointLight.distance, pointLight.decay);

		float lightThroughIntensity = dot(camToLight, refractedLightToFragThickness);
		lightThroughIntensity = pow(clamp(lightThroughIntensity, 0., 1.), 5.) * lightIntensity * (1. - thickness);

		float lightBounceIntensity = dot(camToLight, -reflectedLightToFragThickness);
		lightBounceIntensity = pow(clamp(lightBounceIntensity, 0., 1.), 2.) * lightIntensity;

		vec3 bounceEmit = mix(vec3(0.), gummyColor * pointLight.color, lightBounceIntensity * 0.3);
		vec3 throughEmit = (gummyColor + pointLight.color * gummyColor * lightIntensity) * lightThroughIntensity;
		//vec3 throughEmit = mix(gummyColor, clamp(pointLight.color, 0., 1.), lightThroughIntensity * 0.8);

		float intensity = clamp(lightThroughIntensity + lightBounceIntensity, 0., 1.);
		intensity = intensity * gummyStrength;
		emit += bounceEmit * intensity + throughEmit * intensity;
	}

	#endif
	return clamp(emit, 0., 1.);
}

float getGummyColorMix(vec3 geometryPosition, vec3 normal, float thinness) {
	float thickness = 1. - thinness;
	float emit = 0.;

	#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;

	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];

		vec3 lightToFrag = pointLight.position - (geometryPosition + normal);
		vec3 camToLight = -normalize(pointLight.position);
		vec3 lightToFragDirection = normalize(lightToFrag);

		vec3 refractedLightToFragThickness = refract(lightToFragDirection, normalize(normal), (thickness * 2.) - 1.);
		vec3 reflectedLightToFragThickness = reflect(lightToFragDirection, normalize(normal));

		float angleLightNormal = dot(lightToFragDirection, -normal);
		float backsideToLight = length(lightToFrag) - clamp(angleLightNormal * 0.5, 0., 1.) * thickness * length(lightToFrag);
		float lightIntensity = getDistanceAttenuation( max(length(backsideToLight), 0.), pointLight.distance, pointLight.decay);

		float lightThroughIntensity = dot(camToLight, -refractedLightToFragThickness);
		lightThroughIntensity = pow(clamp(lightThroughIntensity, 0., 1.), 2.);

		float lightBounceIntensity = dot(camToLight, -reflectedLightToFragThickness);
		lightBounceIntensity = pow(clamp(lightBounceIntensity, 0., lightThroughIntensity), 1.);
		
		emit += (lightThroughIntensity - lightBounceIntensity * 0.5) * lightIntensity * gummyStrength;
	}

	#endif
	return clamp(emit, 0., 1.);
}
// CUSTOM END

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// CUSTOM START
	vec3 geomPos = - vViewPosition;
	float thickness = 1. - texture2D( gummyMap, vUv ).r;

	float gummyColorMix = getGummyColorMix(geomPos, normal, pow(thickness, 1.));
	vec3 gummyColor = mix(diffuse, coreColor, gummyColorMix);
	diffuseColor = vec4( gummyColor, opacity );
	// CUSTOM END

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	// CUSTOM START
	vec3 globalPos = (modelMatrix * vec4(geometryPosition, 1.0 )).xyz;
	vec3 gummyEmission = getGummyEmission(geometryPosition, normal, pow(thickness, 1.), gummyColor);
	vec3 gummyEmissionColor = mix(vec3(0.), gummyColor, gummyEmission);

	vec3 outgoingLight = totalDiffuse + gummyEmissionColor + totalSpecular + totalEmissiveRadiance;
	//vec3 outgoingLight = vec3(gummyStrength);
	// CUSTOM END

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;

export default fragment;
