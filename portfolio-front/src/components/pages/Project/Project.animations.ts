import { DISTANCE, DURATION } from "@/constants/animations/animations";
import { EVariants } from "@/constants/animations/animations.types";
import { MotionProps } from "framer-motion";

export const container: MotionProps = {
    initial: EVariants.Before,
    variants: {
        [EVariants.Before]: {
            opacity: 0,
        },
        [EVariants.Primary]: {
            opacity: 1,
            transition: {
                duration: 0,
                staggerChildren: DURATION.SHORT,
            },
        },
    },
};

export const child: MotionProps = {
    initial: {
        opacity: 0,
        translateY: DISTANCE.MEDIUM,
    },
    variants: {
        [EVariants.Before]: {
            opacity: 0,
            translateY: DISTANCE.MEDIUM,
        },
        [EVariants.Primary]: {
            opacity: 1,
            translateY: "0px",
            transition: {
                duration: 1,
            },
        },
    },
};
