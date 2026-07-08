import { ProjectName } from '@/content/Projects/projects.types';
import Project from '@/components/pages/Project/Project';
import { ProjectsContent } from '@/content/Projects/projects';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    project: ProjectName;
  };
}

const Page = async ({ params }: Props) => {
  const { project } = await params;
  const content = ProjectsContent[project];

  if (!content) notFound();

  return <Project project={content} />;
};

export default Page;
