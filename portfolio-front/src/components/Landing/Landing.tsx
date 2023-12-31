import {useTransform} from 'framer-motion';
import {CanvasContainer, ScrollContainer} from './Landing.styles';
import WGLCanvas from './WGLCanvas/WGLCanvas';
import {useContext} from 'react';
import ContentSlide from './ContentSlide/ContentSlide';
import {SmoothScrollContext} from '../SmoothScroll/SmoothScroll.context';

const Landing = () => {
    const {screensProgress} = useContext(SmoothScrollContext);
    const translateY = useTransform(screensProgress, [0, -2], ['0%', '200%']);
    const progress = useTransform(screensProgress, [0, -2], [0, 1]);

    return (
        <ScrollContainer key={1}>
            <CanvasContainer style={{translateY}}>
                <ContentSlide progress={progress} />
                <WGLCanvas progress={progress} />
            </CanvasContainer>
        </ScrollContainer>
    );
};

export default Landing;
