import { octaveNoise } from "./utils/octaveNoise";
import { noise } from "./utils/noise";
import { waveUtils } from "./utils/wave";
import { cursorUtils } from "./utils/cursor";
import { windUtils } from "./utils/wind";

export const fragment = /*glsl*/ `
  #define PI 3.1415926538
  uniform float time;
  uniform vec2 cursorPosition;
  uniform vec2 prevCursorPosition;
  uniform vec2 cursorDirection;
  uniform bool cursorClicked;
  
  uniform float attenuation;
  uniform float waveSpeed;
  uniform float sampleScale;
  uniform float cursorScale;

  // scoll effect
  uniform float scrollScalar;
  uniform float scrollAcceleration;
  uniform float scrollProgress;

  // import utils
  ${noise}
  ${cursorUtils}
  ${windUtils}
  ${waveUtils}
  ${octaveNoise}

  // scale number
  float getScaled(float d, float f) {
    return 1. - clamp(d / f, 0., 1.);
  }

  float getNoiseMask(vec2 uv) {
    float y = uv.y;
    float yToCenter = abs(y - 0.5) * 2.;
    //float maskIntensity = max(yToCenter - 0.5, 0.) * 2.;
    return yToCenter;
  }

  void main() {
    vec2 sampleStep = vec2(1. / resolution.xy) * sampleScale;
    vec2 aspectRatio = vec2(resolution.x / resolution.y, 1.);

    vec2 uv = gl_FragCoord.xy / resolution.xy;
    // displace the uvs by the scroll speed
    vec2 nUv = uv + vec2(0., 0.001 * -clamp(scrollScalar, -10., 10.));
    vec2 pUv = uv + vec2(0., 0.001 * scrollAcceleration);

    // compute interactions
    CursorParams cursor = getCursorParams(cursorPosition, prevCursorPosition, cursorDirection, cursorScale);
    float cursorEffect = getCursorInfluence(nUv, cursor, 1.) * 0.2;
    float cursorWindInfluence = getCursorInfluence(nUv, cursor, 10.);
    WindParams windParams = getCursorWindParams(cursor, cursorWindInfluence);

    // x: pressure, y: acceleration, z: nx, w: ny
    vec4 newValues = computeWave(nUv, computeTexture, sampleStep, waveSpeed, attenuation, time, windParams);
    float ambientNoise = getOctaveNoise(nUv, time * 1., vec3(10., 25., 28.), 0.5);
    float noiseMask = getNoiseMask(nUv);

    noiseMask = noiseMask;

    newValues.x = newValues.x + ambientNoise * noiseMask + cursorEffect;
    
    gl_FragColor = newValues;
  }
`;
