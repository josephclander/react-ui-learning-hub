export const solutionCode = `import { useRef, useState } from "react";
import styles from "./Solution.module.css";
import { v4 as uuid } from "uuid";

type todoProps = {
  id: string;
  todo: string;
};

type todosProps = todoProps[];

const Solution = () => {
  const inputData = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<todosProps | []>([
    { id: "1", todo: "Enter a new task in the todo list" },
    { id: "2", todo: "Click a task to remove it" },
    { id: "3", todo: "Try adding a blank entry" },
  ]);
  const [error, setError] = useState(false);

  function handleSubmit(): void {
    const text: string | undefined = inputData?.current?.value.trim();
    if (!text) {
      setError(true);
      return;
    }
    setError(false);
    const task: todoProps = {
      id: uuid(),
      todo: text,
    };

    setTodos((prev) => [...prev, task]);

    if (inputData.current) {
      inputData.current.value = "";
    }
  }

  function deleteHandler(id: string): void {
    const newTodos: todosProps = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className={styles.container}>
      <p>Click an item to remove it</p>
      <ul className={styles.list}>
        {todos &&
          todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className={styles.listItem}
                onClick={() => deleteHandler(todo.id)}
              >
                {todo.todo}
              </li>
            );
          })}
      </ul>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          name="input"
          id="input"
          ref={inputData}
        />
        <button onClick={handleSubmit} className={styles.button}>
          Add
        </button>
      </div>
      {error && <p className={styles.error}>Enter a value</p>}
    </div>
  );
};

export default Solution;
`;
