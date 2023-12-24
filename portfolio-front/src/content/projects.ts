import {IProjectContent} from '@/components/Projects/Projects.types';
import {dmsIconWall} from './dms-icon-wall';
import {finecastWebgl} from './finecast-webgl';
import {oysterDisaster} from './oyster-disaster';
import {blurryBananas} from './blurry-bananas';
import {mediapipeExperiments} from './mediapipe-experiments';

export const ProjectsContent: any = {
    ['dms-icon-wall']: dmsIconWall,
    ['finecast-webgl']: finecastWebgl,
    ['oyster-disaster']: oysterDisaster,
    ['blurry-bananas']: blurryBananas,
    ['mediapipe-experiments']: mediapipeExperiments,
};

export const ProjectList: IProjectContent[] = [
    ProjectsContent['dms-icon-wall'],
    ProjectsContent['oyster-disaster'],
    ProjectsContent['finecast-webgl'],
    ProjectsContent['blurry-bananas'],
    ProjectsContent['mediapipe-experiments'],
];
