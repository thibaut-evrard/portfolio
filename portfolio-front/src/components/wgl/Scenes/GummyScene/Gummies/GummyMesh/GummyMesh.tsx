import { MeshTranslucentMaterial } from '@/components/wgl/Materials/MeshTranslucentMaterial/MeshTranslucentMaterial';
import { FC, useRef } from 'react';
import { IGummyMesh } from './GummyMesh.types';
import { Color, Group, Texture } from 'three';
import { useNoisyMovement } from '@/hooks/wgl/bubbles/useNoisyMovement';
import { useFrame } from '@react-three/fiber';

export const GummyMesh: FC<IGummyMesh> = ({
  position,
  geometry,
  material,
  color = '#ff0000',
  coreColor = '#006688',
  bumpMap = null
}) => {
  const targetPosition = useNoisyMovement(position, { speed: 0.5, amplitude: 5 });
  const objRef = useRef<Group>(null);

  useFrame(() => {
    if (!objRef.current) return;
    const { x, y, z } = targetPosition.current;
    objRef.current.rotation.y += 0.01;
    objRef.current.rotation.x += 0.005;
    objRef.current.position.set(x, y, z);
  });

  return (
    <group position={position} ref={objRef}>
      <mesh args={[geometry, undefined]} castShadow receiveShadow>
        <MeshTranslucentMaterial
          gummyMap={material.emissiveMap as Texture}
          bumpMap={bumpMap}
          bumpScale={0.03}
          coreColor={new Color(coreColor)}
          color={new Color(color)}
          roughness={0.4}
          gummyStrength={1}
        />
      </mesh>
    </group>
  );
};
