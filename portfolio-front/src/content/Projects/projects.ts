import { IProjectContent } from "./projects.types";
import { dmsIconWall } from "./Project/dms-icon-wall";
import { finecastWebgl } from "./Project/finecast-webgl";
import { oysterDisaster } from "./Project/oyster-disaster";
import { blurryBananas } from "./Project/blurry-bananas";
import { mediapipeExperiments } from "./Project/mediapipe-experiments";

export const ProjectsContent: any = {
    ["dms-icon-wall"]: dmsIconWall,
    ["finecast-webgl"]: finecastWebgl,
    ["oyster-disaster"]: oysterDisaster,
    ["blurry-bananas"]: blurryBananas,
    ["mediapipe-experiments"]: mediapipeExperiments,
};

export const ProjectList: IProjectContent[] = [
    ProjectsContent["dms-icon-wall"],
    ProjectsContent["oyster-disaster"],
    ProjectsContent["finecast-webgl"],
    ProjectsContent["blurry-bananas"],
    ProjectsContent["mediapipe-experiments"],
];
