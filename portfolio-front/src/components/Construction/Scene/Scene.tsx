import {Environment, useGLTF} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import {content} from './Scene.content';
import {useMousePosition} from '@/hooks/mouse/useMousePosition';
import {useRef} from 'react';
import {Texture} from 'three';
import {lerp} from 'three/src/math/MathUtils.js';
import {ROTATION_INTENSITY, ROTATION_SPEED, HAT_SCALE} from './Scene.constants';
import Simplex from 'ts-perlin-simplex';

const noise = new Simplex.SimplexNoise();

const Scene = () => {
    const ref = useRef<any>();
    const gltf = useGLTF(content.hatSrc);
    const {geometry, material} = gltf.scene.children[0] as any;

    const mousePos = useMousePosition();

    const lookAtMouse = () => {
        if (!ref.current) return;
        const {x, y} = mousePos.current;
        const rotX = (y - 0.5) * ROTATION_INTENSITY.x;
        const rotY = (x - 0.5) * ROTATION_INTENSITY.y;

        ref.current.rotation.y = lerp(
            ref.current.rotation.y,
            rotY,
            ROTATION_SPEED
        );
        ref.current.rotation.x = lerp(
            ref.current.rotation.x,
            rotX,
            ROTATION_SPEED
        );
    };

    const hover = (time: number) => {
        if (!ref.current) return;
        const y = noise.noise(0.5, time * 0.2) * 0.2;
        ref.current.position.y = y;
    };

    useFrame(({clock}) => {
        if (!ref.current) return;
        lookAtMouse();
        hover(clock.elapsedTime);
    });

    if (!gltf) return null;
    return (
        <>
            <Environment preset='city' />
            {gltf && (
                <group
                    scale={HAT_SCALE}
                    rotation={[0.2, 0, 0]}
                    position={[0, -0.5, 0]}
                >
                    <mesh ref={ref}>
                        <bufferGeometry {...geometry} attach='geometry' />
                        <meshStandardMaterial
                            roughness={0.8}
                            map={material.map as Texture}
                            attach='material'
                        />
                    </mesh>
                </group>
            )}
        </>
    );
};

export default Scene;
