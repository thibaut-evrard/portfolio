import {IProjectContent} from '@/components/Projects/Projects.types';

export const ProjectsContent: any = {
    project_a: {
        slug: 'project_a',
        title: 'My project',
        year: '2022',
        description: `A little experiment made at work in-between projects.  
        The starting point of this was a deep dive into custom Unity HDRP shaders, ( this led to creating the depth blur effect you can see on the further away fruits ).  
        The fruits bounciness was achieved by playing around with Obi Softbody library. To make the fruits roam around and be attracted by the user, we repurposed and added Kinect support to a force field algorithm we created in previous projects.`,
        tools: `
            - Unity
            - Azure Kinect
            - Obi Softbody
        `,
        role: `
            - Creation and fine tuning of bouncy fruits
            - Creation of a custom HDRP depth-blur shader
            - Creation of custom force field algorithm
        `,
        media: [
            '/assets/cards/fruits.mp4',
            '/assets/cards/bananaz.png',
            '/assets/cards/bananaz.png',
        ],
        thumbnail: '/assets/cards/bananaz.png',
    },
};

export const ProjectList: IProjectContent[] = [
    ProjectsContent.project_a,
    ProjectsContent.project_a,
];
