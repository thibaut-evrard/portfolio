export const cursorUtils = /*glsl*/ `
  float getCursorEffect(vec2 uv, vec2 cPos, float cursorScale) {
    float d = distance(uv, cPos);
    d *= 1. / (cursorScale * 0.1);

    if(d > 1.) return 0.;
    return (1. - d) * 0.1;
  }
`;
