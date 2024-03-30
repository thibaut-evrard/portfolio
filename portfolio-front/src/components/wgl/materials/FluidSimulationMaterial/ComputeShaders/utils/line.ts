// dfLine(vec2 pa, vec2 pb, vec2 p, float cursorScale) => float
export const line = /* glsl */ `
  // draw a line
  float dfLine(vec2 a, vec2 b, vec2 p, float cursorScale) {
    vec2 d = normalize(b - a);

    // calculate key directions
    vec2 ap = normalize(p - a);
    vec2 pb = normalize(b - p);
    vec2 ab = normalize(b - a);

    // calculate bounds
    float alpha = max(1. - dot(ap, ab) - 1., 0.);
    float beta = max(1. - dot(pb, ab) - 1., 0.);
    float distanceToBounds = max(alpha, beta);

    // calculate distance to line
    vec2 x = a + d * dot(p-a, d);
    float distanceToLine = distance(p, x);

    float distanceToSegment = max(distanceToBounds, distanceToLine);

    // add caps
    float dpa = distance(p, a);
    float dpb = distance(p, b);
    float caps = min(dpa, dpb);

    float distanceToCapSegment = min(distanceToSegment, caps);
    distanceToCapSegment = getScaled(distanceToCapSegment, cursorScale);

    float trail = cos(distanceToCapSegment * PI - PI);
    trail = clamp(trail, -1., 1.);

    return trail;
  }
`;
