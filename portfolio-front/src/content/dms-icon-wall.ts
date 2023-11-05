import {MobileLayoutStates} from './content.types';

export const dmsIconWall = {
    slug: 'dms-icon-wall',
    title: "DM's Icon Wall",
    year: '2021',
    description: `This in-store interactive experience allows DM's customers to explore the brand's products and see how they are styled locally and globally  
My main challenge on this project was to optimise the 3D assets of the shoes to get them to run smoothly on this 4K WebGL app.`,
    tools: `- Blender
- React
- RFID Reader / Tag`,
    role: `- Collaborate with strategy and design teams to create concept
- 3D Asset Optimisation for WebGL
- Front-end development
- WebGL development
- CMS integration`,
    media: [
        {
            src: '/projects/dms-icon-wall/showcase.mp4',
            mobileLayout: MobileLayoutStates.COVER,
        },
    ],
    thumbnail: '/projects/dms-icon-wall/thumbnail.jpg',
};
