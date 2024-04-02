// requires noise to be implemented
// requires win to be implemented
export const waveUtils = /*glsl*/ `
  #define PI 3.1415926538  

  struct WindWeights {
    float w10;
    float w12;
    float w01;
    float w21;
  };

  struct WaveHeightSamples {
    float p10;
    float p12;
    float p01;
    float p21;
  };

  struct CellSteps {
    vec2 v;
    vec2 h;
  };

  float getWindWeight(float windForce, vec2 windDirection, vec2 sampleDirection, float pressureA, float pressureB, float steepnessAttenuationFactor) {
    float windAffect = windForce * dot(windDirection, sampleDirection);
    float steepness = abs(pressureA - pressureB);
    float steepnessAttenuation = clamp(1. - (pressureA + steepness * steepnessAttenuationFactor), 0., 1.);
    return 1. + windAffect * steepnessAttenuation;
  }

  WindWeights getWindWeights(WindParams wParams, WaveHeightSamples samples, float p11, float steepnessAttenuationFactor) {
    WindWeights wWeights;
    wWeights.w10 = getWindWeight(wParams.force, wParams.direction, vec2(0., 1.), p11, samples.p10, steepnessAttenuationFactor);
    wWeights.w12 = getWindWeight(wParams.force, wParams.direction, vec2(0., -1.), p11, samples.p12, steepnessAttenuationFactor);
    wWeights.w01 = getWindWeight(wParams.force, wParams.direction, vec2(-1., 0.), p11, samples.p01, steepnessAttenuationFactor);
    wWeights.w21 = getWindWeight(wParams.force, wParams.direction, vec2(1., 0.), p11, samples.p21, steepnessAttenuationFactor);

    return wWeights;
  }

  CellSteps getCellSteps(vec2 sampleStep) {
    CellSteps cStep;
    cStep.v = vec2(0., sampleStep.y);
    cStep.h = vec2(sampleStep.x, 0.);

    return cStep;
  }

  WaveHeightSamples getWaveHeightSamples(sampler2D map, vec2 uv, CellSteps cs) {
    WaveHeightSamples samples;
    samples.p10 = texture2D(map, uv + cs.h).x;
    samples.p12 = texture2D(map, uv - cs.h).x;
    samples.p01 = texture2D(map, uv - cs.v).x;
    samples.p21 = texture2D(map, uv + cs.v).x;

    return samples;
  }

  vec4 computeWave(vec2 uv, sampler2D map, vec2 sampleStep, float waveSpeed, float attenuation, float time, WindParams wParams) {
    CellSteps cSteps = getCellSteps(sampleStep);

    // compute wave speed
    float k = waveSpeed;

    // get current cell
    float a11 = texture2D(map, uv).y;
    float p11 = texture2D(map, uv).x;

    WaveHeightSamples samples = getWaveHeightSamples(map, uv, cSteps);
    WindWeights wWeights = getWindWeights(wParams, samples, p11, 4.);

    vec2 normal = vec2(p11 - samples.p21, p11 - samples.p12);

    // compute wave
    float neighbourSum = 
      samples.p10 * wWeights.w10 
      + samples.p12 * wWeights.w12 
      + samples.p01 * wWeights.w01 
      + samples.p21 * wWeights.w21;

    a11 += k * neighbourSum - 4. * p11 * k;
    p11 += a11;

    // add attenuation
    a11 *= 1. - attenuation;
    p11 *= 1. - attenuation;

    return vec4(p11, a11, normal.x, normal.y);
  }

`;
