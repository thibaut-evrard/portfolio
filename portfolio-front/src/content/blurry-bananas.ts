import {MobileLayoutStates} from './content.types';

export const blurryBananas = {
    slug: 'blurry-bananas',
    title: 'Blurry Bananas',
    year: '2023',
    description: `Blurry Bananas is a fun little experiement I collaborated on with one of my creative director colleagues during our down time at work. We imagined a lively salad of bouncy fruits that would jump around at you if you dare approaching.  
For me, this project was the opportunity to explore custom shaders in Unity HDRP, specifically the depth blur effect. I then collated these learnings with bits of code we had written for previous projects and gave it a fresh look and feel`,
    tools: `- Unity HDRP
- Azure Kinect
- Obi Softbody`,
    role: `- Development of the interactive experience`,
    media: [
        {
            src: '/projects/blurry-bananas/video.mp4',
            mobileLayout: MobileLayoutStates.COVER,
        },
        {
            src: '/projects/blurry-bananas/video3.mp4',
            mobileLayout: MobileLayoutStates.COVER,
        },
        {
            src: '/projects/blurry-bananas/video2.mp4',
            mobileLayout: MobileLayoutStates.COVER,
        },
    ],
    thumbnail: '/projects/blurry-bananas/thumbnail.jpg',
};
