import {motion} from 'framer-motion';
import styled from 'styled-components';

export const ScrollContainer = styled.div({
    width: '100%',
    height: '300vh',
    display: 'flex',
    position: 'relative',
});

export const ContentContainer = styled(motion.div)({
    width: '100%',
    height: '300vh',
    position: 'fixed',
    top: 0,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

export const CanvasContainer = styled.div({
    position: 'sticky',
    top: 0,
    width: '100%',
    height: '100vh',
});
