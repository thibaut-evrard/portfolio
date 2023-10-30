import {LIGHT_GREY, WHITE} from '@/constants/style';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const Container = styled.div({
    height: 'fit-content',
    minHeight: '100vh',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    padding: '150px 120px 80px 120px',
    color: WHITE,
});

export const ProjectDescription = styled.div({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '80px',

    width: '100%',
    height: 'fit-content',
});

export const Section = styled.div({
    height: '100%',
    p: {
        whiteSpace: 'break-spaces',
    },
});

export const Paragraph = styled(ReactMarkdown)({
    color: LIGHT_GREY,
    fontWeight: 300,
});
