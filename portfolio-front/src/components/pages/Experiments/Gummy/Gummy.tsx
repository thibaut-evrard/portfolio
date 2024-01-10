'use client';
import { Canvas } from '@react-three/fiber';
import { Container } from './Gummy.styles';
import Scene from './Scene/Scene';

const Gummy = () => {
  return (
    <Container>
      <Canvas shadows dpr={1}>
        <Scene />
      </Canvas>
    </Container>
  );
};

export default Gummy;
