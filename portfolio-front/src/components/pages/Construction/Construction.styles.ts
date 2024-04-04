import { BLACK, LIGHT_GREY, ORANGE, WHITE } from "@/constants/style";
import { motion } from "framer-motion";
import styled from "styled-components";
import Markdown from "react-markdown";

export const Container = styled(motion.div)`
    position: relative;

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${BLACK};
    color: ${WHITE};
`;

export const SceneWrapper = styled.div`
    position: absolute;
    width: 200px;
    height: 160px;
`;

export const ContentOverlay = styled(motion.div)`
    position: absolute;
    top: calc(50% - 130px);
    z-index: 1;
    text-align: center;
    width: 90%;
    h4,
    a {
        color: ORANGE;
    }
    * {
        margin: 0.5em 0;
    }
`;

export const Paragraph = styled(Markdown)`
    position: absolute;
    bottom: 50px;
    color: ${LIGHT_GREY};
`;
