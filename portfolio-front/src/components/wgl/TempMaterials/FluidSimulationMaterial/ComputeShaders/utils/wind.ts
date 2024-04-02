// requires cursor to be implemented
export const windUtils = /*glsl*/ `
    struct WindParams {
        float force;
        vec2 direction;
    };

    // get random ish wind
    WindParams getNoiseWindParams(vec2 uv, float time) {
        WindParams wParams;
    
        float a = noise3d(vec3(vec2(uv), time)) * PI * 2.;
    
        wParams.direction = vec2(cos(a), sin(a)); //vec2(cos(noise3d(vec3(vec2(uv), time)) * .5 * PI), sin(time));
        wParams.force = 0.0;
    
        return wParams;
    }

    // get no wind
    WindParams getZeroWindParams() {
        WindParams wParams;
        wParams.direction = vec2(0.);
        wParams.force = 0.0;
        return wParams;
    }

    WindParams getCursorWindParams(CursorParams cursor, float influence) {
        WindParams wParams;
        wParams.direction = vec2(-cursor.direction.y, -cursor.direction.x) * influence;
        wParams.force = .2;
        return wParams;
    }
`;
