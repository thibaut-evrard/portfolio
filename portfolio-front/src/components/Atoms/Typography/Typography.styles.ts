import { COLORS } from "@/constants/style";
import styled, { css } from "styled-components";
import { IStyledA } from "./Typography.types";

export const Caption = styled.p`
    font-size: 18rem;
    font-weight: 400;

    color: ${COLORS.WHITE};
    text-transform: uppercase;
    text-decoration: none;
`;

export const Headline = styled.h1`
    font-size: 120rem;
    font-weight: 500;
`;

export const H2 = styled.h2`
    font-size: 64rem;
    font-weight: 500;
`;

export const H3 = styled.h3`
    font-size: 24rem;
    font-weight: 500;
`;

export const H4 = styled.h4`
    font-size: 32rem;
    font-weight: 500;
`;

export const H5 = styled.h5`
    font-size: 24rem;
    font-weight: 500;
`;

export const P = styled.p`
    font-size: 18rem;
    font-weight: 500;
`;

export const PSmall = styled.p`
    font-size: 14;
    font-weight: 400;
`;

export const A = styled.a<IStyledA>(
    ({ $secondary }) => css`
        cursor: pointer;
        color: #b02525;

        ${$secondary &&
        css`
            font-size: 18px;
            font-weight: 500;
            text-transform: uppercase;
            text-decoration: none;
        `}
    `,
);
