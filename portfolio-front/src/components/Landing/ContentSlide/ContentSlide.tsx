import {FC, PropsWithChildren, useRef} from 'react';
import {Container, Wrapper} from './ContentSlide.styles';
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'framer-motion';
import {content} from '../Landing.content';
import {IContentSlide} from './ContentSlide.types';

const ContentSlide: FC<IContentSlide> = ({progress}) => {
    const translateY = useTransform(progress, [0, 1], ['0vh', '-20vh']);
    const nameOpacity = useTransform(progress, [0.2, 0.3], [0, 1]);
    const titleOpacity = useTransform(progress, [0.4, 0.5], [0, 1]);

    return (
        <Container>
            <Wrapper style={{translateY}}>
                <motion.p style={{opacity: nameOpacity}}>
                    {content.intro.title}
                </motion.p>
                <motion.h1 style={{opacity: titleOpacity}}>
                    {content.intro.description}
                </motion.h1>
            </Wrapper>
        </Container>
    );
};

export default ContentSlide;
