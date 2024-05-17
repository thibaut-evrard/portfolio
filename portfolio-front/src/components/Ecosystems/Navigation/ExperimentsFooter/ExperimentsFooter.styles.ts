import { COLORS } from "@/constants/style";
import styled, { css } from "styled-components";
import { IOpenContainer } from "./ExperimentsFooter.types";

export const Container = styled.div`
    // position
    position: fixed;
    bottom: 0;
    width: 100%;

    // display
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    padding: 20px 20px;

    // cosmetic
    backdrop-filter: blur(10px);

    a {
        text-decoration: none;
    }
`;

export const InfoContainer = styled.div<IOpenContainer>(
    ({ $open }) => css`
        // position
        position: relative;
        border-radius: 0 0 20px 20px;

        // display
        padding: 2px 5px;

        // cosmetic
        background-color: transparent;

        ${$open &&
        css`
            background-color: ${COLORS.GREY};
        `}

        // animation
        transition: background-color 0.3s;
    `,
);
