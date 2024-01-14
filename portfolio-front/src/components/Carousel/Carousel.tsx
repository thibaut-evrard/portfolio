import { FC, useRef, useState } from 'react';
import { ICarousel } from './Carousel.types';
import {
  Container,
  Image,
  MediaContainer,
  MediaItemContainer,
  MediaWrapper
} from './Carousel.styles';
import { getMediaTypes } from '@/utils/getMediaTypes';
import Menu from './Menu/Menu';
import { useCarouselControls } from '@/hooks/carousel/useCarouselControls';
import Video from './Video/Video';

const Carousel: FC<ICarousel> = ({ media }) => {
  const { videos, images } = getMediaTypes(media);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const [activeMedia, setActiveMedia] = useState(0);

  const { onPan, onPanEnd, goTo, progress } = useCarouselControls(
    mediaContainerRef,
    media.length,
    setActiveMedia
  );

  const handleOnSelect = (index: number) => {
    setActiveMedia(index);
    goTo(index);
  };

  return (
    <Container>
      <MediaContainer onPan={onPan} onPanEnd={onPanEnd} ref={mediaContainerRef}>
        <MediaWrapper style={{ translateX: progress }}>
          {videos.map((video, index) => (
            <MediaItemContainer>
              <Video
                key={index}
                media={video}
                onPan={onPan}
                onPanEnd={onPanEnd}
                active={index === activeMedia}
              />
            </MediaItemContainer>
          ))}
          {images.map((image, index) => (
            <MediaItemContainer>
              <Image
                key={index}
                src={image.src}
                width={'1400'}
                height='800'
                alt='img'
                onPan={onPan}
                onPanEnd={onPanEnd}
                draggable={false}
              />
            </MediaItemContainer>
          ))}
        </MediaWrapper>
      </MediaContainer>
      {media.length > 1 && (
        <Menu
          mediaCount={media.length}
          activeIndex={activeMedia}
          onSelect={handleOnSelect}
        />
      )}
    </Container>
  );
};

export default Carousel;
