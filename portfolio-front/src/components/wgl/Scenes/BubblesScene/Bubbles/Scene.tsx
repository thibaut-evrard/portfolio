import { FC, createContext, useEffect, useRef, useState } from 'react';
import { Group, Texture } from 'three';
import { useCustomRenderer } from '@/hooks/wgl/bubbles/useCustomRenderer';
import { useGLTF } from '@react-three/drei';
import { ILetterAssets, IBubbles } from './Scene.types';
import Letter from './Letter/Letter';
import { useIsMobile } from '@/hooks/device/useIsMobile';

export const LayerContext = createContext({
  layer: undefined as 'foreground' | 'background' | undefined,
  transmissionMap: undefined as undefined | Texture,
  blur: 0 as number,
});

const Bubbles: FC<IBubbles> = ({ text3d }) => {
  const isMobile = useIsMobile();
  const gltf = useGLTF(text3d);
  const { t, i, b, o } = gltf.nodes as unknown as ILetterAssets;

  const foreground = useRef({} as Group);
  const background = useRef({} as Group);

  const { transmissionRt, sceneBackgroundTextureRef } = useCustomRenderer(
    background,
    foreground
  );

  const [texture, setTexture] = useState<Texture>(new Texture());

  useEffect(() => {
    function callback() {
      setTexture(sceneBackgroundTextureRef.current);
    }
    callback();
  }, []);

  return (
    <>
      <group position={[0, -1, 0]} scale={isMobile ? 0.6 : 1}>
        <group ref={foreground}>
          <LayerContext.Provider
            value={{
              layer: 'foreground',
              transmissionMap: transmissionRt.current.texture,
              blur: 3,
            }}
          >
            <group rotation={[1.5, 0, 0]} scale={[2, 2, 2]}>
              <Letter geometry={t.geometry} />
              <Letter geometry={b.geometry} />
            </group>
          </LayerContext.Provider>
        </group>
        <group ref={background} position={[0, 0, -2]}>
          <LayerContext.Provider
            value={{
              layer: 'background',
              transmissionMap: texture,
              blur: 0,
            }}
          >
            <group rotation={[1.5, 0, 0]} scale={[2, 2, 2]}>
              <Letter geometry={i.geometry} />
              <Letter geometry={o.geometry} />
            </group>
          </LayerContext.Provider>
        </group>
      </group>
    </>
  );
};

export default Bubbles;
