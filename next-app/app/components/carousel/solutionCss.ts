export const solutionCss = `.list1 {
  border: 2px solid black;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  width: 550px;
  overflow-x: scroll;
  background-color: white;
}

.list2 {
  border: 2px solid black;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  width: 556px; 
  overflow-x: hidden;
  scroll-behavior: smooth;
  background-color: white;
}

.list3 {
  border: 2px solid black;
  border-radius: 5px;
  /* want padding same as gap */
  padding: 16px;
  gap: 16px;
  display: flex;
  width: 232px; /* 200px width plus 16px gap both sides */
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  background-color: white;
}

.list3 li {
  scroll-snap-align: center;
  flex-shrink: 0;
  width: 200px; /* your item width */
}

.buttonContainer {
  width: 550px;
  padding: 20px;
  display: flex;
  gap: 15px;
  justify-content: flex-start;
}

.buttonContainer button {
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.container {
  margin: 20px 0;
}

.mockImage {
  display: grid;
  place-content: center;
  font-size: 3rem;
  height: 300px;
  min-width: 200px;
  background-color: aquamarine;
  border: 1px solid black;
}
`;
