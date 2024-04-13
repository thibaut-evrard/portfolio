import { MOBILE_BREAKPOINT } from "@/constants/devices";
import { COLORS } from "@/constants/style";
import styled from "styled-components";

export const ProjectsSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40rem 80rem;
    color: ${COLORS.WHITE};

    ${MOBILE_BREAKPOINT} {
        padding: 40rem 40rem;
    }
`;

export const ProjectCardsContainer = styled.div`
    // position
    position: relative;
    width: 100%;

    // display
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40rem;
`;
