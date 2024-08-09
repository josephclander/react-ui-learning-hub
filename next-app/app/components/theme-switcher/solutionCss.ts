export const solutionCss = `.lightMode {
  --fontColor: black;
  --bgColor: white;
}

.darkMode {
  --fontColor: white;
  --bgColor: black;
}

.buttonTheme {
  color: var(--fontColor);
  padding: 10px;
  margin: 10px 0 20px;
  background-color: var(--bgColor);
  cursor: pointer;
  border: 2px solid;
  border-color: var(--fontColor);
  scale: 1;
  transition: scale 0.3s;
}

.buttonTheme:hover {
  scale: 1.1;
}

.buttonTheme:active {
  scale: 0.9;
}

.container {
  padding: 10px;
  transition: 0.3s;
  color: var(--fontColor);
  background-color: var(--bgColor);
}

.section {
  max-width: 400px;
  margin: 20px 0;
  padding: 20px;
  border: 1px solid;
  border-color: var(--fontColor);
}

.section p {
  margin: 0.5rem 0;
}

.section a,
.section a:visited,
.section a:active {
  color: inherit;
  text-decoration: underline;
}
`;
