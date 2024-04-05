import { COLORS } from "@/constants/style";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)({
    opacity: 1,
    width: "100%",
    position: "absolute",
    textAlign: "center",
    p: {
        display: "inline-block",
        lineHeight: "100%",
        color: COLORS.LIGHT_GREY,
    },
});
