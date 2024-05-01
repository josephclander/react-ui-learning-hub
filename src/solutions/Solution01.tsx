import { useState } from "react";
import styles from "./Solution01.module.css";

const Solution01: React.FC = () => {
  const [counter, setCounter] = useState(0);

  function handleIncrement(): void {
    setCounter((prev) => prev + 1);
  }

  function handleDecrement(): void {
    setCounter((prev) => prev - 1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.counter}>{counter}</div>
      <div className={styles.buttons__container}>
        <button className={styles.plus} onClick={handleIncrement}>
          +
        </button>
        <button className={styles.minus} onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default Solution01;
