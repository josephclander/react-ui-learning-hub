export const solutionCode = `"use client";

import { useState } from "react";
import styles from "./Solution.module.css";

const Solution = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => setIsDark((prevMode) => !prevMode);

  return (
    <div
      className={\`$\{styles.container} $\{
        isDark ? styles.darkMode : styles.lightMode
      }\`}
    >
      <button
        onClick={toggleDarkMode}
        aria-label="Dark mode toggle"
        className={styles.buttonTheme}
        type="button"
      >
        Toggle Theme
      </button>
      <h1>Headline</h1>
      <section className={styles.section}>
        <h2>Section</h2>
        <p>
          This solution toggles CSS root values for font and background colours.
        </p>
        <p>If light we use:</p>
        <p>--fontColor: black; --bgColor: white;</p>
        <p>If dark we use:</p>
        <p>--fontColor: white; --bgColor: black;</p>
        <p>
          Better solutions would also take account of the users preferences. You
          can see from this{" "}
          <a href="https://blog.logrocket.com/dark-mode-react-in-depth-guide/#using-system-settings">
            article
          </a>{" "}
          how you need to access the system settings with media queries.
        </p>
      </section>
    </div>
  );
};

export default Solution;
`;
