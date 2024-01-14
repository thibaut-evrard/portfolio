import GlobalLighting from './GlobalLighting/GlobalLighting';
import { Gummies } from './Gummies/Gummies';
import LightingBalls from './LightingBalls/LightingBalls';

const Scene = () => {
  return (
    <>
      <Gummies />
      <LightingBalls />
      <GlobalLighting />
    </>
  );
};

export default Scene;
