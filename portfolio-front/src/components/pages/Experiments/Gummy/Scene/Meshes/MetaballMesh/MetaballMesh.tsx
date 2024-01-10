import { MeshCandleMaterial } from '@/components/wgl/materials/MeshCandleMaterial/MeshCandleMaterial';
import { useGLTF, useTexture } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber';
import { FC } from 'react';
import {
  BufferGeometry,
  Color,
  MeshStandardMaterial,
  RepeatWrapping,
  Texture
} from 'three';

const MetaballMesh: FC<MeshProps> = (props) => {
  const { scene } = useGLTF('/assets/3d/metaball.glb');
  const { material, geometry } = scene.children[0] as unknown as {
    geometry: BufferGeometry;
    material: MeshStandardMaterial;
  };

  const texture = useTexture('/assets/textures/grain-bump.jpeg');
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(5, 5);

  return (
    <mesh {...props} args={[geometry, undefined]} scale={0.5} castShadow receiveShadow>
      <MeshCandleMaterial
        gummyMap={material.emissiveMap as Texture}
        bumpMap={texture}
        bumpScale={0.01}
        coreColor={new Color('#bc2bff')}
        color={new Color('#aed0ff')}
        roughness={0.2}
      />
    </mesh>
  );
};

export default MetaballMesh;
