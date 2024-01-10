import { MeshCandleMaterial } from '@/components/wgl/materials/MeshCandleMaterial/MeshCandleMaterial';
import { useGLTF, useTexture } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber';
import { FC } from 'react';
import { BufferGeometry, Color, MeshStandardMaterial, RepeatWrapping } from 'three';

const MonkeyMesh: FC<MeshProps> = (props) => {
  const { scene } = useGLTF('/assets/models/monkey/model.glb');
  const gummyMap = useTexture('/assets/models/monkey/thickness-map.png');
  gummyMap.flipY = false;

  const bumpMap = useTexture('/assets/textures/grain-bump.jpeg');
  bumpMap.wrapS = bumpMap.wrapT = RepeatWrapping;
  bumpMap.repeat.set(2, 2);

  const mesh = scene.children[0] as unknown as {
    geometry: BufferGeometry;
    material: MeshStandardMaterial;
  };

  return (
    <mesh {...props} args={[mesh.geometry, undefined]} castShadow receiveShadow>
      <MeshCandleMaterial
        gummyMap={gummyMap}
        bumpMap={bumpMap}
        bumpScale={0.005}
        coreColor={new Color('#bc2bff')}
        color={new Color('#aed0ff')}
        roughness={0.2}
      />
    </mesh>
  );
};

export default MonkeyMesh;
