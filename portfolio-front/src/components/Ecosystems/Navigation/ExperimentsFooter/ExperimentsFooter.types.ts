import { IExperimentContent } from "@/content/Experiments/experiments.types";

export interface IExperimentFooter {
    experimentContent: IExperimentContent;
}

export interface IOpenContainer {
    $open: boolean;
}
