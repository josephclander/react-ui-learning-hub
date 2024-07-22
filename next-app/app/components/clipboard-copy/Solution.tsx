"use client";

import { useRef, useState } from "react";
import styles from "./Solution.module.css";

const Solution = () => {
  const initialButtonText = "Copy to Clipboard";

  const [buttonIdle, setButtonIdle] = useState(true);
  const [buttonText, setButtonText] = useState<string>(initialButtonText);

  const buttonFeedback = () => {
    setButtonText("Copied!");
    setButtonIdle(false);
    // return text and button after half a second
    setTimeout(() => {
      setButtonText(initialButtonText);
      setButtonIdle(true);
    }, 500);
  };

  const textRef = useRef<null | HTMLTextAreaElement>(null);

  const clickHandler = () => {
    copyToClipboard();
    buttonFeedback();
  };

  const copyToClipboard = async (): Promise<void> => {
    const copyText = textRef?.current?.value;
    if (copyText) {
      try {
        await navigator.clipboard.writeText(copyText);
        // make the button say 'copied' when complete
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <textarea
        ref={textRef}
        cols={50}
        rows={5}
        placeholder="Enter your message to be copied here"
        className={styles.textArea}
      />
      <button
        onClick={clickHandler}
        className={`${styles.button} ${
          buttonIdle ? styles.idle : styles.active
        }`}
      >
        {buttonText}
      </button>
      <textarea
        cols={50}
        rows={5}
        placeholder="Test that you can paste it when you're done!"
        className={styles.textArea}
      />
    </div>
  );
};

export default Solution;
