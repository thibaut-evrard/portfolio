import { FC } from 'react';
import { ILightballMesh } from './LightballMesh.types';

const lightDefault = {
  color: '#ffffff',
  intensity: 1,
  distance: 0,
  decay: 1
};

const LightballMesh: FC<ILightballMesh> = ({ lightProps = {}, ...props }) => {
  return (
    <group {...props}>
      <mesh>
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshPhysicalMaterial emissive={lightProps.color || lightDefault.color} />
      </mesh>
      <pointLight {...lightProps} castShadow />
    </group>
  );
};

export default LightballMesh;
