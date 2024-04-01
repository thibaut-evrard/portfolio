export const cursorUtils = /*glsl*/ `

  struct CursorParams {
    float speed;
    vec2 direction;
    vec2 position;
    float scale;
  };

  CursorParams getCursorParams(vec2 cPos, vec2 prevCPos, vec2 cDir, float scale) {
    CursorParams cParams;
    cParams.position = cPos;
    cParams.direction = cPos - prevCPos;
    if(length(cParams.direction) > 0.001) {
      cParams.direction = normalize(cParams.direction);
    }
    cParams.speed = distance(cPos, prevCPos);
    cParams.scale = scale;
    return cParams;
  }

  float getCursorInfluence(vec2 uv, CursorParams cursor, float scale) {
    float dst = distance(uv, cursor.position);
    float dstScaled = dst / (cursor.scale * scale);
    float iDstScaled = 1. - dstScaled;
    float influence = clamp(iDstScaled, 0., 1.);
    return smoothstep(0., 1., influence);
  }
`;
