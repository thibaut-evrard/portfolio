import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.span)`
    font-size: inherit;
    span {
        font-size: inherit;
        position: relative;
        display: inline-block;
    }
`;

export const Word = styled.span`
    display: inline-block;
`;

export const Words = styled.span`
    display: inline-block;
`;

export const Letter = styled(motion.span)`
    display: inherit;
`;

export const Space = styled(motion.span)`
    display: inherit;
`;
