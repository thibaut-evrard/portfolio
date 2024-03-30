import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { lerp } from "three/src/math/MathUtils.js";

export const useScrollParams = () => {
    const previousScrollValue = useRef(0);
    const previousScrollScalar = useRef(0);
    const scrollAccelerationDamped = useRef(0);
    const scrollScalarDamped = useRef(0);
    const scrollPulse = useRef(0);

    useFrame(() => {
        const scrollScalar = window.scrollY - previousScrollValue.current;
        const scrollAcceleration =
            Math.abs(scrollScalar) - Math.abs(previousScrollScalar.current);

        scrollAccelerationDamped.current = lerp(
            scrollAccelerationDamped.current,
            scrollAcceleration,
            1,
        );
        scrollScalarDamped.current = lerp(
            scrollScalarDamped.current,
            scrollScalar,
            1,
        );

        scrollPulse.current = scrollAccelerationDamped.current;

        // update refs
        previousScrollValue.current = window.scrollY;
        previousScrollScalar.current = scrollScalar;
    });

    return {
        scrollProgress: previousScrollValue,
        scrollAccelerationDamped,
        scrollScalarDamped,
    };
};
