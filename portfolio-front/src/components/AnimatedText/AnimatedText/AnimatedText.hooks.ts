export const useParsedNodes = () => {
  const getHtmlNodes = (htmlString: string): HTMLElement[] => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return Array.from(doc.body.childNodes) as HTMLElement[];
  };

  const getRichTextSequence = (nodes: HTMLElement[]) => {
    const result = [];

    for (const node of nodes) {
      if (node.nodeName === 'BR') {
        result.push({
          type: 'br',
          content: '',
        });
      }
      if (node.nodeName === '#text') {
        result.push({
          type: 'text',
          content: node.nodeValue || '',
        });
      }
      if (['EM', 'B', 'STRONG'].includes(node.nodeName)) {
        result.push({
          type: node.localName,
          content: node.textContent || '',
        });
      }
    }
    return result;
  };

  const getDataSequence = (content: string) => {
    const nodes = getHtmlNodes(content);
    const richTextSequence = getRichTextSequence(nodes);
    return richTextSequence;
  };

  return { getDataSequence };
};
