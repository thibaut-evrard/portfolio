import {useFrame, useThree} from '@react-three/fiber';
import {MutableRefObject, useEffect, useRef} from 'react';
import {Group, Texture, Vector2, WebGLRenderTarget} from 'three';

const emptyRt = new WebGLRenderTarget(0, 0);

function useCustomRenderer(
    backgroundRef: MutableRefObject<Group>,
    foregroundRef: MutableRefObject<Group>
) {
    const sceneBackgroundTextureRef = useRef({} as Texture);

    const transmissionRt = useRef(emptyRt);
    const {gl, scene} = useThree();

    useEffect(() => {
        const v = new Vector2();
        gl.getDrawingBufferSize(v);
        transmissionRt.current = new WebGLRenderTarget(v.x, v.y);
        sceneBackgroundTextureRef.current = scene.background as Texture;
    }, []);

    useFrame(({gl, camera, scene}) => {
        if (!transmissionRt.current) return;

        // render background to rt
        scene.background = sceneBackgroundTextureRef.current;
        foregroundRef.current.visible = false;
        backgroundRef.current.visible = true;
        gl.setRenderTarget(transmissionRt.current);
        gl.render(scene, camera);

        // render foreground with background rt as bg tex
        scene.background = transmissionRt.current.texture;
        foregroundRef.current.visible = true;
        backgroundRef.current.visible = false;
        gl.setRenderTarget(null);
        gl.render(scene, camera);
    }, 1);

    return {
        transmissionRt,
        sceneBackgroundTextureRef,
    };
}

export {useCustomRenderer};
