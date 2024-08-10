export const solutionCss = `.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 350px;
  border: 2px solid black;
}

.image {
  /* absolute is added by next for Image */
  scale: 1;
  transition: 0.5s;
}

.container:hover .image {
  scale: 2.5;
}
`;
