export const fluidShaderFrag = /* glsl */ `
  #define RECIPROCAL_PI 0.3183098861837907
  #define RECIPROCAL_PI2 0.15915494309189535

  uniform sampler2D velocityMap;
  uniform sampler2D backgroundMap;
  uniform sampler2D chromeMap;
  uniform sampler2D envMap;
  uniform vec3 color;


  varying vec2 vUv;
  varying vec3 vWorldPosition;
  varying vec3 vNormal;
  varying vec3 vWorldNormal;

  float getIntensity(vec3 colour) {
    return (colour.r + colour.g + colour.b) / 3.;
  }

  vec2 equirectUv( in vec3 dir ) {
    float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
    float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
    return vec2( u, v );
  }

  vec3 getBlurred(vec2 uv, sampler2D map, float ts) {
    vec3 col = vec3(0.);
    float count = 0.;
    for (float i = -2.; i < 2.; i++) {
      for (float j = -2.; j < 2.; j++) {
        vec2 offset = vec2(i, j) * ts;
        vec2 sUv = floor(uv / ts) * ts + offset;
        col += texture2D(map, sUv).rgb;
        count++;
      }
    }
    return col / count;
  }

  vec3 getReflection(vec3 direction, sampler2D env, vec3 normal) {
    vec2 uv = equirectUv( direction );
    vec3 reflectVec = reflect( direction, -normal );
    vec2 equireflectVec = equirectUv( reflectVec );
    vec3 envColor = getBlurred(equireflectVec, env, .0001);
    return envColor;
  }

  void main() {
    // extracting data from compute shader
    vec2 bx = vec2(0., 0.002);
    vec2 by = vec2(0.002, 0.);

    vec4 data11 = texture2D(velocityMap, vUv);
    vec4 data01 = texture2D(velocityMap, vUv - bx);
    vec4 data21 = texture2D(velocityMap, vUv + bx);
    vec4 data10 = texture2D(velocityMap, vUv - by);
    vec4 data12 = texture2D(velocityMap, vUv + by);

    vec4 data = (data01 + data11 + data21 + data10 + data12) / 5.;


    vec3 normal = normalize(vec3(data.z, data.w, .1));

    // compute reflections
    vec2 reflectionSample = (normal.xy * 0.5 + vec2(0.5));
    

    vec3 camToVertex = normalize(vWorldPosition - cameraPosition);
    vec3 worldNormal = normalize(vWorldNormal + normal * .1);
    
    vec3 outCol = vec3(0.);

    // IF WE ARE WORKING WITH ENV
    #if defined ENV_MAP
      vec3 reflection = getReflection(camToVertex, envMap, worldNormal);

      outCol = mix(color, vec3(1.), max(reflection * 2. - 1., 0.));
      outCol += data.x * (reflection - .5) * 1.;

    // IF WE ARE WORKING WITH CHROME
    #elif defined CHROME_MAP
      vec2 chromeNormal = pow(normal.xy, vec2(1.));
      vec2 scaledNormal = chromeNormal * .5 + .5;

      outCol = texture2D(chromeMap, scaledNormal).rgb;
      outCol = outCol + vec3(pow(normal.x, 3.));
    #else
    // vec3 sNormal = normal * .5 + .5;
    // outCol = vec3(sNormal);
    #endif

    gl_FragColor = vec4(vec3(outCol), 1.);
  }
`;
