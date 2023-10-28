export const ContainerAnimation = {
    initial: {
        opacity: 0,
    },
    variants: {
        appear: {
            opacity: 1,
        },
    },
    animate: 'appear',
    transition: {
        duration: 1,
        delayChildren: 1,
        staggerChildren: 0.2,
    },
};

export const TextAnimation = {
    initial: {
        translateY: '-30px',
        opacity: 0,
    },
    variants: {
        appear: {
            translateY: '0px',
            opacity: 1,
        },
    },
    transition: {
        duration: 1.5,
        ease: 'backOut',
    },
};
