import { MOBILE_BREAKPOINT } from "@/constants/devices";
import styled from "styled-components";

export const Container = styled.div`
    // position
    position: fixed;
    z-index: 9999999;
    pointer-events: none;
    top: 0;
    width: 100%;

    // display
    display: flex;
    padding: 24rem 40rem;
    justify-content: space-between;

    // devices
    ${MOBILE_BREAKPOINT} {
        padding: 24rem 40rem;
    }

    // nesting
    * {
        pointer-events: all;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    // cosmetics
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0) 100%
    );
`;
