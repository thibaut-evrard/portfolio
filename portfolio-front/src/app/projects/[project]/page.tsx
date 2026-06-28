import { ProjectName } from '@/content/Projects/projects.types';
import Project from '@/components/pages/Project/Project';
import { ProjectsContent } from '@/content/Projects/projects';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    project: ProjectName;
  };
}

const Page = ({ params }: Props) => {
  const slug = params.project;
  const content = ProjectsContent[slug];

  if (!content) notFound();

  return <Project project={content} />;
};

export default Page;
