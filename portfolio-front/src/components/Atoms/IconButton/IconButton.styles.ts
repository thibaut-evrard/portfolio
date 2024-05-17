import styled from "styled-components";
import { COLORS } from "@/constants/style";

export const IconButton = styled.button`
    // position
    width: 40px;
    height: 40px;

    // display
    display: flex;
    justify-content: center;
    align-items: center;

    // cosmetics
    border: none;
    opacity: 0.6;
    background-color: ${COLORS.WHITE};
    color: ${COLORS.BLACK};
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    border-radius: 50%;

    transition: 0.5s ease-in-out;

    /* &:hover {
        background-color: ${COLORS.BLACK};
        color: ${COLORS.WHITE};
    } */
`;
