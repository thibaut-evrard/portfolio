// const fragment = `
// #define STANDARD

// #ifdef PHYSICAL
// 	#define IOR
// 	#define SPECULAR
// #endif

// uniform vec3 diffuse;
// uniform vec3 emissive;
// uniform float roughness;
// uniform float metalness;
// uniform float opacity;

// #ifdef IOR
// 	uniform float ior;
// #endif

// #ifdef SPECULAR
// 	uniform float specularIntensity;
// 	uniform vec3 specularColor;

// 	#ifdef USE_SPECULARINTENSITYMAP
// 		uniform sampler2D specularIntensityMap;
// 	#endif

// 	#ifdef USE_SPECULARCOLORMAP
// 		uniform sampler2D specularColorMap;
// 	#endif
// #endif

// #ifdef USE_CLEARCOAT
// 	uniform float clearcoat;
// 	uniform float clearcoatRoughness;
// #endif

// #ifdef USE_IRIDESCENCE
// 	uniform float iridescence;
// 	uniform float iridescenceIOR;
// 	uniform float iridescenceThicknessMinimum;
// 	uniform float iridescenceThicknessMaximum;
// #endif

// #ifdef USE_SHEEN
// 	uniform vec3 sheenColor;
// 	uniform float sheenRoughness;

// 	#ifdef USE_SHEENCOLORMAP
// 		uniform sampler2D sheenColorMap;
// 	#endif

// 	#ifdef USE_SHEENROUGHNESSMAP
// 		uniform sampler2D sheenRoughnessMap;
// 	#endif
// #endif

// varying vec3 vViewPosition;

// #include <common>
// #include <packing>
// #include <dithering_pars_fragment>
// #include <color_pars_fragment>
// #include <uv_pars_fragment>
// #include <uv2_pars_fragment>
// #include <map_pars_fragment>
// #include <alphamap_pars_fragment>
// #include <alphatest_pars_fragment>
// #include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
// #include <emissivemap_pars_fragment>
// #include <bsdfs>
// #include <iridescence_fragment>
// #include <cube_uv_reflection_fragment>
// #include <envmap_common_pars_fragment>
// #include <envmap_physical_pars_fragment>
// #include <fog_pars_fragment>
// #include <lights_pars_begin>
// #include <normal_pars_fragment>
// #include <lights_physical_pars_fragment>
// #include <transmission_pars_fragment>
// #include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>
// #include <normalmap_pars_fragment>
// #include <clearcoat_pars_fragment>
// #include <iridescence_pars_fragment>
// #include <roughnessmap_pars_fragment>
// #include <metalnessmap_pars_fragment>
// #include <logdepthbuf_pars_fragment>
// #include <clipping_planes_pars_fragment>

// // CUSTOM START
// float getGummyFactor(vec3 normal, float thickness) {
// 	float reverseThickness = pow(thickness, 5.);
// 	float normalFactor = pow(abs(normal.x), 8.);
// 	float gummy = max(normalFactor, reverseThickness);
// 	return gummy;
// }

// vec3 getGummyEmissionFactor(GeometricContext geometry, float gummyFactor, vec3 gummyDiffuse) {
// 	#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
// 	PointLight pointLight;
// 	vec3 fragEmit = vec3(0.);

// 	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
// 		pointLight = pointLights[ i ];

// 		vec3 lightToFrag = pointLight.position - geometry.position;
// 		vec3 lightToFragDirection = normalize(lightToFrag);
// 		float lightToFragDistance = clamp(length(lightToFrag), 0., 1.);
// 		float lightIntensity = getDistanceAttenuation( lightToFragDistance, pointLight.distance, pointLight.decay );

// 		if(lightToFragDistance < 1.) {
// 			float intensityFactor = pow(lightIntensity, 2.);
// 			float factor = intensityFactor;
// 			fragEmit += pointLight.color * factor + intensityFactor * gummyFactor;
// 		}
// 	}

// 	vec3 col = gummyDiffuse * fragEmit;
// 	return clamp(col, 0., 1.);

// 	#endif
// }

// uniform sampler2D gummyMap;
// uniform vec3 coreColor;
// // CUSTOM END

// void main() {

// 	#include <clipping_planes_fragment>

// 	vec4 diffuseColor = vec4( diffuse, opacity );
// 	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
// 	vec3 totalEmissiveRadiance = emissive;

// 	#include <logdepthbuf_fragment>
// 	#include <map_fragment>
// 	#include <color_fragment>

// 	#include <alphamap_fragment>
// 	#include <alphatest_fragment>
// 	#include <roughnessmap_fragment>
// 	#include <metalnessmap_fragment>
// 	#include <normal_fragment_begin>
// 	#include <normal_fragment_maps>
// 	#include <clearcoat_normal_fragment_begin>
// 	#include <clearcoat_normal_fragment_maps>
// 	#include <emissivemap_fragment>

// 	// CUSTOM START
// 	float thickness = 1. - texture2D( gummyMap, vUv ).r;
// 	float gummyFactor = getGummyFactor(normal, thickness);
// 	vec3 gummyDiffuse = mix(coreColor, diffuse, gummyFactor);
// 	diffuseColor = vec4( gummyDiffuse, opacity );
// 	// CUSTOM END

// 	// accumulation
// 	#include <lights_physical_fragment>
// 	#include <lights_fragment_begin>
// 	#include <lights_fragment_maps>
// 	#include <lights_fragment_end>

// 	// modulation
// 	#include <aomap_fragment>

// 	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
// 	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

// 	#include <transmission_fragment>

// 	// CUSTOM START
// 	vec3 gummyEmissionColor = getGummyEmissionFactor(geometry, gummyFactor, gummyDiffuse);
// 	totalEmissiveRadiance = gummyEmissionColor;
// 	// CUSTOM END

// 	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

// 	#ifdef USE_SHEEN

// 		// Sheen energy compensation approximation calculation can be found at the end of
// 		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
// 		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

// 		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

// 	#endif

// 	#ifdef USE_CLEARCOAT

// 		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

// 		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

// 		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

// 	#endif

// 	#include <output_fragment>
// 	#include <tonemapping_fragment>
// 	#include <encodings_fragment>
// 	#include <fog_fragment>
// 	#include <premultiplied_alpha_fragment>
// 	#include <dithering_fragment>
// }

// `;

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
float getGummyFactor(vec3 normal, float thickness) {
	float reverseThickness = pow(thickness, 5.);
	float normalFactor = pow(abs(normal.x), 8.);
	float gummy = max(normalFactor, reverseThickness);
	return gummy;
}

vec3 getGummyEmissionFactor(vec3 geometryPosition, float gummyFactor, vec3 gummyDiffuse) {
	#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	vec3 fragEmit = vec3(0.);

	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		
		vec3 lightToFrag = pointLight.position - geometryPosition;
		vec3 lightToFragDirection = normalize(lightToFrag);
		float lightToFragDistance = clamp(length(lightToFrag), 0., 1.);
		float lightIntensity = getDistanceAttenuation( lightToFragDistance, pointLight.distance, pointLight.decay );

		if(lightToFragDistance < 1.) {
			float intensityFactor = pow(lightIntensity, 2.);
			float factor = intensityFactor;
			fragEmit += pointLight.color * factor + intensityFactor * gummyFactor;	
		}
	}

	vec3 col = gummyDiffuse * fragEmit;
	return clamp(col, 0., 1.);

	#endif
	return vec3(0.);
}

uniform sampler2D gummyMap;
uniform vec3 coreColor;
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
	float thickness = 1. - texture2D( gummyMap, vUv ).r;
	float gummyFactor = getGummyFactor(normal, thickness);
	vec3 gummyDiffuse = mix(coreColor, diffuse, gummyFactor);
	diffuseColor = vec4( gummyDiffuse, opacity );
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
	vec3 gummyEmissionColor = getGummyEmissionFactor(geometryPosition, gummyFactor, gummyDiffuse);
	totalEmissiveRadiance = gummyEmissionColor;
	// CUSTOM END

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

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
