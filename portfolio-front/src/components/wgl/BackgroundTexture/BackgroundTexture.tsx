import {useTexture} from '@react-three/drei';
import {useThree} from '@react-three/fiber';
import {useEffect} from 'react';

interface PropsInterface {
    path: string;
    onLoad?: () => void;
}

function BackgroundTexture({path, onLoad}: PropsInterface) {
    const texture = useTexture(path);
    const {scene} = useThree();

    useEffect(() => {
        scene.background = texture;
        onLoad && onLoad();
    }, [texture]);

    return null;
}

export default BackgroundTexture;
