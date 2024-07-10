export const solutionCss = `.controls {
    display: flex;
    gap: 10px;
    margin: 10px 0;
  }
  
  .button {
    padding: 5px 30px;
    border: 1px solid grey;
    border-radius: 5px;
    cursor: pointer;
    transition: filter 0.3s;
  }
  
  .button:hover,
  .button:active {
    filter: brightness(0.8);
  }
  
  .start {
    background-color: hsl(120, 41%, 68%);
  }
  
  .stop {
    background-color: hsl(12, 41%, 68%);
  }
  
  .reset {
    background-color: hsl(60, 56%, 55%);
  }
  `;
