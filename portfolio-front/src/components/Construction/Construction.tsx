'use client';

import {
    Container,
    ContentOverlay,
    SceneWrapper,
    Spacer,
} from './Construction.styles';
import Scene from './Scene/Scene';
import {Canvas} from '@react-three/fiber';
import {content} from './Construction.content';
import {motion, useAnimationFrame, useMotionValue} from 'framer-motion';
import {useMousePosition} from '@/hooks/mouse/useMousePosition';
import {lerp} from 'three/src/math/MathUtils.js';
import {ContainerAnimation, TextAnimation} from './Construction.animations';
import Rambling from './Rambling/Rambling';

const Construction = () => {
    const tx = useMotionValue(0);
    const ty = useMotionValue(0);

    const mousePos = useMousePosition();
    useAnimationFrame(() => {
        const {x, y} = mousePos.current;
        tx.set(lerp(tx.get(), (x - 0.5) * 10, 0.1));
        ty.set(lerp(ty.get(), (y - 0.5) * 10, 0.1));
    });

    return (
        <Container {...ContainerAnimation}>
            <ContentOverlay style={{translateX: tx, translateY: ty}}>
                <motion.h4 {...TextAnimation}>{content.title}</motion.h4>
                <Spacer />
                <motion.p {...TextAnimation}>{content.description}</motion.p>
                <Rambling {...TextAnimation} />
            </ContentOverlay>
            <SceneWrapper>
                <Canvas camera={{position: [0, 0, 5], fov: 40}}>
                    <Scene />
                </Canvas>
            </SceneWrapper>
        </Container>
    );
};

export default Construction;
