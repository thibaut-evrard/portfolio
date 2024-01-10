import { MeshCandleMaterial } from '@/components/wgl/materials/MeshCandleMaterial/MeshCandleMaterial';
import { useTexture } from '@react-three/drei';
import { Color, InstancedMesh, RepeatWrapping } from 'three';
import { useSphereClamp } from '@/hooks/wgl/gummy/useSphereClamp';
import { Ref } from 'react';

const MetaballInstances = () => {
  const numInstances = 20;

  const texture = useTexture('/assets/textures/grain-bump.jpeg');
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(5, 5);

  const ref = useSphereClamp({ numInstances, colliderScale: 1 });

  return (
    <instancedMesh
      ref={ref as Ref<InstancedMesh>}
      args={[undefined, undefined, numInstances]}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshCandleMaterial
        gummyMap={texture}
        bumpScale={0.2}
        coreColor={new Color('#1400ea')}
        color={new Color('#29cdff')}
        roughness={0.5}
      />
    </instancedMesh>
  );
};

export default MetaballInstances;
