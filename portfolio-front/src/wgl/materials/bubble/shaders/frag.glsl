#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
uniform float time;
uniform sampler2D customTransmissionSampler;
uniform vec2 rendererSize;
uniform mat4 projectionMatrix;
uniform float blur;
uniform float blurKernelSize;

varying vec2 vUv;
varying vec3 vWorldPosition;

#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif

	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphatest_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float map(float value, float min1, float max1, float min2, float max2) {
  return clamp(min2 + (value - min1) * (max2 - min2) / (max1 - min1), 0., 1.);
}

vec3 bubbleGradient(vec3 normal, vec2 uv, float time) {
    float noiseBias = noise(vec3(normal.x * 5., normal.y * 5. + time, normal.z * 5. + time)) * .2;
    float thickness = 1. - (normal.y * 0.5 + 0.5) * uv.y;
    float fresnel = 1. - abs(pow(normal.z, 1.));

    float hueBias = time / 5.;
    float hueVal = (fresnel + thickness * noiseBias + hueBias) / 2.;
    // float hueVal = fresnel;
    vec3 col = hsv2rgb(vec3(1. - hueVal, .5, 1.));

    return col * map(fresnel, 0.2, 1., 0., .7) / 1.;
}

vec4 applyBlur(sampler2D blurSampler, vec2 baseCoords) {
    vec4 col = vec4(0.,0.,0.,1.);
    float stepSize = blur / rendererSize.x;
    float maxDistance = stepSize * blurKernelSize * 0.5;
    float totalWeight = 0.;
    for(float x=-blurKernelSize/2.; x<=blurKernelSize/2.; x++) {
        for(float y=-blurKernelSize/2.; y<=blurKernelSize/2.; y++) {
            vec2 sampleCoords = baseCoords + vec2(x * stepSize, y * stepSize);
            float dist = distance(sampleCoords, baseCoords);
            float weight = map(dist, 0., maxDistance, 1., 0.3);
            vec4 transmissionSample = textureLod( blurSampler, sampleCoords, 1000. );
            col += transmissionSample * weight;
            totalWeight += weight;
        }
    }
    col /= totalWeight;
    return col;
}

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
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

    // adding fresnel
    float fresnel = 1. - abs(pow(vNormal.z, 3.));
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	// #include <transmission_fragment>
    vec4 coords = projectionMatrix * viewMatrix * vec4( vWorldPosition, 1.0 );
    vec2 refractionCoords = coords.xy / coords.w;
	refractionCoords += 1.0;
	refractionCoords /= 2.0;

    vec3 gradient = bubbleGradient(vNormal, vUv, time);

    vec4 transmissionColor = texture2D(customTransmissionSampler, refractionCoords, 1.);
    #ifdef BLUR
        transmissionColor = applyBlur(customTransmissionSampler, refractionCoords);
    #endif

    vec3 baseCol = vec3(.0,.0,.0);
    vec3 col = baseCol + transmissionColor.rgb + (gradient / 2.) + totalSpecular;
    // vec3 col = gradient;
    float alpha = 1.;

    gl_FragColor = vec4(col,alpha);
    
	// #include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	// #include <dithering_fragment>

}