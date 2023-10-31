import {MOBILE_BREAKPOINT} from '@/constants/devices';
import styled from 'styled-components';

export const Container = styled.div({
    position: 'fixed',
    zIndex: 1,

    top: 0,
    width: '100%',
    padding: '48px 80px',

    display: 'flex',
    justifyContent: 'space-between',

    [MOBILE_BREAKPOINT]: {
        padding: '24rem 40rem',
    },
});
