const VIDEO_FORMATS = ['mp4', 'webm', 'ogg'];
const IMAGE_FORMATS = ['png', 'jpg', 'jpeg', 'gif', 'svg'];

export const getMediaTypes = (media: string[]) => {
    const videos = [];
    const images = [];

    for (const url of media) {
        const extension = url.split('.').pop();
        if (!extension) continue;

        if (VIDEO_FORMATS.includes(extension)) {
            videos.push(url);
        } else if (IMAGE_FORMATS.includes(extension)) {
            images.push(url);
        }
    }

    return {videos, images};
};
