import { COLORS } from "@/constants/style";
import styled from "styled-components";

export const Container = styled.div`
    border-top: 0.5px solid ${COLORS.LIGHT_GREY};
    height: 50;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-left: 20rem;

    display: flex;
    align-items: center;
`;
