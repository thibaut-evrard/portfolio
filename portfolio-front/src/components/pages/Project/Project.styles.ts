import {WHITE} from '@/constants/style';
import styled from 'styled-components';

export const Container = styled.div({
    height: 'fit-content',
    minHeight: '100vh',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    padding: '150px 80px 80px 80px',
    color: WHITE,
});

export const ProjectDescription = styled.div({
    display: 'flex',
    flexDirection: 'row',
    gap: '40px',

    width: '100%',
    height: 'fit-content',
});

export const Section = styled.div({
    height: '100%',
    p: {
        whiteSpace: 'break-spaces',
    },
});
