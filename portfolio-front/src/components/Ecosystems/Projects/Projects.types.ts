import { IProjectContent } from "@/content/Projects/projects.types";
import { MobileLayoutStates } from "@/content/Projects/projects.types";

export interface IProject {
    project: IProjectContent;
}

export interface ICarouselMedia {
    src: string;
    mobileLayout: MobileLayoutStates;
}
