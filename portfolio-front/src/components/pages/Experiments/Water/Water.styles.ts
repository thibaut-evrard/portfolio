import { styled } from "styled-components";

export const CanvasContainer = styled.div`
    // position
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: -1;
`;

export const ScrollContainer = styled.div`
    // position
    width: 100%;
    height: 200%;

    // display
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 20px;

    // cosmetics
    color: white;
`;

export const ScrollWrapper = styled.div`
    // position
    width: 100%;
    height: 50%;
    max-width: 500px;

    opacity: 0.6;
`;
