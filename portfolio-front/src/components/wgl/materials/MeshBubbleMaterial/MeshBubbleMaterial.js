import _extends from '@babel/runtime/helpers/esm/extends';
import frag from './shaders/frag.glsl';
import vert from './shaders/vert.glsl';
import * as React from 'react';
import {MeshStandardMaterial} from 'three';
import {useFrame} from '@react-three/fiber';

class MeshBubbleMaterialImpl extends MeshStandardMaterial {
    constructor(parameters = {}) {
        super(parameters);
        this.setValues(parameters);
        this._time = {
            value: 0,
        };
        this._deformSpeed = {
            value: 1,
        };
        this._deformIntensity = {
            value: 1,
        };
        this._bias = {
            value: Math.random() * 1000,
        };
        this._customTransmissionSampler = {
            value: null,
        };
        this._rendererSize = {
            value: null,
        };
        this._blur = {
            value: null,
        };
        this._blurKernelSize = {
            value: 4,
        };
    }

    onBeforeCompile(shader) {
        // SET UNIFORMS
        shader.uniforms.time = this._time;
        shader.uniforms.deformSpeed = this._deformSpeed;
        shader.uniforms.deformIntensity = this._deformIntensity;
        shader.uniforms.bias = this._bias;
        shader.uniforms.customTransmissionSampler =
            this._customTransmissionSampler;
        shader.uniforms.rendererSize = this._rendererSize;
        shader.uniforms.blurKernelSize = this._blurKernelSize;
        shader.uniforms.blur = this._blur;

        // SET SHADERS
        shader.fragmentShader = frag;
        shader.vertexShader = vert;
    }

    get time() {
        return this._time.value;
    }

    set time(v) {
        this._time.value = v;
    }

    get deformSpeed() {
        return this._deformSpeed.value;
    }

    set deformSpeed(v) {
        this._deformSpeed.value = v;
    }

    get deformIntensity() {
        return this._deformIntensity.value;
    }

    set deformIntensity(v) {
        this._deformIntensity.value = v;
    }

    get customTransmissionSampler() {
        return this._customTransmissionSampler.value;
    }

    set customTransmissionSampler(v) {
        this._customTransmissionSampler.value = v;
    }

    get rendererSize() {
        return this._rendererSize.value;
    }

    set rendererSize(v) {
        this._rendererSize.value = v;
    }

    get blur() {
        return this._blur.value;
    }

    set blur(v) {
        this._blur.value = v;
    }

    get blurKernelSize() {
        return this._blurKernelSize.value;
    }

    set blurKernelSize(v) {
        this._blurKernelSize.value = v;
    }
}

const MeshBubbleMaterial = /*#__PURE__*/ React.forwardRef(
    ({speed = 1, ...props}, ref) => {
        const [material] = React.useState(() => new MeshBubbleMaterialImpl());

        useFrame(
            (state) =>
                material &&
                (material.time = state.clock.getElapsedTime() * speed)
        );
        return /*#__PURE__*/ React.createElement(
            'primitive',
            _extends(
                {
                    object: material,
                    ref: ref,
                    attach: 'material',
                },
                props
            )
        );
    }
);

MeshBubbleMaterial.displayName = 'MeshBubbleMaterial';

export {MeshBubbleMaterial};
