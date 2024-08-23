import { codeToHtml } from "shiki";
import styles from "./CodeStyling.module.css";
import CopyButton from "../copyButton/CopyButton";

const CodeStyling = async ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "nord",
  });

  return (
    <div className={styles.elementContainer}>
      <CopyButton content={code} />
      <div
        className={styles.element}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default CodeStyling;
