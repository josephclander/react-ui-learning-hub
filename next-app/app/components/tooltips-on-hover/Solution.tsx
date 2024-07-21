import styles from "./Solution.module.css";

const Solution = () => {
  return (
    <div>
      <ul>
        <li className={styles.listItem}>
          1<span className={styles.tooltip}>Item 1</span>
        </li>
        <li className={styles.listItem}>
          2<span className={styles.tooltip}>Item 2</span>
        </li>
        <li className={styles.listItem}>
          3<span className={styles.tooltip}>Item 3</span>
        </li>
      </ul>
    </div>
  );
};

export default Solution;
