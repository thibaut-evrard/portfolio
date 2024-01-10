import { Bloom, EffectComposer } from '@react-three/postprocessing';

const PostProcessing = () => {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.1} />
    </EffectComposer>
  );
};

export default PostProcessing;
