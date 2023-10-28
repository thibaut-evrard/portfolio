import {useFrame} from '@react-three/fiber';
import {RefObject, useRef} from 'react';
import {Group, Vector3} from 'three';
import Simplex from 'ts-perlin-simplex';
import {INoisyMovementOptions} from './useNoisyMovement.types';
import {useMousePosition} from '../mouse/useMousePosition';

const simplex = new Simplex.SimplexNoise();

export function useNoisyMovement(
    position: number[],
    options: INoisyMovementOptions = {
        speed: 1,
        amplitude: 1,
    }
) {
    const targetPositionRef = useRef(new Vector3());
    const initialPos = new Vector3().fromArray(position);
    const biasRef = useRef(Math.random() * 100);

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * (0.1 * options.speed);
        const b = biasRef.current;
        const p = initialPos;

        const noiseX = simplex.noise(t + b, 10) * (0.3 * options.amplitude);
        const noiseY = simplex.noise(t + b, 20) * (0.3 * options.amplitude);
        const noiseZ = simplex.noise(t + b, 30) * (0.3 * options.amplitude);

        targetPositionRef.current.set(p.x + noiseX, p.y + noiseY, p.z + noiseZ);
    });

    return targetPositionRef;
}
