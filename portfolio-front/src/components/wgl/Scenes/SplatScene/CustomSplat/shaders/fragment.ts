import { REVISION } from "three";

export const fragment = `
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
in vec4 vColor;
in vec3 vPosition;
flat in uint vSplatIndex;

// CUSTOM START
uniform float yOcclude;

in float vObjectVisibility;
in vec4 vObjectPosition;
// CUSTOM END

void main () {
    float A = -dot(vPosition.xy, vPosition.xy);
    if (A < -4.0) discard;
    float B = exp(A) * vColor.a;

    // CUSTOM START
    vec3 col = vColor.rgb;
    col *= pow(vObjectVisibility,  2.);
    col.r = vColor.r;
    
    B *= clamp(pow(vObjectVisibility,  2.), 0.0, 1.);
    // CUSTOM END

    vec4 diffuseColor = vec4(col.rgb, B);
    #include <alphatest_fragment>
    #include <alphahash_fragment>
    gl_FragColor = diffuseColor;

    #include <colorspace_fragment>
}
`;
