import { shaderMaterial } from "@react-three/drei";
import { fluidShaderFrag } from "./FluidShader.frag";
import { fluidShaderVert } from "./FluidShader.vert";
import { ReactThreeFiber, extend } from "@react-three/fiber";
import { Color, ShaderMaterial, Texture } from "three";

export const BodyFluidShaderMaterial = shaderMaterial(
  {
    time: 0,
    velocityMap: new Texture(),
    backgroundMap: new Texture(),
    envMap: new Texture(),
    color: new Color(),
    displacementFactor: 0,
  },
  fluidShaderVert,
  fluidShaderFrag
);

interface IFluidShaderMaterial extends ShaderMaterial {
  ref?: React.RefObject<ShaderMaterial>;
  time?: number;
  velocityMap?: Texture;
  backgroundMap?: Texture;
  color?: Color;
  displacementFactor?: number;
  envMap?: Texture;
}

extend({ BodyFluidShaderMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      bodyFluidShaderMaterial: ReactThreeFiber.Object3DNode<
        IFluidShaderMaterial,
        typeof BodyFluidShaderMaterial
      >;
    }
  }
}
