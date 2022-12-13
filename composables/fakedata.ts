export function useFakeData(nodeNumber: number, linkNumber: number): any {
  const nodes: any[] = [];
  const links: any[] = [];
  const categories: any[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
  ];

  for (let i = 0; i < nodeNumber; i++) {
    nodes.push({
      id: `node${i}`,
      name: 'nodeName' + i,
      symbolSize: Math.floor(Math.random() * 48) + 2,
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
      // value: Math.floor(Math.random() * 1000),
      category: categories[Math.floor(Math.random() * categories.length)],
    });
  }

  for (let i = 0; i < linkNumber; i++) {
    links.push({
      source: Math.floor(Math.random() * nodeNumber),
      target: Math.floor(Math.random() * nodeNumber),
    });
  }

  const cat = categories.map((i) => {
    return {
      name: i,
    };
  });

  console.log('nodes', nodes);
  console.log('links', links);
  console.log('categories', cat);

  return {
    nodes,
    links,
    categories: cat,
  };
}
