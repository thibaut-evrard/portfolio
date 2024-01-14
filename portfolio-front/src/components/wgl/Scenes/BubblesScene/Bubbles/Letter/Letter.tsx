import { useFrame, useThree } from '@react-three/fiber';
import { Group, Material, Vector2 } from 'three';
import { MeshBubbleMaterial } from '@/components/wgl/Materials/MeshBubbleMaterial/MeshBubbleMaterial';
import { useContext, useRef } from 'react';
import { LayerContext } from '../Scene';
import { ILetter } from './Letter.types';
import { useNoisyMovement } from '@/hooks/wgl/bubbles/useNoisyMovement';

function Letter({ geometry, ...props }: ILetter) {
  const { transmissionMap, blur } = useContext(LayerContext);
  const objRef = useRef(new Group());
  const materialRef = useRef(new Material());
  const { gl } = useThree();
  const rendererSize = new Vector2();
  gl.getSize(rendererSize);

  const pos = props.position ? (props.position as number[]) : [0, 0, 0];
  const targetPosition = useNoisyMovement(pos);

  useFrame(() => {
    const { x, y, z } = targetPosition.current;
    objRef.current.position.set(x, y, z);
  });

  if (blur) {
    materialRef.current.defines = {
      BLUR: blur
    };
  }

  return (
    <group {...props} ref={objRef}>
      <mesh>
        <bufferGeometry {...geometry} attach={'geometry'} />
        <MeshBubbleMaterial
          ref={materialRef}
          roughness={0.3}
          reflectivity={0.9}
          transparent={true}
          depthWrite={false}
          deformSpeed={0.7}
          deformIntensity={0.2}
          rendererSize={rendererSize}
          customTransmissionSampler={transmissionMap}
          blur={blur}
          blurKernelSize={8}
        />
      </mesh>
    </group>
  );
}

export default Letter;
