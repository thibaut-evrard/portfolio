import {MotionValue, useAnimationFrame, useMotionValue} from 'framer-motion';

const SMOOTHING = 10;

export const useSmoothScroll = (targetScroll: MotionValue) => {
    const currentScroll = useMotionValue(targetScroll.get());

    useAnimationFrame(() => {
        const target = targetScroll.get();
        const current = currentScroll.get();
        const newCurrent = current + (target - current) / SMOOTHING;
        currentScroll.set(newCurrent);
    });

    return currentScroll;
};
