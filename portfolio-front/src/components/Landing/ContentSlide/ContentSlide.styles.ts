import {motion} from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)({
    width: '100%',
    height: '100vh',
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'center',
});

export const Wrapper = styled(motion.div)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});
