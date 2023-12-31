import {LIGHT_GREY, WHITE} from '@/constants/style';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import {MOBILE_BREAKPOINT} from '@/constants/devices';

export const Container = styled.div({
    height: 'fit-content',
    minHeight: '100vh',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    padding: '150rem 80rem 80rem 80rem',

    color: WHITE,

    [MOBILE_BREAKPOINT]: {
        padding: '150rem 40rem 80rem 40rem',
    },
});

export const ProjectDescription = styled.div({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20rem',

    width: '100%',
    height: 'fit-content',
    justifyContent: 'space-between',

    [MOBILE_BREAKPOINT]: {
        gap: '10rem',
    },
});

export const Section = styled.div({
    height: '100%',
    minWidth: '400px',
    maxWidth: '600px',
    p: {
        whiteSpace: 'break-spaces',
    },

    [MOBILE_BREAKPOINT]: {
        minWidth: 0,
    },
});

export const Paragraph = styled(ReactMarkdown)({
    color: LIGHT_GREY,
    fontWeight: 300,
});

export const Title = styled.h2({
    margin: '0.2em 0',
});
