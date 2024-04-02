'use client';

import {
    Container,
    ContentOverlay,
    Paragraph,
    SceneWrapper,
} from './Construction.styles';
import Scene from './Scene/Scene';
import {Canvas} from '@react-three/fiber';
import {content} from './Construction.content';
import {motion, useAnimationFrame, useMotionValue} from 'framer-motion';
import {useMouse} from '@/hooks/mouse/useMouse';
import {lerp} from 'three/src/math/MathUtils.js';
import {ContainerAnimation, TextAnimation} from './Construction.animations';
import Rambling from './Rumbling/Rumbling';
import {Spacer} from '../Atoms/Spacer';

const Construction = () => {
    const tx = useMotionValue(0);
    const ty = useMotionValue(0);

    const {positionRef} = useMouse();
    useAnimationFrame(() => {
        const {x, y} = positionRef.current;
        tx.set(lerp(tx.get(), (x - 0.5) * 10, 0.1));
        ty.set(lerp(ty.get(), (y - 0.5) * 10, 0.1));
    });

    return (
        <Container {...ContainerAnimation}>
            <ContentOverlay style={{translateX: tx, translateY: ty}}>
                <motion.h4 {...TextAnimation}>{content.title}</motion.h4>
                <Spacer height={'160px'} />
                <motion.p {...TextAnimation}>{content.description}</motion.p>
                <Rambling {...TextAnimation} />
                <Spacer height={'70px'} />
            </ContentOverlay>
            <SceneWrapper>
                <Canvas camera={{position: [0, 0, 5], fov: 40}}>
                    <Scene />
                </Canvas>
            </SceneWrapper>
            <Paragraph>{content.github}</Paragraph>
        </Container>
    );
};

export default Construction;
