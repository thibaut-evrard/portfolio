import {BLACK, ORANGE, WHITE} from '@/constants/style';
import {motion} from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)({
    position: 'relative',

    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLACK,
    color: WHITE,
});

export const SceneWrapper = styled.div({
    position: 'absolute',
    width: '200px',
    height: '160px',
});

export const ContentOverlay = styled(motion.div)({
    zIndex: 1,
    textAlign: 'center',
    width: '100%',
    h4: {
        color: ORANGE,
    },
});

export const Spacer = styled.div({
    height: '120px',
});
