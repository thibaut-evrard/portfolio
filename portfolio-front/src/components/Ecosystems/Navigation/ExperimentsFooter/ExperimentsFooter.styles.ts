import { COLORS } from "@/constants/style";
import styled from "styled-components";

export const Container = styled.div`
    // position
    position: fixed;
    bottom: 0;
    height: 30px;
    width: 100%;

    // display
    display: flex;
    align-items: center;
    padding: 0 20px;

    // cosmetic
    backdrop-filter: blur(10px);
`;

export const CodeIcon = styled.a`
    // position
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;

    // display
    display: flex;
    justify-content: center;
    align-items: center;

    // cosmetics
    opacity: 0.6;
    background-color: ${COLORS.WHITE};
    color: ${COLORS.BLACK};
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    border-radius: 50%;

    transition: 0.5s ease-in-out;

    &:hover {
        background-color: ${COLORS.BLACK};
        color: ${COLORS.WHITE};
    }
`;
