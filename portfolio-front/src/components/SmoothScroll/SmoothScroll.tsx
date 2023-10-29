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

const SmoothScroll: FC<PropsWithChildren> = ({children}) => {
    const [height, setHeight] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll();
    const smoothProgress = useMotionValue(0);
    const translateY = useTransform(smoothProgress, [0, 1], [0, -height]);

    useAnimationFrame(() => {
        smoothProgress.set(
            lerp(smoothProgress.get(), scrollYProgress.get(), 0.1)
        );
    });

    const handleOnResize = () => {
        setHeight(ref.current?.offsetHeight || 0);
    };

    useEffect(() => {
        handleOnResize();
        window.addEventListener('resize', handleOnResize);
        return () => {
            window.removeEventListener('resize', handleOnResize);
        };
    }, []);

    return (
        <>
            <div style={{height: height}} />
            <FakeScrollWrapper>
                <ContentContainer ref={ref} style={{translateY}}>
                    {children}
                </ContentContainer>
            </FakeScrollWrapper>
        </>
    );
};

export default SmoothScroll;
