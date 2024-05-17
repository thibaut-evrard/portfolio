import { IExperimentContent } from "../experiments.types";

export const gummies: IExperimentContent = {
    title: "Gummies",
    thumbnailSrc: "/assets/placeholder.png",
    slug: "gummies",
    repoPath:
        "https://github.com/thibaut-evrard/portfolio/blob/main/portfolio-front/src/app/experiments/gummies/page.tsx",
    info: `
# Gummies
&nbsp;\n
Gummies are tasty, and they reflect light in quite a unique way.
I have attempted multiple times to create a material that mimics the way light scatters through gummies, this is my best try so far.
- This material is an extension of the MeshPhysicalMaterial
- It is heavily inspired by Subsurface Scattering (SSS) techniques
- I have not tried to make this material physically accurate, but rather to create a visually appealing effect
    `,
};
