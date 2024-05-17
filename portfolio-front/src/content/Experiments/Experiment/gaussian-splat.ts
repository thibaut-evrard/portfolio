import { IExperimentContent } from "../experiments.types";

export const gaussianSplat: IExperimentContent = {
    title: "Gaussian Splat",
    thumbnailSrc: "/assets/placeholder.png",
    slug: "gaussian-splat",
    repoPath:
        "https://github.com/thibaut-evrard/portfolio/blob/main/portfolio-front/src/app/experiments/gaussian-splat/page.tsx",
    info: `
# Gaussian Splat
&nbsp;\n
Just a small experiment to understand how gaussian splatting works and what fun stuff can be done with it.
- The effect is created from the [@react-three/drei](https://github.com/pmndrs/drei?tab=readme-ov-file#splat) splat component
- I made a copy of the component and added some custom uniforms and GLSL code to it to create this small particle effect
    `,
};
