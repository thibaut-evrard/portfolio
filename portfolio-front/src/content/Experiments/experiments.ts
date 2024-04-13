import { bubbles } from "./Experiment/bubbles";
import { gaussianSplat } from "./Experiment/gaussian-splat";
import { gummies } from "./Experiment/gummies";
import { water } from "./Experiment/water";
import { IExperimentContent } from "./experiments.types";

export const ExperimentsContent = {
    ["bubbles"]: bubbles,
    ["gummies"]: gummies,
    ["gaussian-splat"]: gaussianSplat,
    ["water"]: water,
};

export const ExperiementsList: IExperimentContent[] = [
    ExperimentsContent["bubbles"],
    ExperimentsContent["gummies"],
    ExperimentsContent["gaussian-splat"],
    ExperimentsContent["water"],
];
