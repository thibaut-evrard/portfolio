export const TextAnimation = {
    initial: {
        translateY: '0px',
    },
    animate: {
        translateY: ['0px', '-10px', '10px', '0px'],
    },
    transition: {
        duration: 0.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0.45,
    },
};
