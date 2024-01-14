import LightballMesh from './LightballMesh/LightballMesh';

const LightingBalls = () => {
  return (
    <group>
      <LightballMesh
        position={[0, 0, -8]}
        lightProps={{
          intensity: 4,
          decay: 1.5,
          distance: 0,
          color: '#ffccff'
        }}
      />
      <LightballMesh
        position={[8, -2, -8]}
        lightProps={{
          intensity: 3,
          decay: 1.5,
          distance: 0,
          color: '#ffffcc'
        }}
      />
      <LightballMesh
        position={[-8, 2, -8]}
        lightProps={{
          intensity: 3,
          decay: 1.5,
          distance: 0,
          color: '#ccffff'
        }}
      />
    </group>
  );
};

export default LightingBalls;
