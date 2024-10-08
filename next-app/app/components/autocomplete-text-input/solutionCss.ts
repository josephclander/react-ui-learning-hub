export const solutionCss = `.input {
  margin-top: 10px;
  padding: 5px;
  position: relative;
  background: white;
  border: 2px solid black;
  z-index: 0;
  width: 100%;
  font-size: inherit;
  font-family: inherit;
  color: black;
}

.label {
  font-weight: bold;
}

/* Autocomplete styles */

.autocompleteWrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.autocompleteSuggestion {
  margin-top: 10px;
  border: 2px solid transparent;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  font-family: inherit;
  font-size: inherit;
  padding: 5px;
  width: 100%;
  z-index: 1;
}

.inputText {
  color: transparent;
  padding: 0;
}

.greyText {
  color: lightgrey;
}
`;
