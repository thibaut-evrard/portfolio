// @ts-ignore
import _extends from '@babel/runtime/helpers/esm/extends';
// @ts-check
import * as React from 'react';
import {
  Color,
  MeshPhysicalMaterial,
  MeshPhysicalMaterialParameters,
  Texture,
  Vector3
} from 'three';
import { useFrame } from '@react-three/fiber';
import { IUniform } from 'three';
import vertex from './shader/vertex';
import fragment from './shader/fragment';

class MeshTranslucentMaterialBase extends MeshPhysicalMaterial {
  _time: IUniform = { value: 0.0 };
  _gummyStrength: IUniform = { value: 0.0 };
  _gummyMap: IUniform = { value: new Texture() };
  _coreColor: IUniform = { value: new Color() };

  constructor(parameters = {}) {
    super(parameters);
    this.setValues(parameters);

    this._time = { value: 1.0 };
    this._gummyMap = { value: new Texture() };
    this._coreColor = { value: new Color(1, 0, 0) };
    this._gummyStrength = { value: 0.0 };

    if (!this.normalMap) {
      this.defines.USE_UV = 'UV';
    }
  }

  onBeforeCompile(shader: any) {
    // SET SHADERS
    shader.fragmentShader = fragment;
    shader.vertexShader = vertex;

    shader.uniforms.coreColor = this._coreColor;
    shader.uniforms.gummyMap = this._gummyMap;
    shader.uniforms.gummyStrength = this._gummyStrength;
  }

  get time() {
    return this._time.value;
  }

  set time(v) {
    this._time.value = v;
  }

  get gummyStrength() {
    return this._gummyStrength.value;
  }

  set gummyStrength(v) {
    this._gummyStrength.value = v;
  }

  get gummyMap() {
    return this._gummyMap.value;
  }

  set gummyMap(t: Texture) {
    this._gummyMap.value = t;
  }

  get coreColor() {
    return this._coreColor.value;
  }

  set coreColor(v: Color) {
    this._coreColor.value = new Vector3().fromArray(v.toArray());
  }
}

interface MeshTranslucentMaterialProps extends MeshPhysicalMaterialParameters {
  time?: number;
  gummyMap: Texture;
  gummyStrength?: number;
  coreColor?: Color;
}

const MeshTranslucentMaterial = /*#__PURE__*/ React.forwardRef<
  any,
  MeshTranslucentMaterialProps
>(({ ...props }, ref) => {
  const [material] = React.useState(() => new MeshTranslucentMaterialBase());
  if (!props.gummyStrength) material.gummyStrength = 1.0;

  useFrame((state) => {
    material && (material.time = state.clock.getElapsedTime());
  });
  return /*#__PURE__*/ React.createElement(
    'primitive',
    _extends(
      {
        object: material,
        ref: ref,
        attach: 'material'
      },
      props
    )
  );
});

MeshTranslucentMaterial.displayName = 'MeshTranslucentMaterial';

export { MeshTranslucentMaterial };
