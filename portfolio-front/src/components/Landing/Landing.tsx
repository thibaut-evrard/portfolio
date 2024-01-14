import { useTransform } from 'framer-motion';
import { CanvasContainer, ScrollContainer } from './Landing.styles';
import BubblesScene from '../wgl/Scenes/BubblesScene/BubblesScene';
import { useContext } from 'react';
import ContentSlide from './ContentSlide/ContentSlide';
import { SmoothScrollContext } from '../SmoothScroll/SmoothScroll.context';
import { Canvas } from '@react-three/fiber';
import { LOW_POWER_MODE } from '@/constants/performance';
import { LinearEncoding, NoToneMapping } from 'three';

const GL_PARAMS = {
  alpha: false,
  outputEncoding: LinearEncoding,
  toneMapping: NoToneMapping
};

const Landing = () => {
  const { screensProgress } = useContext(SmoothScrollContext);
  const translateY = useTransform(screensProgress, [0, -2], ['0%', '200%']);
  const progress = useTransform(screensProgress, [0, -2], [0, 1]);

  return (
    <ScrollContainer key={1}>
      <CanvasContainer style={{ translateY }}>
        <ContentSlide progress={progress} />
        <Canvas dpr={LOW_POWER_MODE ? 0.5 : 1} gl={GL_PARAMS}>
          <BubblesScene progress={progress} />
        </Canvas>
      </CanvasContainer>
    </ScrollContainer>
  );
};

export default Landing;
