export const solutionCode = `import { useState, CSSProperties } from "react";
import styles from "./Solution.module.css";

const Solution = () => {
  const [showOne, toggleShowOne] = useState(false);
  const handleClick = () => {
    toggleShowOne((prev) => !prev);
  };

  const showStyle: CSSProperties = {
    transform: "translate(0, 0)",
  };

  const hideStyle: CSSProperties = {
    transform: "translate(0, -150px)",
  };

  const visibilityStyle = showOne ? showStyle : hideStyle;

  return (
    <div>
      <section className={styles.section}>
        <h2 onClick={handleClick} className={styles.heading}>
          Drop Down One
        </h2>
        <ul style={visibilityStyle} className={styles.list}>
          <li className={styles.listItem}>A</li>
          <li className={styles.listItem}>B</li>
          <li className={styles.listItem}>C</li>
        </ul>
      </section>
    </div>
  );
};

export default Solution;`;
