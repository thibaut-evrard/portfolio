import {FC, useRef, useEffect} from 'react';
import {IVideo} from './Video.types';
import {VideoElement} from './Video.styles';

const Video: FC<IVideo> = ({onPan, onPanEnd, active, src}) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        if (active) ref.current.play();
        else ref.current.pause();
    }, [active]);

    return (
        <VideoElement
            src={src}
            muted
            autoPlay
            controls
            onPan={onPan}
            onPanEnd={onPanEnd}
            playsInline
            loop
            ref={ref}
        />
    );
};

export default Video;
