import styles from "./Solution01.module.css";

const Solution01 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.counter}>0</div>
      <div className={styles.buttons__container}>
        <button className={styles.plus}>+</button>
        <button className={styles.minus}>-</button>
      </div>
    </div>
  );
};

export default Solution01;
