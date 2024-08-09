"use client";

import { useState, CSSProperties } from "react";
import styles from "./Solution.module.css";

const Solution = () => {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const progressStyle: CSSProperties = {
    // 400px / 50 characters = 8 -> calc proportion of length
    width: `${8 * count}px`,
  };

  const handleCount: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const newCount = event.target.value.length;
    setCount(newCount);
    setIsComplete(newCount >= 50);
  };

  return (
    <div>
      <h3>Enter a string with at least 50 characters</h3>
      <div className={styles.progressContainer}>
        <div className={styles.progressBG}></div>
        <div style={progressStyle} className={styles.progress}></div>
      </div>
      <textarea
        className={styles.input}
        onChange={handleCount}
        cols={46}
        rows={3}
      />
      {isComplete && <h3 className={styles.completeMsg}>Complete!</h3>}
    </div>
  );
};

export default Solution;
