import { IProjectContent, ProjectName } from './projects.types';
import { dmsIconWall } from './Project/dms-icon-wall';
import { finecastWebgl } from './Project/finecast-webgl';
import { oysterDisaster } from './Project/oyster-disaster';
import { blurryBananas } from './Project/blurry-bananas';
import { mediapipeExperiments } from './Project/mediapipe-experiments';

export const PROJECT_NAMES = [
  'dms-icon-wall',
  'finecast-webgl',
  'oyster-disaster',
  'blurry-bananas',
  'mediapipe-experiments',
] as const;

export const ProjectsContent: Record<ProjectName, IProjectContent> = {
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
