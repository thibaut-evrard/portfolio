import {MobileLayoutStates} from './content.types';

export const oysterDisaster = {
    slug: 'oyster-disaster',
    title: 'Oyster Disaster',
    year: '2020',
    description: `Oyster Disaster is a creative duo Designer Songyee Kim and myself founded in 2020. We create experiments and experiences that explore the intersection of art and technology.  
In 2022 we collaborated with artist Lydia Chan the exhibition [Your Ship Has Landed](https://nowgallery.co.uk/exhibitions/your-ship-has-landed) at Now Gallery in London.  
Our contribution to the exhibition came in the form of a series of instagram AR filters bringing the monstruous creates of the exhibition to life. The project also intends to offer a different way to experience the exhibition remotely.`,
    tools: `- Spark AR
- Blender`,
    role: `- Collaborate on concept design
- Development of the AR filters
- Interaction design / animation of the assets`,
    media: [
        {
            src: '/projects/oyster-disaster/video.mp4',
            mobileLayout: MobileLayoutStates.COVER,
        },
        {
            src: '/projects/oyster-disaster/video1.mp4',
            mobileLayout: MobileLayoutStates.COVER,
        },
        {
            src: '/projects/oyster-disaster/video2.mp4',
            mobileLayout: MobileLayoutStates.COVER,
        },
        {
            src: '/projects/oyster-disaster/video3.mp4',
            mobileLayout: MobileLayoutStates.COVER,
        },
    ],
    thumbnail: '/projects/oyster-disaster/thumbnail.jpeg',
};
