import { COLORS } from "@/constants/style";
import { motion } from "framer-motion";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const Container = styled(motion.div)`
    // position
    position: fixed;
    bottom: 70px;
    right: 20px;
    width: 400px;

    // display
    display: flex;
    padding: 20px;

    // tranform
    transform-origin: bottom center;

    // cosmetics
    border-radius: 20px;
    background-color: ${COLORS.GREY};
`;

export const ContentContainer = styled(motion.div)`
    // position
    position: relative;
    width: 100%;
    min-height: 100%;
`;

export const InfoMarkdown = styled(ReactMarkdown)`
    position: relative;
    padding-bottom: 20px;

    h1 {
        font-size: 24rem;
        font-weight: 500;
    }

    p,
    ul,
    li {
        font-size: 18rem;
        font-weight: 400;
    }

    ul {
        margin-top: 20px;
        padding-left: 10px;
    }

    li {
        margin-bottom: 10px;
    }

    a {
        color: ${COLORS.LIGHT_BLUE};
    }
`;
