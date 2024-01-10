import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Pointer from './Physics/Pointer/Pointer';
import MetaballInstances from './Physics/MetaballInstances/MetaballInstances';
import PointLightInstances from './Physics/LightInstances/LightInstances';
import GlobalLighting from './GlobalLighting/GlobalLighting';

const Scene = () => {
  return (
    <>
      <OrbitControls />

      <Physics>
        <Pointer />
        <MetaballInstances />
        <PointLightInstances color={'#ffffff'} count={2} key='whiteLights' />
        <PointLightInstances color={'#ff0000'} count={4} key='redLights' />
      </Physics>

      {/* <PostProcessing /> */}
      <GlobalLighting />
    </>
  );
};

export default Scene;
