import { useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { Scene, Texture } from 'three';

interface PropsInterface {
  path: string;
  onLoad?: () => void;
}

// unsafe
function setBackground(scene: Scene, texture: Texture) {
  scene.background = texture;
}

function BackgroundTexture({ path, onLoad }: PropsInterface) {
  const texture = useTexture(path);
  const state = useThree();

  useEffect(() => {
    setBackground(state.scene, texture);
    if (onLoad) {
      onLoad();
    }
  }, [texture]);

  return null;
}

export default BackgroundTexture;
