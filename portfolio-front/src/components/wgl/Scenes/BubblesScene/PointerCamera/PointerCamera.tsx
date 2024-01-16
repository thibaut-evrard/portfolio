import {useMousePosition} from '@/hooks/mouse/useMousePosition';
import {PerspectiveCamera as DreiCamera} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import {useRef} from 'react';
import {PerspectiveCamera} from 'three';
import {lerp} from 'three/src/math/MathUtils.js';
import {IPointerCamera} from './PointerCamera.types';

const INTENSITY = 1;
const SPEED = 0.1;

const PointerCamera = ({progress}: IPointerCamera) => {
    const cameraRef = useRef<PerspectiveCamera>(null);

    const mousePos = useMousePosition();

    useFrame(() => {
        const x = mousePos.current.x - 0.5;
        const y = mousePos.current.y - 0.5;

        const camera = cameraRef.current;
        if (!camera) return;
        camera.position.x = lerp(camera.position.x, x * INTENSITY, SPEED);
        camera.position.y = lerp(
            camera.position.y - progress.get() / 2,
            y * INTENSITY - progress.get() / 2,
            SPEED
        );
        camera.lookAt(0, camera.position.y, 2);
    });

    return (
        <DreiCamera
            makeDefault
            fov={60}
            position={[0, 0, 10]}
            ref={cameraRef}
        />
    );
};

export default PointerCamera;
