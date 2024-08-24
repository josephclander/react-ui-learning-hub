export const solutionCss = `.list1 {
  border: 2px solid black;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  width: 550px;
  overflow-x: scroll;
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
}

.list3 {
  border: 2px solid black;
  border-radius: 5px;
  /* want padding same as gap */
  padding: 1rem;
  display: flex;
  gap: 1rem;
  width: 204px;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.list3 li {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 200px; /* your item width */
  margin-right: 16px; /* your gap */
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
