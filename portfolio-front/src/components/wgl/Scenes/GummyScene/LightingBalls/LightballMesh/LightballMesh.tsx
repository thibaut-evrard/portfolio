import { FC, useRef } from 'react';
import { ILightballMesh } from './LightballMesh.types';
import { Group } from 'three';
import { useNoisyMovement } from '@/hooks/wgl/bubbles/useNoisyMovement';
import { useFrame } from '@react-three/fiber';

const lightDefault = {
  color: '#ffffff',
  intensity: 1,
  distance: 0,
  decay: 1
};

const LightballMesh: FC<ILightballMesh> = ({ lightProps = {}, ...props }) => {
  const pos = props.position ? (props.position as number[]) : [0, 0, 0];
  const targetPosition = useNoisyMovement(pos, {
    speed: 1,
    amplitude: 20
  });
  const objRef = useRef<Group>(null);

  useFrame(() => {
    if (!objRef.current) return;
    const { x, y, z } = targetPosition.current;
    objRef.current.position.set(x, y, z);
  });

  return (
    <group {...props} ref={objRef}>
      <mesh>
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshPhysicalMaterial emissive={lightProps.color || lightDefault.color} />
      </mesh>
      <pointLight {...lightProps} castShadow />
    </group>
  );
};

export default LightballMesh;
