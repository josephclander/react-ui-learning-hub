import { codeToHtml } from "shiki";
import styles from './CodeStyling.module.css'

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
    <div className={styles.element} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default CodeStyling;
