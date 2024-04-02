import { useFrame } from "@react-three/fiber";
import { useAnimationFrame } from "framer-motion";
import { useEffect, useRef } from "react";
import { Vector2 } from "three";
import { lerp } from "three/src/math/MathUtils.js";

export const useMouse = () => {
    const mousePosRef = useRef(new Vector2());
    const clickedRef = useRef(false);
    const positionRef = useRef(new Vector2());
    const directionRef = useRef(new Vector2());
    const smoothDirectionRef = useRef(new Vector2());

    const handleMouseDown = () => {
        clickedRef.current = true;
    };

    const handleMouseUp = () => {
        clickedRef.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
        mousePosRef.current = new Vector2(
            e.clientX / window.innerWidth,
            e.clientY / window.innerHeight,
        );
    };

    useAnimationFrame(() => {
        directionRef.current = mousePosRef.current
            .clone()
            .sub(positionRef.current);
        positionRef.current = mousePosRef.current.clone();

        smoothDirectionRef.current = new Vector2(
            lerp(smoothDirectionRef.current.x, directionRef.current.x, 0.1),
            lerp(smoothDirectionRef.current.y, directionRef.current.y, 0.1),
        );
    });

    useEffect(() => {
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return {
        clickedRef,
        positionRef,
        smoothDirectionRef,
    };
};
