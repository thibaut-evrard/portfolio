export const vertex = `
precision highp sampler2D;
precision highp usampler2D;
out vec4 vColor;
out vec3 vPosition;
uniform vec2 resolution;
uniform vec2 viewport;
uniform float focal;
attribute uint splatIndex;
uniform sampler2D centerAndScaleTexture;
uniform usampler2D covAndColorTexture;

flat out uint vSplatIndex;

vec2 unpackInt16(in uint value) {
  int v = int(value);
  int v0 = v >> 16;
  int v1 = (v & 0xFFFF);
  if((v & 0x8000) != 0)
    v1 |= 0xFFFF0000;
  return vec2(float(v1), float(v0));
}

// CUSTOM START
uniform float yOcclude;
uniform float time;

out vec4 vObjectPosition;
out float vObjectVisibility;

float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
	vec2 ip = floor(p);
	vec2 u = fract(p);
	u = u*u*(3.0-2.0*u);
	
	float res = mix(
		mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
		mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
	return res*res;
}
// CUSTOM END

void main () {
    vSplatIndex = splatIndex;

    ivec2 texSize = textureSize(centerAndScaleTexture, 0);
    ivec2 texPos = ivec2(splatIndex%uint(texSize.x), splatIndex/uint(texSize.x));
    vec4 centerAndScaleData = texelFetch(centerAndScaleTexture, texPos, 0);
    vec4 center = vec4(centerAndScaleData.xyz, 1);

    // CUSTOM START
    float visibility = clamp((yOcclude - center.y) * 10., -1., 1.);
    vObjectVisibility = visibility + noise(vec2(center.z * 10., center.y * 40. - time));
    vObjectVisibility = clamp(vObjectVisibility, 0., 1.);

    float intensity = clamp((1. - vObjectVisibility) * 2., 0., 1.);

    center.y += intensity * .1;
    center.z += sin(time + intensity * 5.) * 0.005;
    // CUSTOM END

    vec4 camspace = modelViewMatrix * center;
    vec4 pos2d = projectionMatrix * camspace;

    float bounds = 1.2 * pos2d.w;
    if (pos2d.z < -pos2d.w || pos2d.x < -bounds || pos2d.x > bounds
        || pos2d.y < -bounds || pos2d.y > bounds) {
        gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
        return;
    }

    uvec4 covAndColorData = texelFetch(covAndColorTexture, texPos, 0);
    vec2 cov3D_M11_M12 = unpackInt16(covAndColorData.x) * centerAndScaleData.w;
    vec2 cov3D_M13_M22 = unpackInt16(covAndColorData.y) * centerAndScaleData.w;
    vec2 cov3D_M23_M33 = unpackInt16(covAndColorData.z) * centerAndScaleData.w;
    mat3 Vrk = mat3(
        cov3D_M11_M12.x, cov3D_M11_M12.y, cov3D_M13_M22.x,
        cov3D_M11_M12.y, cov3D_M13_M22.y, cov3D_M23_M33.x,
        cov3D_M13_M22.x, cov3D_M23_M33.x, cov3D_M23_M33.y
    );

    mat3 J = mat3(
        focal / camspace.z, 0., -(focal * camspace.x) / (camspace.z * camspace.z),
        0., focal / camspace.z, -(focal * camspace.y) / (camspace.z * camspace.z),
        0., 0., 0.
    );

    mat3 W = transpose(mat3(modelViewMatrix));
    mat3 T = W * J;
    mat3 cov = transpose(T) * Vrk * T;
    vec2 vCenter = vec2(pos2d) / pos2d.w;
    float diagonal1 = cov[0][0] + 0.3;
    float offDiagonal = cov[0][1];
    float diagonal2 = cov[1][1] + 0.3;
    float mid = 0.5 * (diagonal1 + diagonal2);
    float radius = length(vec2((diagonal1 - diagonal2) / 2.0, offDiagonal));

    // CUSTOM START
    radius *= clamp(visibility, 0., 1.);
    // CUSTOM END

    float lambda1 = mid + radius;
    float lambda2 = max(mid - radius, 0.1);
    vec2 diagonalVector = normalize(vec2(offDiagonal, lambda1 - diagonal1));
    vec2 v1 = min(sqrt(2.0 * lambda1), 1024.0) * diagonalVector;
    vec2 v2 = min(sqrt(2.0 * lambda2), 1024.0) * vec2(diagonalVector.y, -diagonalVector.x);
    uint colorUint = covAndColorData.w;
    vColor = vec4(
        float(colorUint & uint(0xFF)) / 255.0,
        float((colorUint >> uint(8)) & uint(0xFF)) / 255.0,
        float((colorUint >> uint(16)) & uint(0xFF)) / 255.0,
        float(colorUint >> uint(24)) / 255.0
    );
    vPosition = position;
    vObjectPosition = center;

    gl_Position = vec4(
        vCenter 
        + position.x * v2 / viewport * 2.0 
        + position.y * v1 / viewport * 2.0, pos2d.z / pos2d.w, 1.0);
}`;
