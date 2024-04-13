import { MotionProps } from "framer-motion";

export const container: MotionProps = {
    initial: {
        scale: 1,
        opacity: 1,
    },
    variants: {
        visible: {
            transition: {
                duration: 1,
                when: "afterChildren",
                staggerChildren: 0.05,
            },
        },
        hidden: {
            transition: {
                duration: 1,
                when: "afterChildren",
                staggerChildren: 0.1,
                staggerDirection: -1,
            },
        },
    },
};

export const letter: MotionProps = {
    initial: {
        opacity: 0,
        scale: 0.8,
        translateY: "0.3em",
    },
    variants: {
        visible: {
            opacity: 1,
            scale: 1,
            translateY: ["0.3em", "0em"],
            transition: {
                duration: 0.2,
            },
        },
        hidden: {
            opacity: 0,
            scale: 0.8,
            translateY: "0.1em",
            transition: {
                duration: 0.2,
            },
        },
    },
};
