'use client';
import { Canvas } from '@react-three/fiber';
import { Container, ContentContainer, Headline } from './Gummy.styles';
import Scene from './Scene/Scene';

const Gummy = () => {
  return (
    <Container>
      <ContentContainer>
        <Headline>TIBO</Headline>
      </ContentContainer>
      <Canvas shadows dpr={1}>
        <Scene />
      </Canvas>
    </Container>
  );
};

export default Gummy;
