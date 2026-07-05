import type { IProjectContent, ProjectName } from './projects.types';
import { dmsIconWall } from './Project/dms-icon-wall';
import { oysterDisaster } from './Project/oyster-disaster';
import { blurryBananas } from './Project/blurry-bananas';
import { mediapipeExperiments } from './Project/mediapipe-experiments';
import { kineticSculpture } from './Project/kinetic-sculpture';
import { clothInstallation } from './Project/cloth-installation';
import { aiQuests } from './Project/ai-quests';
import { rcade } from './Project/rcade';
import { footBoo } from './Project/foot-boo';
import { aiTool } from './Project/ai-tool';
import { takeMeTasty } from './Project/take-me-tasty';

export const PROJECT_NAMES = [
  'dms-icon-wall',
  'oyster-disaster',
  'blurry-bananas',
  'mediapipe-experiments',
  'kinetic-sculpture',
  'cloth-installation',
  'ai-quests',
  'rcade',
  'foot-boo',
  'ai-tool',
  'take-me-tasty',
] as const;

export const ProjectsContent: Record<ProjectName, IProjectContent> = {
  ['dms-icon-wall']: dmsIconWall,
  ['oyster-disaster']: oysterDisaster,
  ['blurry-bananas']: blurryBananas,
  ['mediapipe-experiments']: mediapipeExperiments,
  ['kinetic-sculpture']: kineticSculpture,
  ['cloth-installation']: clothInstallation,
  ['ai-quests']: aiQuests,
  ['rcade']: rcade,
  ['foot-boo']: footBoo,
  ['ai-tool']: aiTool,
  ['take-me-tasty']: takeMeTasty,
};

export const ProjectList: IProjectContent[] = [
  ProjectsContent['dms-icon-wall'],
  ProjectsContent['oyster-disaster'],
  ProjectsContent['blurry-bananas'],
  ProjectsContent['mediapipe-experiments'],
  ProjectsContent['kinetic-sculpture'],
  ProjectsContent['cloth-installation'],
  ProjectsContent['ai-quests'],
  ProjectsContent['rcade'],
  ProjectsContent['foot-boo'],
  ProjectsContent['ai-tool'],
  ProjectsContent['take-me-tasty'],
];
