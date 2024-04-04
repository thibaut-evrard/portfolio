import { FC, useRef, useEffect } from 'react';
import { IVideo } from './Video.types';
import { VideoElement } from './Video.styles';

const Video: FC<IVideo> = ({ onPan, onPanEnd, active, media }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (active) ref.current.play();
    else ref.current.pause();
  }, [active]);

  return (
    <VideoElement
      src={media.src}
      muted
      autoPlay
      controls
      onPan={onPan}
      onPanEnd={onPanEnd}
      playsInline
      loop
      ref={ref}
      $mobileLayout={media.mobileLayout}
    />
  );
};

export default Video;
