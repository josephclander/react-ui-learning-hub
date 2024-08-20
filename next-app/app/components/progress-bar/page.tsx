import { info } from "./info";
import styles from "../page.module.css";
import Solution from "./Solution";
import CodeStyling from "../../_components/codeStyling/CodeStyling";
import Explanation from "./Explanation";
import { solutionCode } from "./solutionCode";
import { solutionCss } from "./solutionCss";
import { Metadata } from "next";
import titleToKebabCase from "../../utils/kebab-case";

export const metadata: Metadata = {
  title: `${info.title}`,
  description: `${info.details}`,
  alternates: {
    canonical: `/components/${titleToKebabCase(info.title)}`,
  },
};

const Component = () => {
  return (
    <main className={styles.Component__container}>
      <div className={styles.Component}>
        <div className={styles.Component__HeadingContainer}>
          <h1>{info && info.title}</h1>
          <p className={styles.Component__details}>{info && info.details}</p>
        </div>
        <h2 className={styles.Component__heading}>Solution</h2>
        <div className={styles.Component__SolutionContainer}>
          <Solution />
        </div>
        <h2 className={styles.Component__heading}>Explanation</h2>
        <div className={styles.Component__ExplanationContainer}>
          <Explanation />
        </div>
        <h2 className={styles.Component__heading}>Code</h2>

        <CodeStyling code={solutionCode} language="typescript" />
        <h2 className={styles.Component__heading}>Styling</h2>
        <CodeStyling code={solutionCss} language="css" />
      </div>
    </main>
  );
};

export default Component;
