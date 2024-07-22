"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./Solution.module.css";

const Solution = () => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const intervalRef = useRef<number | null>(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    const inputValue = inputRef.current?.value;
    const numberValue = inputValue ? parseInt(inputValue, 10) : 0;
    setCount(numberValue); // Set count and start/restart timer
  };

  // this was required for multiple start presses
  useEffect(() => {
    // Only start a new timer if count is greater than 0
    if (count > 0) {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current); // Clear existing timer
      }
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
      }, 1000) as unknown as number;
    } else if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      // Cleanup interval on component unmount or count changes
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [count]); // Effect depends on count

  return (
    <>
      <label className={styles.label} htmlFor="time">
        Set time in seconds
      </label>
      <input
        ref={inputRef}
        type="number"
        id="time"
        className={styles.timeInput}
        defaultValue={0}
      />
      <button onClick={handleStart} type="button" className={styles.button}>
        Start
      </button>
      <div className={styles.display}>{count}</div>
    </>
  );
};

export default Solution;
