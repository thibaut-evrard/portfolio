import {WHITE} from '@/constants/style';
import styled from 'styled-components';

export const Container = styled.div({
    position: 'fixed',
    zIndex: 1,

    top: 0,
    width: '100%',
    padding: '48px 80px',

    display: 'flex',
    justifyContent: 'space-between',
});

export const Caption = styled.p({
    fontSize: 18,
    fontWeight: 400,
    color: WHITE,
    textTransform: 'uppercase',
});
