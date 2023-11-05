import {BORDER_RADIUS} from '@/constants/style';
import {motion} from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div({
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',

    marginTop: '80px',
    marginBottom: '40px',
});

export const MediaContainer = styled(motion.div)({
    position: 'relative',
    display: 'block',

    width: '100%',
    height: '80vh',
    maxHeight: '80vh',

    overflow: 'hidden',
    borderRadius: BORDER_RADIUS,
    backgroundColor: 'black',

    touchAction: 'none',
});

export const MediaWrapper = styled(motion.div)({
    position: 'relative',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',

    height: '100%',
    width: '100%',
});

export const MediaItemContainer = styled.div({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',

    width: '100%',
    minWidth: '100%',
    img: {
        userSelect: 'none',
    },
});

export const Image = styled(motion.img)({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    userSelect: 'none',
});
