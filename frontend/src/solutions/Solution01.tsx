import { useState } from "react";
// import styles from "./Solution01.module.css";

const Solution01 = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleMinus = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <div>
        <button style={{ padding: "10px" }} onClick={handleAdd}>
          +
        </button>
        <button style={{ padding: "10px" }} onClick={handleMinus}>
          -
        </button>
      </div>
    </div>
  );
};

export default Solution01;

// const Solution01: React.FC = () => {
//   const [counter, setCounter] = useState(0);

//   function handleIncrement(): void {
//     setCounter((prev) => prev + 1);
//   }

//   function handleDecrement(): void {
//     setCounter((prev) => prev - 1);
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.counter}>{counter}</div>
//       <div className={styles.buttons__container}>
//         <button
//           className={`${styles.plus} ${styles.button}`}
//           onClick={handleIncrement}
//         >
//           +
//         </button>
//         <button
//           className={`${styles.minus} ${styles.button}`}
//           onClick={handleDecrement}
//         >
//           -
//         </button>
//       </div>
//     </div>
//   );
// };
