import {BORDER_RADIUS} from '@/constants/style';
import styled from 'styled-components';

export const Container = styled.div({
    marginTop: '80px',
    marginBottom: '80px',
    position: 'relative',
    display: 'block',

    height: '80vh',
    maxHeight: '80vh',
    aspectRatio: '16/9',
    overflow: 'hidden',
    borderRadius: BORDER_RADIUS,
});

export const Image = styled.img({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});
