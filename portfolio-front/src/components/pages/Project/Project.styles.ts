import { LIGHT_GREY, WHITE } from "@/constants/style";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { MOBILE_BREAKPOINT } from "@/constants/devices";
import { H2 } from "@/components/Atoms/Typography/Typography.styles";

export const Container = styled.div`
    height: fit-content;
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    padding: 150rem 80rem 80rem 80rem;

    color: ${WHITE};

    ${MOBILE_BREAKPOINT} {
        padding: 90rem 40rem 80rem 40rem;
    }
`;

export const ProjectDescription = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20rem;

    width: 100%;
    height: fit-content;
    justify-content: space-between;

    ${MOBILE_BREAKPOINT} {
        gap: 10rem;
    }
`;

export const Section = styled.div`
    height: 100%;
    min-width: 400px;
    max-width: 600px;
    p: {
        white-space: break-spaces;
    };

    ${MOBILE_BREAKPOINT} {
        min-width: 0,
    },
`;

export const Paragraph = styled(ReactMarkdown)`
    color: ${LIGHT_GREY};
    font-weight: 300;
`;

export const Title = styled(H2)`
    margin: 0.2em 0;
`;
