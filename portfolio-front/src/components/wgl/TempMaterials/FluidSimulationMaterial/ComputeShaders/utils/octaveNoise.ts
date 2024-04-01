export const octaveNoise = /*glsl*/ `
  float getOctaveNoise(vec2 uv, float time, vec3 noiseValues, float intensity) {

    float v = noise3d(vec3(vec2(uv * noiseValues.x),time / 3.)) * 0.5;
    v += noise3d(vec3(vec2(uv * noiseValues.y),time / 2.)) * 0.25;
    v += noise3d(vec3(vec2(uv * noiseValues.z),time / 5.)) * 0.25;

    return clamp((v - 0.6) * intensity, 0., 1.);
  }
`;
