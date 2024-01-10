import { MeshCandleMaterial } from '@/components/wgl/materials/MeshCandleMaterial/MeshCandleMaterial';
import { useGLTF, useTexture } from '@react-three/drei';
import {
  BufferGeometry,
  Color,
  InstancedMesh,
  MeshStandardMaterial,
  RepeatWrapping,
  Texture
} from 'three';
import { useSphereClamp } from '@/hooks/wgl/gummy/useSphereClamp';
import { Ref } from 'react';

const MetaballInstances = () => {
  const numInstances = 10;

  const { scene } = useGLTF('/assets/3d/metaball.glb');
  const { material, geometry } = scene.children[0] as unknown as {
    geometry: BufferGeometry;
    material: MeshStandardMaterial;
  };

  const texture = useTexture('/assets/textures/grain-bump.jpeg');
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(5, 5);

  const ref = useSphereClamp({ numInstances, colliderScale: 1.2 });

  return (
    <instancedMesh
      ref={ref as Ref<InstancedMesh>}
      args={[geometry, undefined, numInstances]}
      castShadow
      receiveShadow
    >
      <MeshCandleMaterial
        gummyMap={material.emissiveMap as Texture}
        bumpMap={texture}
        bumpScale={0.01}
        coreColor={new Color('#bc2bff')}
        color={new Color('#aed0ff')}
        roughness={0.2}
      />
    </instancedMesh>
  );
};

export default MetaballInstances;
