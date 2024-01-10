import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Pointer from './Physics/Pointer/Pointer';
import MetaballInstances from './Physics/MetaballInstances/MetaballInstances';
import PointLightInstances from './Physics/LightInstances/LightInstances';
import GlobalLighting from './GlobalLighting/GlobalLighting';
import PostProcessing from './PostProcessing/PostProcessing';

const Scene = () => {
  return (
    <>
      <OrbitControls />

      <Physics>
        <Pointer />
        <MetaballInstances />
        <PointLightInstances color={'#ffffff'} count={2} key='whiteLights' />
        {/* <PointLightInstances color={'#ffaaaa'} count={2} key='redLights' />
        <PointLightInstances color={'#aaffaa'} count={2} key='greenLights' /> */}
      </Physics>

      {/* <PostProcessing /> */}
      <GlobalLighting />
    </>
  );
};

export default Scene;
