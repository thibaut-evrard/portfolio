'use client';
import {PropsWithChildren, FC, useEffect, useRef, useState} from 'react';
import {ContentContainer, FakeScrollWrapper} from './SmoothScroll.styles';
import {
    useScroll,
    useTransform,
    useMotionValue,
    useAnimationFrame,
} from 'framer-motion';
import {lerp} from 'three/src/math/MathUtils.js';
import {SmoothScrollContext} from './SmoothScroll.context';

const SmoothScroll: FC<PropsWithChildren> = ({children}) => {
    const [height, setHeight] = useState<number>(window.innerHeight * 2);
    const [screensCount, setScreensCount] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll();
    const smoothProgress = useMotionValue(0);
    const screensProgress = useTransform(
        smoothProgress,
        [0, 1],
        [0, -screensCount]
    );
    const translateY = useTransform(smoothProgress, [0, 1], [0, -height]);

    useAnimationFrame(() => {
        smoothProgress.set(
            lerp(smoothProgress.get(), scrollYProgress.get(), 0.1)
        );
    });

    const handleOnResize = () => {
        if (!ref.current) return;
        const height = ref.current.offsetHeight - window.innerHeight;
        setHeight(ref.current.offsetHeight - window.innerHeight);
        setScreensCount(height / window.innerHeight);
    };

    useEffect(() => {
        handleOnResize();
        window.addEventListener('resize', handleOnResize);
        return () => {
            window.removeEventListener('resize', handleOnResize);
        };
    }, []);

    return (
        <SmoothScrollContext.Provider
            value={{progress: translateY, screensProgress: screensProgress}}
        >
            <div style={{height: height}} />
            <FakeScrollWrapper>
                <ContentContainer ref={ref} style={{translateY}}>
                    {children}
                </ContentContainer>
            </FakeScrollWrapper>
        </SmoothScrollContext.Provider>
    );
};

export default SmoothScroll;
