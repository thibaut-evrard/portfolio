import { COLORS } from "@/constants/style";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "@/constants/devices";
import { H2 } from "@/components/Atoms/Typography/Typography.styles";

export const Container = styled.div`
    height: fit-content;
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    padding: 150rem 80rem 80rem 80rem;

    color: ${COLORS.WHITE};

    ${MOBILE_BREAKPOINT} {
        padding: 90rem 40rem 80rem 40rem;
    }
`;

export const Title = styled(H2)`
    margin: 0.2em 0;
`;
