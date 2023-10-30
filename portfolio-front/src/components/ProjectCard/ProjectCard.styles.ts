import {BORDER_RADIUS} from '@/constants/style';
import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div({
    position: 'relative',
    width: '100%',
    aspectRatio: '16/9',
    borderRadius: BORDER_RADIUS,
    marginBottom: '48px',
});

export const BackgroundImage = styled(Image)({
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: BORDER_RADIUS,
    objectFit: 'cover',
});

export const ContentContainer = styled.div({
    zIndex: 2,
    position: 'absolute',
    height: '100%',
    width: '100%',
    padding: 47,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',

    color: 'white',
});
