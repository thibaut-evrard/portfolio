import * as React from 'react';
import {
    MeshStandardMaterial,
    MeshStandardMaterialParameters,
    Texture,
    Vector2
} from 'three';
declare type BubbleMaterialType = JSX.IntrinsicElements['meshStandardMaterial'] & {
    time?: number;
    distort?: number;
    radius?: number;
    backgroundTexture?: Texture;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            distortMaterialImpl: BubbleMaterialType;
        }
    }
}
export declare const MeshBubbleMaterial: React.ForwardRefExoticComponent<
    Pick<
        import('@react-three/fiber').ExtendedColors<
            import('@react-three/fiber').Overwrite<
                Partial<MeshStandardMaterial>,
                import('@react-three/fiber').NodeProps<
                    MeshStandardMaterial,
                    [MeshStandardMaterialParameters]
                >
            >
        > & {
            time?: number | undefined;
            deformSpeed?: number | undefined;
            deformIntensity: number | undefined;
            customTransmissionSampler: Texture | undefined | null;
            rendererSize: Vector2 | undefined | null;
            blur: number;
            blurKernelSize: number;
        } & {
            speed?: number | undefined;
            factor?: number | undefined;
        },
        | 'attach'
        | 'args'
        | 'children'
        | 'key'
        | 'onUpdate'
        | 'time'
        | keyof MeshStandardMaterial
        | 'radius'
        | 'speed'
        | 'distort'
        | 'factor'
    > &
        React.RefAttributes<unknown>
>;
export {};