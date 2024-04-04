import { MOBILE_BREAKPOINT } from "@/constants/devices";
import { BORDER_RADIUS } from "@/constants/style";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    margin-top: 80px;
    margin-bottom: 40px;

    ${MOBILE_BREAKPOINT} {
        margin-top: 40px;
        margin-bottom: 40px;
    }
`;

export const MediaContainer = styled(motion.div)`
    position: relative;
    display: block;

    width: 100%;
    height: 80vh;
    max-height: 80vh;

    overflow: hidden;
    border-radius: ${BORDER_RADIUS};
    background-color: black;

    touch-action: pan-y;
`;

export const MediaWrapper = styled(motion.div)`
    position: relative;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    height: 100%;
    width: 100%;
`;

export const MediaItemContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;

    width: 100%;
    min-width: 100%;
    img: {
        user-select: none;
    }
`;

export const Image = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: contain;
    user-select: none;
`;
