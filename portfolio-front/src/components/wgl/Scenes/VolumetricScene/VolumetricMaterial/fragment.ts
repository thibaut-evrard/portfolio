export const fragment = /* glsl */ `
    varying vec3 vScreenNormal;
    varying vec2 vUv;
    varying float vDisp;

    vec3 mapNormal(vec3 normal) {
        return normalize(normal) * 0.5 + 0.5;
    }

    float getCornerFactor(vec2 uv) {
        vec2 mappedUv = abs(uv * 2. - 1.);
        float factor = max(mappedUv.x, mappedUv.y);
        factor = pow(factor, 3.);
        factor = min(factor * 2., 1.);
        return factor;
    }

    void main() {
        vec3 sNormal = normalize(vScreenNormal);
        float cornerProb = getCornerFactor(vUv);
        vec3 camRay = vec3(0., 0., 1.);

        vec3 mapNormal = mapNormal(sNormal);
        float dNormal = dot(sNormal, camRay);
        float fresnel = 1. - dNormal;
        fresnel = max(0., fresnel);
        // fresnel = max((fresnel - 0.2) * 2., 0.);
        // fresnel = pow(fresnel, 3.);

        float fac = (fresnel * cornerProb);
        fac = pow(fac, 1.);

        vec3 col = vec3(1., 1., 1.);
        float alpha = 1. - fac;

        float disp = dot(sNormal, camRay);
        disp = pow(disp, 2.);

        float test = vScreenNormal.z;
        // fresnel = clamp(fresnel, 0., 1.);
        // fresnel = (fresnel - 0.5) * 2.;
        // fresnel = pow(fresnel, 2.);

        gl_FragColor = vec4(vec3(col), test);
    }
`;
