"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Solution.module.css";

const Solution = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const timingFunction = () => {
    setTime((prevTime) => prevTime + 1);
  };

  // access a counter globally
  useEffect(() => {
    if (status) {
      timerRef.current = setInterval(timingFunction, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [status]);

  const handleStart = () => {
    setStatus(true);
  };

  const handleStop = () => {
    setStatus(false);
  };

  const handleReset = () => {
    setStatus(false);
    setTime(0);
  };

  return (
    <div>
      <div>{time}</div>
      <div className={styles.controls}>
        <button
          onClick={handleStart}
          className={`${styles.button} ${styles.start}`}
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className={`${styles.button} ${styles.stop}`}
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className={`${styles.button} ${styles.reset}`}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Solution;
