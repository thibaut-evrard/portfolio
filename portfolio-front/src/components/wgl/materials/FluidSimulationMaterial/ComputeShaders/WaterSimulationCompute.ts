import { octaveNoise } from "./utils/octaveNoise";
import { noise } from "./utils/noise";
import { waveUtils } from "./utils/wave";
import { cursorUtils } from "./utils/cursor";

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
  ${waveUtils}
  ${octaveNoise}
  ${cursorUtils}

  // scale number
  float getScaled(float d, float f) {
    return 1. - clamp(d / f, 0., 1.);
  }

  void main() {
    float decelerationFactor = clamp(-scrollAcceleration / 10., 0., 1.);
    vec2 sampleStep = vec2(1. / resolution.xy) * sampleScale;
    vec2 aspectRatio = vec2(resolution.x / resolution.y, 1.);

    // compute cursor position
    vec2 cPos = vec2(cursorPosition.x, cursorPosition.y);
    vec2 prevCPos = vec2(prevCursorPosition.x, prevCursorPosition.y);

    vec2 uv = gl_FragCoord.xy / resolution.xy;
    // displace the uvs by the scroll speed
    vec2 nUv = uv + vec2(0., 0.001 * -scrollScalar);

    // x: pressure, y: acceleration, z: nx, w: ny
    vec4 newValues = computeWave(nUv, computeTexture, sampleStep, waveSpeed, attenuation, time);
    float ambientNoise = getOctaveNoise(nUv, time, vec3(10., 25., 40.), 0.2);
    float cursorEffect = getCursorEffect(nUv, cPos, cursorScale);
    newValues.x = newValues.x + ambientNoise + cursorEffect;

    gl_FragColor = newValues;
  }
`;
