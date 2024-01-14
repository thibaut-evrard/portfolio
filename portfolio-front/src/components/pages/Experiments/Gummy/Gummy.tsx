'use client';
import { Canvas } from '@react-three/fiber';
import { Container, ContentContainer, Headline } from './Gummy.styles';
import GummyScene from '../../../wgl/Scenes/GummyScene/GummyScene';

const Gummy = () => {
  return (
    <Container>
      <ContentContainer>
        <Headline>TIBO</Headline>
      </ContentContainer>
      <Canvas shadows dpr={1}>
        <GummyScene />
      </Canvas>
    </Container>
  );
};

export default Gummy;
