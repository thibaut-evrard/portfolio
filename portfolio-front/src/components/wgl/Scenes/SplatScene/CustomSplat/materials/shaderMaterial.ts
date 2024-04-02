import * as THREE from "three";

function shaderMaterial(
    uniforms: any,
    vertexShader: any,
    fragmentShader: any,
    onInit?: any,
) {
    class CustomMaterial extends THREE.ShaderMaterial {
        key = "";

        constructor(parameters = {}) {
            const entries = Object.entries(uniforms);
            // Create unforms and shaders
            super({
                uniforms: entries.reduce((acc, [name, value]) => {
                    const uniform = THREE.UniformsUtils.clone({
                        [name]: {
                            value,
                        },
                    });
                    return {
                        ...acc,
                        ...uniform,
                    };
                }, {}),
                vertexShader,
                fragmentShader,
            });
            // Create getter/setters
            this.key = "";
            entries.forEach(([name]) =>
                Object.defineProperty(this, name, {
                    get: () => this.uniforms[name].value,
                    set: (v) => (this.uniforms[name].value = v),
                }),
            );

            // Assign parameters, this might include uniforms
            Object.assign(this, parameters);
            // Call onInit
            if (onInit) onInit(this);
        }
    }
    const material = new CustomMaterial();
    material.key = THREE.MathUtils.generateUUID();
    return material;
}

export { shaderMaterial };
