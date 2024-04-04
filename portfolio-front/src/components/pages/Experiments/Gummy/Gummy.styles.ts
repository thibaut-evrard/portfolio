import { WHITE } from "@/constants/style";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

export const Headline = styled.h1`
    font-family: gummy;
    color: WHITE;
    font-size: 300rem;
`;

export const ContentContainer = styled.div`
    position: absolute;
`;
