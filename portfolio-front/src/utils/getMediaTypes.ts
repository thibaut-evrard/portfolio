import {ICarouselMedia} from '@/components/Projects/Projects.types';

const VIDEO_FORMATS = ['mp4', 'webm', 'ogg'];
const IMAGE_FORMATS = ['png', 'jpg', 'jpeg', 'gif', 'svg'];

export const getMediaTypes = (media: ICarouselMedia[]) => {
    const videos = [];
    const images = [];

    for (const item of media) {
        const extension = item.src.split('.').pop();
        if (!extension) continue;

        if (VIDEO_FORMATS.includes(extension)) {
            videos.push(item);
        } else if (IMAGE_FORMATS.includes(extension)) {
            images.push(item);
        }
    }

    return {videos, images};
};
