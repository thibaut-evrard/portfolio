import {useEffect, useRef} from 'react';
import {Vector2} from 'three';
import {update} from 'three/examples/jsm/libs/tween.module.js';

export const useMousePosition = () => {
    const previousMousePos = useRef({x: 0, y: 0});
    const mousePos = useRef({x: 0, y: 0});
    const mouseVelocity = useRef(0);

    const update = (event: MouseEvent) => {
        previousMousePos.current = mousePos.current;

        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;
        mousePos.current = {x, y};
    };

    useEffect(() => {
        window.addEventListener('mousemove', update);
        return () => window.removeEventListener('mousemove', update);
    }, []);

    return mousePos;
};
