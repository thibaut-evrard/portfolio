import {FC} from 'react';
import {ICarousel} from './Carousel.types';
import {Container, Image} from './Carousel.styles';
import {getMediaTypes} from '@/utils/getMediaTypes';

const Carousel: FC<ICarousel> = ({media}) => {
    const {videos, images} = getMediaTypes(media);

    return (
        <Container>
            {videos.map((video, index) => (
                <video key={index} src={video} controls />
            ))}
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    width={'1400'}
                    height='800'
                    alt='img'
                />
            ))}
        </Container>
    );
};

export default Carousel;
