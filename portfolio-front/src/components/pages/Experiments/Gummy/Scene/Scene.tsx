import { MeshCandleMaterial } from '@/components/wgl/materials/MeshCandleMaterial/MeshCandleMaterial';
import {
  BufferGeometry,
  Color,
  MeshStandardMaterial,
  PointLight,
  PointLightHelper,
  Texture
} from 'three';
import {
  Environment,
  OrbitControls,
  useGLTF,
  useHelper,
  useTexture
} from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Scene = () => {
  const { scene } = useGLTF('/assets/3d/metaball.glb');
  const { geometry, material } = scene.children[0] as unknown as {
    geometry: BufferGeometry;
    material: MeshStandardMaterial;
  };
  const groupRef = useRef({} as THREE.Group);

  const light = useRef({} as PointLight);
  useHelper(light, PointLightHelper, 1, 'cyan');

  const texture = useTexture('/assets/textures/grain-bump.jpeg');

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() / 2;
  });

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <group ref={groupRef}>
        <pointLight position={[4, 0, 1]} intensity={10} decay={1} ref={light} />
      </group>
      {/* <pointLight position={[4, 0, 1]} intensity={10} distance={10} />
      <pointLight position={[1, 1, 5]} intensity={10} distance={10} /> */}
      {/* <Environment
        files={'assets/textures/syferfontein_0d_clear_puresky_1k.hdr'}
        background
      /> */}
      <mesh args={[geometry, undefined]}>
        <MeshCandleMaterial
          gummyMap={material.emissiveMap as Texture}
          bumpMap={texture}
          bumpScale={0.01}
          coreColor={new Color('#1d00fa')}
          color={new Color('#6ca9ff')}
          roughness={0.2}
        />
      </mesh>
    </>
  );
};

export default Scene;
