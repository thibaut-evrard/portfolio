import { MeshCandleMaterial } from '@/components/wgl/materials/MeshCandleMaterial/MeshCandleMaterial';
import { useSphere } from '@react-three/cannon';
import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import {
  BufferGeometry,
  Color,
  InstancedMesh,
  MathUtils,
  Matrix4,
  MeshStandardMaterial,
  RepeatWrapping,
  Vector3,
  Texture
} from 'three';

const rfs = MathUtils.randFloatSpread;

const Clump = ({ mat = new Matrix4(), vec = new Vector3() }) => {
  const [ref, api] = useSphere(() => ({
    args: [0.7],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)]
  }));
  useFrame(() => {
    if (!ref.current) return;
    for (let i = 0; i < 10; i++) {
      const obj = ref.current as InstancedMesh;
      obj.getMatrixAt(i, mat);
      api
        .at(i)
        .applyForce(
          vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(),
          [0, 0, 0]
        );
    }
  });

  const { scene } = useGLTF('/assets/3d/metaball.glb');
  const { material, geometry } = scene.children[0] as unknown as {
    geometry: BufferGeometry;
    material: MeshStandardMaterial;
  };

  const texture = useTexture('/assets/textures/grain-bump.jpeg');
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(5, 5);

  return (
    <>
      <instancedMesh
        ref={ref as any}
        castShadow
        receiveShadow
        args={[geometry, undefined, 20]}
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
    </>
  );
};

export default Clump;
Texture;
