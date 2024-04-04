import { motion } from "framer-motion";
import styled from "styled-components";

export const ScrollContainer = styled(motion.div)({
    width: "100%",
    height: "300vh",
    display: "flex",
    position: "relative",
    color: "white",
});

export const CanvasContainer = styled(motion.div)({
    position: "sticky",
    top: 0,
    width: "100%",
    height: "100vh",
});
