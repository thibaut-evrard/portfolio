import { useThree } from "@react-three/fiber";
import { fragment } from "../ComputeShaders/WaterSimulationCompute";
import { useMemo, useRef } from "react";
import { Texture, Vector2 } from "three";
import {
    GPUComputationRenderer,
    Variable,
} from "three/examples/jsm/misc/GPUComputationRenderer.js";

interface IUpdateOptions {
    cursorPosition?: Vector2;
    cursorClicked?: boolean;
    cursorDirection?: Vector2;
    attenuation?: number;
    waveSpeed?: number;
    sampleScale?: number;
    cursorScale?: number;
    scrollScalar?: number;
    scrollAcceleration?: number;
    scrollProgress?: number;
}

export const useWaterSimCompute = () => {
    const { gl } = useThree();
    const computeTextureRef = useRef({} as Texture);

    const initUniforms = (variable: Variable) => {
        const uniforms = variable.material.uniforms;
        uniforms.time = { value: 0 };
        uniforms.cursorPosition = { value: new Vector2() };
        uniforms.cursorDirection = { value: new Vector2() };
        uniforms.prevCursorPosition = { value: new Vector2() };
        uniforms.cursorClicked = { value: false };
        uniforms.attenuation = { value: 0.001 };
        uniforms.waveSpeed = { value: 0.003 };
        uniforms.sampleScale = { value: 5 };
        uniforms.cursorScale = { value: 0.1 };
        uniforms.scrollScalar = { value: 0 };
        uniforms.scrollAcceleration = { value: 0 };
        uniforms.scrollProgress = { value: 0 };
    };

    const computeLayer = useMemo(() => {
        const gpRenderer = new GPUComputationRenderer(
            window.innerWidth / 2,
            window.innerHeight / 2,
            gl,
        );
        const computeTexture = gpRenderer.createTexture();
        const computeVariable = gpRenderer.addVariable(
            "computeTexture",
            fragment,
            computeTexture,
        );

        initUniforms(computeVariable);

        gpRenderer.setVariableDependencies(computeVariable, [computeVariable]);
        gpRenderer.init();

        return {
            renderer: gpRenderer,
            variables: {
                computeVariable: computeVariable,
            },
        };
    }, [gl]);

    const updateUniforms = (options: IUpdateOptions) => {
        const { variables } = computeLayer;
        const { uniforms } = variables.computeVariable.material;

        uniforms.time.value += 0.01;

        if (!options) return;

        if (options.cursorPosition) {
            uniforms.prevCursorPosition.value.copy(
                uniforms.cursorPosition.value,
            );
            const { x, y } = options.cursorPosition;
            uniforms.cursorPosition.value.set(x, y);
        }

        if (options.cursorClicked !== undefined) {
            uniforms.cursorClicked.value = options.cursorClicked;
        }

        if (options.attenuation !== undefined) {
            uniforms.attenuation.value = options.attenuation;
        }

        if (options.waveSpeed !== undefined) {
            uniforms.waveSpeed.value = options.waveSpeed;
        }

        if (options.sampleScale !== undefined) {
            uniforms.sampleScale.value = options.sampleScale;
        }

        if (options.cursorScale !== undefined) {
            uniforms.cursorScale.value = options.cursorScale;
        }

        if (options.scrollScalar !== undefined) {
            uniforms.scrollScalar.value = options.scrollScalar;
        }

        if (options.scrollAcceleration !== undefined) {
            uniforms.scrollAcceleration.value = options.scrollAcceleration;
        }

        if (options.cursorDirection) {
            uniforms.cursorDirection.value = options.cursorDirection;
        }

        if (options.scrollProgress) {
            uniforms.scrollProgress.value = options.scrollProgress;
        }
    };

    const update = () => {
        computeLayer.renderer.compute();

        const { renderer, variables } = computeLayer;
        const texture = renderer.getCurrentRenderTarget(
            variables.computeVariable,
        ).texture;

        computeTextureRef.current = texture;
    };

    return {
        computeTextureRef,
        update,
        updateUniforms,
    };
};
