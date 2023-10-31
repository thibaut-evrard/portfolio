import {clamp, useAnimationFrame, useMotionValue} from 'framer-motion';
import {MutableRefObject, useEffect} from 'react';
import {lerp} from 'three/src/math/MathUtils.js';

const OVERSHOOT = 100;
const SPEED = 1.5;

export const useCarouselControls = (
    containerRef: MutableRefObject<HTMLDivElement | null>,
    slidesCount: number,
    setActiveMedia: (index: number) => void
) => {
    const progress = useMotionValue(0);
    const targetProgress = useMotionValue(0);

    const goTo = (index: number) => {
        const targetIndex = -index;
        targetProgress.set(targetIndex * containerRef.current!.clientWidth);
    };

    const getParams = () => {
        if (!containerRef.current) return {max: 0, step: 0};
        const max = containerRef.current.clientWidth * (slidesCount - 1);
        const step = containerRef.current.clientWidth;
        return {max, step};
    };

    const onPan = (event: any, info: any) => {
        if (!containerRef.current) return;

        const offset = info.delta.x * SPEED;
        const {max} = getParams();
        const newValue = clamp(
            -max - OVERSHOOT,
            OVERSHOOT,
            targetProgress.get() + offset
        );

        targetProgress.set(newValue);
    };
    const onPanEnd = () => {
        if (!containerRef.current) return;

        const {max, step} = getParams();

        const targetIndex = Math.round(targetProgress.get() / step);
        setActiveMedia(-targetIndex);

        const closestIndex = clamp(-max, 0, targetIndex * step);
        targetProgress.set(closestIndex);
    };

    const handleOnResize = () => {
        if (!containerRef.current) return;

        const {max, step} = getParams();

        const targetIndex = Math.round(targetProgress.get() / step);
        setActiveMedia(-targetIndex);

        const closestIndex = clamp(-max, 0, targetIndex * step);
        progress.set(closestIndex);
        targetProgress.set(closestIndex);
    };

    useAnimationFrame(() => {
        progress.set(lerp(progress.get(), targetProgress.get(), 0.1));
    });

    useEffect(() => {
        window.addEventListener('resize', handleOnResize);
        return () => {
            window.removeEventListener('resize', handleOnResize);
        };
    }, []);

    return {goTo, progress, onPan, onPanEnd};
};
