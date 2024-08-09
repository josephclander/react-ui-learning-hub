export const solutionCss = `.listItem {
  position: relative;
  padding: 5px;
  border: 1px solid black;
  width: 50px;
  text-align: center;
  margin: 10px;
}

.tooltip {
  position: absolute;
  right: -130%;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  background-color: grey;
  padding: 5px;
  border-radius: 5px;
  visibility: hidden;
}

.listItem:hover .tooltip {
  visibility: visible;
}
`;
