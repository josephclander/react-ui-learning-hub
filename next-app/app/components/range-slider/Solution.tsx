"use client";

import { useState } from "react";
import styles from "./Solution.module.css";

const Solution = () => {
  const [value, setValue] = useState(5);

  const handleChange = (output: string) => {
    const eventValue = parseInt(output) ?? 5;
    setValue(eventValue);
  };

  return (
    <>
      <label className={styles.label} htmlFor="js-id">
        Rate your confidence with React from 0 - 10
      </label>
      <p>
        Selected value: <span className={styles.value}>{value}</span>
      </p>
      <input
        type="range"
        onChange={(event) => handleChange(event?.target?.value)}
        className={styles.input}
        min={0}
        max={10}
        step={1}
        list="markers"
        name="js-value"
        id="js-id"
      />
      <datalist id="markers">
        <option value="0"></option>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
        <option value="6"></option>
        <option value="7"></option>
        <option value="8"></option>
        <option value="9"></option>
        <option value="10"></option>
      </datalist>
    </>
  );
};

export default Solution;
