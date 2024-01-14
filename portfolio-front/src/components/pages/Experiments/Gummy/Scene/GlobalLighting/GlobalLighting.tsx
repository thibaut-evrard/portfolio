import { Environment } from '@react-three/drei';

const GlobalLighting = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 1, 1]} intensity={0.5} />
      {/* <Environment files='assets/textures/rainforest_trail_1k.exr' /> */}
    </>
  );
};

export default GlobalLighting;
