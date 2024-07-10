export const solutionCss = `.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .inputContainer {
    display: flex;
    gap: 10px;
  }
  
  .input {
    padding: 5px;
    width: 400px;
    border: 1px solid rgb(189, 189, 189);
  }
  
  .button {
    padding: 10px 25px;
    background-color: var(--white);
    border: 1px solid var(--code-background);
    cursor: pointer;
    transition: filter 0.3s;
  }
  
  .button:hover {
    filter: brightness(0.8);
  }
  
  .input,
  .button {
    border-radius: 5px;
  }
  
  .title {
    margin: 10px 0;
  }
  
  .list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 10px 0 20px;
  }
  
  .listItem {
    border: 1px dotted grey;
    width: 400px;
    overflow-wrap: break-word;
    padding: 10px;
    transition: background-color 0.3s;
  }
  
  .listItem:hover,
  .listItem:active {
    background-color: var(--colour-primary);
    cursor: pointer;
  }
  
  .error {
    color: rgb(218, 56, 56);
  }
  `;
