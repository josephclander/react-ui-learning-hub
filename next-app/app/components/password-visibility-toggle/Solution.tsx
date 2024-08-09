"use client";

import { useState } from "react";
import styles from "./Solution.module.css";

const Solution = () => {
  const [pwd, setPwd] = useState("");
  const [visible, toggleVisible] = useState(false);

  const toggleVisibility = (): void => {
    toggleVisible((prevVisible) => !prevVisible);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPwd(event.target.value);
  };

  return (
    <>
      <label className={styles.label} htmlFor="password">
        Enter Password
      </label>
      <input
        className={styles.input}
        onChange={handleInput}
        value={pwd}
        type={visible ? "text" : "password"}
        id="password"
        name="pwd"
      />{" "}
      <button className={styles.button} onClick={toggleVisibility}>
        {visible ? "Hide Password" : "Show Password"}
      </button>
    </>
  );
};

export default Solution;
