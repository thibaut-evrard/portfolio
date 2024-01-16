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

float getGummyColorMix(vec3 geometryPosition, vec3 normal, float thickness) {
	float emit = 0.;

	vec3 camToFrag = normalize(geometryPosition);
	float gummyFactor = abs(dot(camToFrag, normal));
	gummyFactor = pow(gummyFactor, 2.);

	return thickness * 0.8 + gummyFactor * 0.5;
}

vec3 getLightCapture(vec3 geometryPosition, vec3 normal, float thickness, vec3 diffuse) {
	float emit = 0.;
	float thinness = 1. - thickness;
	float remappedThinness = thinness * 0.7;
	vec3 outColor = vec3(0.);

	#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;

	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];

		// measuring key distances
		vec3 camToFrag = normalize(geometryPosition);
		vec3 lightToFrag = pointLight.position - (geometryPosition + normal);
		vec3 camToLight = -normalize(pointLight.position);
		vec3 lightToFragDirection = normalize(lightToFrag);
		float angleLightNormal = dot(lightToFragDirection, -normal);

		// compute thickness
		float altThickness = abs(angleLightNormal);
		altThickness = pow(altThickness, 1.);
		float fullThickness = thickness * altThickness;

		// compute light intensity
		float backsideToLight = length(lightToFrag) - clamp(angleLightNormal * 0.5, 0., 1.) * thickness * length(lightToFrag);
		float lightIntensity = getDistanceAttenuation( length(lightToFrag), pointLight.distance, pointLight.decay);
		lightIntensity = length(pointLight.color) * lightIntensity;

		// compute direction similarity
		float lightDirectionSimilarity = dot(camToFrag, lightToFragDirection);
		lightDirectionSimilarity = pow(clamp(lightDirectionSimilarity, 0., 1.), 20.);
		float lightThroughIntensity = (1. - fullThickness) * lightDirectionSimilarity * lightIntensity;

		float emitIntensity = lightIntensity * (1. - fullThickness) * 0.5 + lightThroughIntensity * 2.;
		vec3 pointLightHue = clamp(pointLight.color, 0., 1.) * 0.8 + diffuse * 0.2;
		vec3 maxEmit = mix(diffuse, pointLightHue, emitIntensity);
		vec3 emitColor = mix(vec3(0.), maxEmit, emitIntensity);

		outColor += vec3(clamp(emitColor, 0., 1.));
	}

	#endif
	return vec3(outColor);
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
	float thickness = texture2D( gummyMap, vUv ).r;
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
	// vec3 globalPos = (modelMatrix * vec4(geometryPosition, 1.0 )).xyz;
	// vec3 gummyEmission = getGummyEmission(geometryPosition, normal, pow(thickness, 1.), gummyColor);
	// vec3 gummyEmissionColor = mix(vec3(0.), gummyColor, gummyEmission);
	vec3 col = getLightCapture(geomPos, normal, thickness, coreColor);
	vec3 outgoingLight = totalDiffuse + col + totalSpecular + totalEmissiveRadiance;//totalDiffuse + totalSpecular + totalEmissiveRadiance;
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
