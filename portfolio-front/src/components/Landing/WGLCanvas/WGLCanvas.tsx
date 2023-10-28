import {Canvas} from '@react-three/fiber';
import {Environment} from '@react-three/drei';
import {NoToneMapping, LinearEncoding} from 'three';
import BackgroundTexture from 'src/components/wgl/BackgroundTexture/BackgroundTexture';
import {FC} from 'react';
import Scene from './Scene/Scene';
import {content} from '../Landing.content';
import PointerCamera from './PointerCamera/PointerCamera';
import {IWGLCanvas} from './WGLCanvas.types';
import {LOW_POWER_MODE} from '@/constants/performance';

const WGLCanvas: FC<IWGLCanvas> = ({onReady = () => undefined, progress}) => {
    return (
        <Canvas
            dpr={LOW_POWER_MODE ? 0.5 : window.devicePixelRatio}
            gl={{
                alpha: false,
                outputEncoding: LinearEncoding,
                toneMapping: NoToneMapping,
            }}
        >
            <Environment files={content.assets.hdri} />
            <PointerCamera progress={progress} />
            {/* <BackgroundTexture path={content.assets.background} /> */}
            <Scene text3d={content.assets.title3d} />
        </Canvas>
    );
};

export default WGLCanvas;
