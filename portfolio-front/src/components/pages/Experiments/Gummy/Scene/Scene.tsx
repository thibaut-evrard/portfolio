import { MeshCandleMaterial } from '@/components/wgl/materials/MeshCandleMaterial/MeshCandleMaterial';
import { Color, Texture } from 'three';
import { Environment, OrbitControls, useTexture } from '@react-three/drei';

const Scene = () => {
  const texture = useTexture('/assets/textures/background.png');

  return (
    <>
      <OrbitControls />
      <Environment files={'assets/textures/syferfontein_0d_clear_puresky_1k.hdr'} />
      <mesh>
        <sphereGeometry />
        <MeshCandleMaterial
          gummyMap={texture as Texture}
          coreColor={new Color('#000000')}
          color={new Color('#ffffff')}
          roughness={0.1}
        />
      </mesh>
    </>
  );
};

export default Scene;
