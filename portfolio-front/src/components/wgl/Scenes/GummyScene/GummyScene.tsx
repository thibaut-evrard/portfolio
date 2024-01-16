import GlobalLighting from './GlobalLighting/GlobalLighting';
import { Gummies } from './Gummies/Gummies';
import LightingBalls from './LightingBalls/LightingBalls';
import { content } from './GummyScene.content';

const GummyScene = () => {
  return (
    <>
      <Gummies modelSrc={content.model} bumpMapSrc={content.bumpMap} />
      <LightingBalls />
      <GlobalLighting />
    </>
  );
};

export default GummyScene;
