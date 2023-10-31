import {MOBILE_BREAKPOINT} from '@/constants/devices';
import {WHITE} from '@/constants/style';
import styled from 'styled-components';

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    padding: '40rem 120rem',
    color: WHITE,

    [MOBILE_BREAKPOINT]: {
        padding: '40rem 40rem',
    },
});
