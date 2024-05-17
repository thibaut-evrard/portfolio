import { IExperimentContent } from "../experiments.types";

export const water: IExperimentContent = {
    title: "Water",
    thumbnailSrc: "/assets/placeholder.png",
    slug: "water",
    repoPath:
        "https://github.com/thibaut-evrard/portfolio/blob/main/portfolio-front/src/app/experiments/water/page.tsx",
    info: `
# Water
&nbsp;\n
I ceated this water effect to learn more about compute shaders.
- The key to this effect was finding the mathematical model that rules the simulation. this [video](https://www.youtube.com/watch?v=hswBi5wcqAA&ab_channel=TenMinutePhysics) was key.
- I have tried to add some scroll effects to the water, maybe one day as I thought it could become the background of a website someday
    `,
};
