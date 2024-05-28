import { CSSProperties, ChangeEvent, FormEvent, useState } from "react";

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "350px",
  border: "1px solid black",
  padding: "15px",
  gap: "15px",
};
const labelStyle: CSSProperties = {
  display: "block",
};

const inputStyle: CSSProperties = {
  padding: "5px",
};

const buttonStyle: CSSProperties = {
  padding: "5px",
  cursor: "pointer",
};

const Solution14 = () => {
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

    console.log({ title, content });
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <label style={labelStyle} htmlFor="title">
        Title
      </label>
      <input
        required
        onChange={handleTitle}
        value={title}
        style={inputStyle}
        type="text"
        name="title"
        id="title"
      />
      <label style={labelStyle} htmlFor="content">
        Content
      </label>
      <textarea
        required
        onChange={handleContent}
        value={content}
        rows={5}
        style={inputStyle}
        name="content"
        id="content"
      />
      <input
        aria-label="Submit post"
        style={buttonStyle}
        type="submit"
        value="Post"
      />
    </form>
  );
};

export default Solution14;
