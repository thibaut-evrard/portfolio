import { MOBILE_BREAKPOINT } from "@/constants/devices";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { COLORS } from "@/constants/style";

export const Container = styled.div`
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
    color: ${COLORS.LIGHT_GREY};
    font-weight: 300;
`;
