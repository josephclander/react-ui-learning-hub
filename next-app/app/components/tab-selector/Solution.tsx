"use client";

import { useState } from "react";
import styles from "./Solution.module.css";

const Solution = () => {
  type tabProps = "One" | "Two" | "Three";

  const [activeTab, setActiveTab] = useState<tabProps>("One");

  const clickHandler = (tab: tabProps) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className={styles.list}>
        <li
          onClick={() => clickHandler("One")}
          className={`${styles.listItem} ${
            activeTab === "One" ? styles.active : ""
          }`}
        >
          One
        </li>
        <li
          onClick={() => clickHandler("Two")}
          className={`${styles.listItem} ${
            activeTab === "Two" ? styles.active : ""
          }`}
        >
          Two
        </li>
        <li
          onClick={() => clickHandler("Three")}
          className={`${styles.listItem} ${
            activeTab === "Three" ? styles.active : ""
          }`}
        >
          Three
        </li>
      </ul>
      <section className={styles.content}>{content[activeTab]}</section>
    </div>
  );
};

export default Solution;

const content: { [key: string]: string } = {
  One: "This is the first section.",
  Two: "This is the second section.",
  Three: "This is the third section.",
};
