import { IProjectContent } from "@/content/Projects/projects.types";
import Project from "@/components/pages/Project/Project";
import { ProjectsContent } from "@/content/Projects/projects";
import { notFound } from "next/navigation";

const Page = ({ params }: any) => {
    const slug = params.project as string;
    const content = ProjectsContent[slug] as IProjectContent;

    if (!content) notFound();

    return <Project project={content} />;
};

export default Page;
