import { useGLTF, useTexture } from '@react-three/drei';
import { RepeatWrapping } from 'three';
import { GummyMesh } from './GummyMesh/GummyMesh';

export const Gummies = () => {
  const { nodes, materials } = useGLTF('/assets/gummy/models/model.glb') as any;
  const bumpMap = useTexture('/assets/textures/grain-bump.jpeg');
  bumpMap.wrapS = bumpMap.wrapT = RepeatWrapping;
  bumpMap.repeat.set(3, 3);

  return (
    <group position={[0, 0, -2]}>
      <GummyMesh
        geometry={nodes.metaball.geometry}
        material={materials.metaball}
        position={[-4, 2, 0]}
        bumpMap={bumpMap}
        color={'#ffb300'}
        coreColor={'#ff0000'}
      />
      <GummyMesh
        geometry={nodes.doughnut.geometry}
        material={materials.doughnut}
        position={[-2, -2, 0]}
        bumpMap={bumpMap}
        color={'#319fff'}
        coreColor={'#7f0093'}
      />
      <GummyMesh
        geometry={nodes.star.geometry}
        material={materials.star}
        position={[0, 0, -1]}
        bumpMap={bumpMap}
        color={'#0088ff'}
        coreColor={'#200093'}
      />
      <GummyMesh
        geometry={nodes.coin.geometry}
        material={materials.coin}
        position={[4, -3, 0]}
        bumpMap={bumpMap}
        color={'#ffd779'}
        coreColor={'#ffbb00'}
      />
    </group>
  );
};

useGLTF.preload('/model.glb');
