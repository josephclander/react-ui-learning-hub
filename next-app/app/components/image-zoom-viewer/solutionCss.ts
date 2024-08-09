export const solutionCss = `.container {
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 400px;
  border: 2px solid black;
}

.image {
  position: absolute;
  scale: 1;
  transition: 0.5s;
}

.container:hover .image {
  scale: 2.5;
}
`;
