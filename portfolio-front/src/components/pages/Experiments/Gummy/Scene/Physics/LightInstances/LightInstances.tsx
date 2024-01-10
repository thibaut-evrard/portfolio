import { useSphereClamp } from '@/hooks/wgl/gummy/useSphereClamp';
import { useFrame } from '@react-three/fiber';
import { FC, Ref, useRef } from 'react';
import { InstancedMesh, Matrix4, Group } from 'three';
import { ILightInstances } from './LightInstances.types';

const PointLightInstances: FC<ILightInstances> = ({ count = 1, color = '#ffffff' }) => {
  const arr = new Array(count).fill(0);
  const ref = useSphereClamp({ numInstances: count, colliderScale: 1.2 });
  const lightsRef = useRef<Group>(null);

  useFrame(() => {
    const mat = new Matrix4();
    const obj = ref.current as InstancedMesh;

    for (let i = 0; i < count; i++) {
      obj.getMatrixAt(i, mat);
      console.log(lightsRef.current?.children[i]);
      lightsRef.current?.children[i].position.setFromMatrixPosition(mat);
    }
  });

  return (
    <>
      <group ref={lightsRef}>
        {arr.map((_, i) => (
          <pointLight
            key={i}
            intensity={20}
            decay={3}
            color={color}
            castShadow
            receiveShadow
          />
        ))}
      </group>
      <instancedMesh ref={ref as Ref<InstancedMesh>} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial emissive={color} />
      </instancedMesh>
    </>
  );
};

export default PointLightInstances;
