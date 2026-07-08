import { Environment } from '@react-three/drei';
import BackgroundTexture from '@/components/wgl/BackgroundTexture/BackgroundTexture';
import type { FC } from 'react';
import Bubbles from './Bubbles/Scene';
import PointerCamera from './PointerCamera/PointerCamera';
import type { IBubblesScene } from './BubblesScene.types';
import { content } from './BubblesScene.content';
import { useLoader } from '@react-three/fiber';
import { HDRLoader } from 'three/examples/jsm/Addons.js';
import { EquirectangularReflectionMapping } from 'three';

const BubblesScene: FC<IBubblesScene> = ({ progress }) => {
  const envMap = useLoader(HDRLoader, content.hdri);
  envMap.setValues({ mapping: EquirectangularReflectionMapping });

  return (
    <>
      <BackgroundTexture path={content.background} />
      <Environment map={envMap} />
      <PointerCamera progress={progress} />
      <Bubbles text3d={content.model} />
    </>
  );
};

export default BubblesScene;
