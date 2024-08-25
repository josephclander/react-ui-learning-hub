export const solutionCss = `.list {
  display: flex;
  gap: 5px;
}

.listItem {
  padding: 5px;
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.listItem:hover,
.listItem:active {
  background-color: rgb(212, 179, 135);
  color: black;
}

.active {
  background-color: rgb(71, 169, 114);
  color: white;
}

.content {
  margin-top: 20px;
}
`;
