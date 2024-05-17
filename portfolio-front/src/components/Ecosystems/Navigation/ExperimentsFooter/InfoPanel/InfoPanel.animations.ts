import { DURATION } from "@/constants/animations/animations";
import { EVariants } from "@/constants/animations/animations.types";
import { MotionProps } from "framer-motion";

export const container: MotionProps = {
    initial: { scaleY: 0, opacity: 1 },
    variants: {
        [EVariants.Before]: {
            scaleY: 0,
            opacity: 1,
            transition: { duration: DURATION.MEDIUM, ease: "easeOut" },
        },
        [EVariants.Primary]: {
            scaleY: 1,
            opacity: 1,
            transition: { duration: DURATION.MEDIUM, ease: "easeOut" },
        },
        [EVariants.After]: {
            scaleY: 0,
            opacity: 0,
            transition: { duration: DURATION.MEDIUM, ease: "easeIn" },
        },
    },
};

export const contentContainer: MotionProps = {
    initial: { opacity: 0 },
    variants: {
        [EVariants.Before]: {
            opacity: 0,
            transition: { duration: DURATION.MEDIUM },
        },
        [EVariants.Primary]: {
            opacity: 1,
            transition: { delay: DURATION.MEDIUM, duration: DURATION.MEDIUM },
        },
        [EVariants.After]: {
            opacity: 0,
            transition: { duration: DURATION.MEDIUM },
        },
    },
};
