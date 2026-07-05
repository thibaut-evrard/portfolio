import type { IProjectContent, ProjectName } from './projects.types';
import { dmsIconWall } from './Project/dms-icon-wall';
import { oysterDisaster } from './Project/oyster-disaster';
import { blurryBananas } from './Project/blurry-bananas';
import { mediapipeExperiments } from './Project/mediapipe-experiments';
import { kineticSculpture } from './Project/kinetic-sculpture';
import { clothInstallation } from './Project/cloth-installation';
import { aiQuests } from './Project/ai-quests';

export const PROJECT_NAMES = [
  'dms-icon-wall',
  'oyster-disaster',
  'blurry-bananas',
  'mediapipe-experiments',
  'kinetic-sculpture',
  'cloth-installation',
  'ai-quests',
] as const;

export const ProjectsContent: Record<ProjectName, IProjectContent> = {
  ['dms-icon-wall']: dmsIconWall,
  ['oyster-disaster']: oysterDisaster,
  ['blurry-bananas']: blurryBananas,
  ['mediapipe-experiments']: mediapipeExperiments,
  ['kinetic-sculpture']: kineticSculpture,
  ['cloth-installation']: clothInstallation,
  ['ai-quests']: aiQuests,
};

export const ProjectList: IProjectContent[] = [
  ProjectsContent['dms-icon-wall'],
  ProjectsContent['oyster-disaster'],
  ProjectsContent['blurry-bananas'],
  ProjectsContent['mediapipe-experiments'],
  ProjectsContent['kinetic-sculpture'],
  ProjectsContent['cloth-installation'],
  ProjectsContent['ai-quests'],
];
