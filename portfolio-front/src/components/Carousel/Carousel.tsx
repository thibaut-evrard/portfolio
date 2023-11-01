import {FC, useRef, useState} from 'react';
import {ICarousel} from './Carousel.types';
import {
    Container,
    Image,
    MediaContainer,
    MediaItemContainer,
    MediaWrapper,
    Video,
} from './Carousel.styles';
import {getMediaTypes} from '@/utils/getMediaTypes';
import Menu from './Menu/Menu';
import {useCarouselControls} from '@/hooks/carousel/useCarouselControls';

const Carousel: FC<ICarousel> = ({media}) => {
    const {videos, images} = getMediaTypes(media);
    const mediaContainerRef = useRef<HTMLDivElement>(null);
    const [activeMedia, setActiveMedia] = useState(0);

    const {onPan, onPanEnd, goTo, progress} = useCarouselControls(
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
            <MediaContainer
                onPan={onPan}
                onPanEnd={onPanEnd}
                ref={mediaContainerRef}
            >
                <MediaWrapper style={{translateX: progress}}>
                    {videos.map((video, index) => (
                        <MediaItemContainer>
                            <Video
                                key={index}
                                src={video}
                                muted
                                autoPlay
                                controls
                                onPan={onPan}
                                onPanEnd={onPanEnd}
                                playsInline
                                loop
                            />
                        </MediaItemContainer>
                    ))}
                    {images.map((image, index) => (
                        <MediaItemContainer>
                            <Image
                                key={index}
                                src={image}
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
