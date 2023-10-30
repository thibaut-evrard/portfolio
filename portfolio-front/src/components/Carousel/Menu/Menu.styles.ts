import styled from 'styled-components';
import {IMediaSelector} from './Menu.types';
import {WHITE} from '@/constants/style';

export const Container = styled.div({
    position: 'relative',
    height: '40px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    gap: 10,
});

export const MediaSelector = styled.div<IMediaSelector>(({active}) => ({
    width: '10px',
    height: '10px',

    backgroundColor: WHITE,
    borderRadius: '50%',
    opacity: active ? 1 : 0.5,
    transition: 'opacity 0.2s ease-in-out',

    cursor: 'pointer',
}));
