import { IProjectContent } from '../projects.types';

const INTRO_TEXT = `
# Currently workink on Ai tooling and processes
# 🔐🤐🤫🛠️

A lot of my current projects are focusing on Leveraging LLM's to create interactive experiences.
I cannot share any live case studies yet, but I have built my own tooling on the way, which I can share.

The tool I have created for myself helps me prototype complex multi-agent Ai workflows easily.
Here is a very basic example of what the tool looks like with an animal LinkedIn profile picture generator.
`;

const INFO = `
My focus for this tool is to  make it completely flexible.
I can setup the basic skeleton of the flow with input types and default prompts. Then, non technical users can come in and modify the prompts and inputs in the frontend directly.

In the case of this Animal LinkedIn Profile picture generator, the flow looks something like this:
`;

function assetPath(src: string) {
  return `/projects/ai-tool/${src}`;
}

export const aiTool: IProjectContent = {
  slug: 'ai-tool',
  title: 'Ai Tooling',
  year: '2025',
  content: [
    {
      type: 'text',
      text: INTRO_TEXT,
    },
    {
      type: 'video',
      src: assetPath('tool.webm'),
      autoplay: true,
      size: 'l',
    },
    {
      type: 'text',
      text: INFO,
    },
    {
      type: 'image',
      src: assetPath('schema.jpg'),
      alt: 'flow diagram for an AI workflow',
      size: 'l',
    },
  ],
  thumbnail: assetPath('thumbnail.webp'),
};
