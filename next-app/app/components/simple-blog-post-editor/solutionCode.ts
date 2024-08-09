export const solutionCode = `import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Solution.module.css";

const Solution = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  function handleTitle(event: ChangeEvent<HTMLInputElement>): void {
    setTitle(event.target.value);
  }

  function handleContent(event: ChangeEvent<HTMLTextAreaElement>): void {
    setContent(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    alert(\`Title: $\{title}, \\nContent: $\{content}\`);
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label className={styles.label} htmlFor="title">
        Title
      </label>
      <input
        required
        onChange={handleTitle}
        value={title}
        className={styles.input}
        type="text"
        name="title"
        id="title"
      />
      <label className={styles.label} htmlFor="content">
        Content
      </label>
      <textarea
        required
        onChange={handleContent}
        value={content}
        rows={5}
        className={styles.input}
        name="content"
        id="content"
      />
      <input
        aria-label="Submit post"
        className={styles.button}
        type="submit"
        value="Post"
      />
    </form>
  );
};

export default Solution;`;
