import { Button } from "@/components/Atoms/Button/Button.styles";
import { H2, H3, P } from "@/components/Atoms/Typography/Typography.styles";
import { MOBILE_BREAKPOINT } from "@/constants/devices";
import { COLORS, BORDER_RADIUS } from "@/constants/style";
import Image from "next/image";
import styled from "styled-components";

export const BackgroundImage = styled(Image)`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;

    transform: scale(1);
    transition: transform 1s ease-in-out;
`;

export const HeadlineContainer = styled.div`
    // position
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    // display
    display: flex;
    padding: 20rem 30rem;

    ${H3} {
        text-shadow: 0px 0px 5px ${COLORS.BLACK};
    }
`;

export const ContentContainer = styled.div`
    // position
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    bottom: 0;

    // display
    display: flex;
    padding: 10rem;
    flex-direction: column;
    justify-content: flex-end;

    ${Button} {
        position: absolute;
        bottom: 10rem;
        right: 20rem;
    }

    background-color: rgba(0, 0, 0, 0.33);
`;

export const Container = styled.div`
    border: 1px solid red;

    // position
    position: relative;
    width: calc(50% - 20rem);
    aspect-ratio: 16/9;

    // cosmetics
    border-radius: 12rem;
    overflow: hidden;

    &:hover {
        ${BackgroundImage} {
            transform: scale(1.03);
        }
    }
`;
