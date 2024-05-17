import { IExperimentContent } from "../experiments.types";

export const bubbles: IExperimentContent = {
    title: "Bubbles",
    thumbnailSrc: "/assets/placeholder.png",
    slug: "bubbles",
    repoPath:
        "https://github.com/thibaut-evrard/portfolio/blob/main/portfolio-front/src/app/experiments/bubbles/page.tsx",
    info: `
# Bubbles
&nbsp;\n
I had fun creating this soap bubble effect experiment.
- The bubbles are created using a customised version of the MeshPhysical material
- The Scene uses multiple render passes to hanlde the blur between bubbles
    `,
};
