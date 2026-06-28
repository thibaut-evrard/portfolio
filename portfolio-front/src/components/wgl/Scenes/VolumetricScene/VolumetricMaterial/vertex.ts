export const vertex = /* glsl */ `
varying vec3 vScreenNormal;
varying vec2 vUv;
varying float vDisp;

void main() {
    vUv = uv;
    vec3 camRay = vec3(0., 0., 1.);
    vScreenNormal = normalize(normalMatrix * normalize(normal));
    float dNormal = dot(vScreenNormal, camRay) * -1.;
    dNormal = dNormal;

    float factor = dNormal;
    vDisp = factor * .5;
    // factor = clamp(factor * 2., 0., 2.);
    // factor = pow(factor, .5);
    // factor = (factor * 2.) - 1.;
    // factor = factor * 0.5;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position + normal * vDisp, 1.0);
}
`;
