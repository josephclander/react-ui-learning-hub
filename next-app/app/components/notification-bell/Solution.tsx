"use client";

import { useState } from "react";
import styles from "./Solution.module.css";
const messages = ["Message one", "Message two"];

const Solution = () => {
  const [isViewed, setIsViewed] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsViewed(true)}
        aria-label="click for notifications"
        className={styles.bell}
      >
        🔔{!isViewed && <span className={styles.badge}></span>}
      </button>
      {isViewed && (
        <ul>
          {messages.map((msg, index) => (
            <li className={styles.msg} key={index}>
              {msg}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Solution;
