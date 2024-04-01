export const fluidShaderVert = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vWorldPosition;
  varying vec3 vWorldNormal;
  varying vec3 vNormal;

  uniform sampler2D velocityMap;
  uniform float displacementFactor;

  void main() {
    vUv = uv;
    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    vNormal = normal;

    vec4 data = texture2D(velocityMap, vUv);

    vec3 pos = position + normal * data.x * displacementFactor;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;
