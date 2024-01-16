import { IUseSphereClampProps } from './useSphereClamp.types';
import { useSphere } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { InstancedMesh, MathUtils, Matrix4, Mesh, Vector3 } from 'three';

const rfs = MathUtils.randFloatSpread;

export const useSphereClamp = (
  options: IUseSphereClampProps = {
    colliderScale: 1,
    numInstances: 1
  }
) => {
  const mat = new Matrix4();
  const vec = new Vector3();

  const [ref, api] = useSphere(() => ({
    args: [options.colliderScale],
    mass: 0.5,
    angularDamping: 0.01,
    linearDamping: 0.065,
    position: [rfs(20), rfs(20), rfs(20)]
  }));

  const handleInstances = () => {
    const obj = ref.current as InstancedMesh;
    for (let i = 0; i < options.numInstances; i++) {
      obj.getMatrixAt(i, mat);
      api
        .at(i)
        .applyForce(
          vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(),
          [0, 0, 0]
        );
    }
  };

  const handleSingleObj = () => {
    const obj = ref.current as Mesh;
    mat.set(...obj.matrix.toArray());
    api
      .at(0)
      .applyForce(
        vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(),
        [0, 0, 0]
      );
  };

  useFrame(() => {
    if (!ref.current) return;
    options.numInstances > 1 ? handleInstances() : handleSingleObj();
  });

  return ref;
};
