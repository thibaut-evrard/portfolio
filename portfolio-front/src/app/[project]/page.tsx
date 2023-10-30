import {IProjectContent} from '@/components/Projects/Projects.types';
import Project from '@/components/pages/Project/Project';
import {ProjectsContent} from '@/content/projects';
import {notFound} from 'next/navigation';

const ProjectPage = ({params}: any) => {
    const slug = params.project as string;
    const content = ProjectsContent[slug] as IProjectContent;

    if (!content) notFound();

    return <Project {...content} />;
};

export default ProjectPage;
