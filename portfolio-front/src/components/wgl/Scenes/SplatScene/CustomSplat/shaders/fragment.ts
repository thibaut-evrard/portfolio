import { REVISION } from "three";

export const fragment = `
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
in vec4 vColor;
in vec3 vPosition;
void main () {
  float A = -dot(vPosition.xy, vPosition.xy);
  if (A < -4.0) discard;
  float B = exp(A) * vColor.a;
  vec4 diffuseColor = vec4(vColor.rgb, B);
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  gl_FragColor = diffuseColor;

  #include <colorspace_fragment>
}
`;
