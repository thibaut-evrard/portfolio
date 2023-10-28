import {
    HTMLMotionProps,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'framer-motion';
import {
    CanvasContainer,
    ContentContainer,
    ScrollContainer,
} from './Landing.styles';
import WGLCanvas from './WGLCanvas/WGLCanvas';
import {useRef} from 'react';
import ContentSlide from './ContentSlide/ContentSlide';
import {useSmoothScroll} from '@/hooks/page/useSmoothScroll';

const Landing = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const introProgress = useSmoothScroll(scrollYProgress);

    return (
        <ScrollContainer key={1} ref={containerRef}>
            <CanvasContainer>
                <ContentSlide progress={introProgress} />
                <WGLCanvas progress={introProgress} />
            </CanvasContainer>
        </ScrollContainer>
    );
};

export default Landing;
