// file: next-app/app/_components/copyButton/CopyButton.tsx
"use client";
import CopiedIcon from "@/app/_assets/CopiedIcon";
import styles from "./CopyButton.module.css";

const CopyButton = ({ content }: { content: string }) => {
  async function copyToClipboard(): Promise<void> {
    try {
      await navigator.clipboard.writeText(content);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button onClick={copyToClipboard} className={styles.button}>
      <CopiedIcon width={"30px"} />
    </button>
  );
};

export default CopyButton;

