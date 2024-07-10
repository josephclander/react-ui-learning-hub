import { codeToHtml } from "shiki";

const CodeStyling = async ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  const elementStyle = {
    padding: "15px",
    backgroundColor: "#2e3440",
    borderRadius: "5px"
  };

  const html = await codeToHtml(code, {
    lang: language,
    theme: "nord",
  });

  return (
    <div style={elementStyle} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default CodeStyling;
