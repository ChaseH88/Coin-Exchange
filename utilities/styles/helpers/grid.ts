export const grid = (columns: number, max: boolean = false) => `
  display: grid;
  grid-template-rows: ${max ? 'max-content' : 'auto'};
  grid-template-columns: repeat(${columns}, ${columns}fr);
  grid-gap: 0;
`;
