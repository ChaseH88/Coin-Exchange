export const grid = (columns: number) => `
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(${columns}, ${columns}fr);
  grid-gap: 0;
`;
