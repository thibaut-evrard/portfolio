import { useInView } from '@/hooks/observer/useInView';
import {
  DetailedHTMLProps,
  FC,
  useEffect,
  useRef,
  VideoHTMLAttributes,
} from 'react';

type Props = DetailedHTMLProps<
  VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
> & { customAutoPlay: boolean };

const Video: FC<Props> = (props) => {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref);
  const videoProps = Object.fromEntries(
    Object.entries(props).filter(([key]) => key !== 'customAutoPlay')
  );

  useEffect(() => {
    if (!ref.current || !props.customAutoPlay) return;

    console.log(ref.current, props.customAutoPlay, inView);

    if (inView) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [inView, props.customAutoPlay]);

  return <video ref={ref} {...videoProps}></video>;
};

export default Video;
