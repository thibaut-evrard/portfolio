import {motion} from 'framer-motion';
import styled from 'styled-components';

export const FakeScrollWrapper = styled.div({
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
});

export const ContentContainer = styled(motion.div)({
    position: 'relative',
    width: '100%',
    minHeight: '100%',
});
