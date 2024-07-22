export const solutionCode = `import styles from "./Solution.module.css";
import { useRef } from "react";

const Solution = () => {
  const listRef = useRef<HTMLUListElement>(null);

  const prevButton = () => {
    if (listRef.current) listRef.current.scrollLeft -= 216;
  };
  const nextButton = () => {
    if (listRef.current) listRef.current.scrollLeft += 216;
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Horizontal Scroll</h2>
        <ul className={styles.list1}>
          <li className={styles.mockImage}>1</li>
          <li className={styles.mockImage}>2</li>
          <li className={styles.mockImage}>3</li>
          <li className={styles.mockImage}>4</li>
          <li className={styles.mockImage}>5</li>
          <li className={styles.mockImage}>6</li>
          <li className={styles.mockImage}>7</li>
          <li className={styles.mockImage}>8</li>
          <li className={styles.mockImage}>9</li>
        </ul>
      </div>

      <div className={styles.container}>
        <h2>Horizontal Buttons</h2>
        <ul ref={listRef} className={styles.list2}>
          <li className={styles.mockImage}>1</li>
          <li className={styles.mockImage}>2</li>
          <li className={styles.mockImage}>3</li>
          <li className={styles.mockImage}>4</li>
          <li className={styles.mockImage}>5</li>
          <li className={styles.mockImage}>6</li>
          <li className={styles.mockImage}>7</li>
          <li className={styles.mockImage}>8</li>
          <li className={styles.mockImage}>9</li>
        </ul>
        <div className={styles.buttonContainer}>
          <button
            aria-label="Previous Image"
            onClick={prevButton}
            className={styles.buttonPrev}
          >
            Prev
          </button>
          <button
            aria-label="Next Image"
            onClick={nextButton}
            className={styles.buttonNext}
          >
            Next
          </button>
        </div>
      </div>

      <div className={styles.container}>
        <h2>Horizontal Snap</h2>
        <ul className={styles.list3}>
          <li className={styles.mockImage}>1</li>
          <li className={styles.mockImage}>2</li>
          <li className={styles.mockImage}>3</li>
          <li className={styles.mockImage}>4</li>
          <li className={styles.mockImage}>5</li>
          <li className={styles.mockImage}>6</li>
          <li className={styles.mockImage}>7</li>
          <li className={styles.mockImage}>8</li>
          <li className={styles.mockImage}>9</li>
        </ul>
      </div>
    </>
  );
};

export default Solution;`;
