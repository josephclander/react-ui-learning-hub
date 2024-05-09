import { useRef, useState } from "react";

const Solution19 = () => {
  const initialButtonStyle = {
    display: "block",
    padding: "10px 20px",
    width: "200px",
    cursor: "pointer",
    margin: "5px 0 50px",
    backgroundColor: "#e9e9e9",
    transform: "scale(1)",
    transition: "all 0.3s ease-out",
  };

  const initialButtonText = "Copy to Clipboard";

  const [buttonStyle, setButtonStyle] = useState(initialButtonStyle);
  const [buttonText, setButtonText] = useState<string>(initialButtonText);

  const buttonFeedback = () => {
    setButtonText("Copied!");
    setButtonStyle((prevBtnStyle) => ({
      ...prevBtnStyle,
      transform: "scale(1.05)",
      backgroundColor: "#BFE6DE"
    }));
    // return text and button after 1 second
    setTimeout(() => {
      setButtonText(initialButtonText);
      setButtonStyle(initialButtonStyle);
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
      />
      <button onClick={clickHandler} style={buttonStyle}>
        {buttonText}
      </button>
      <textarea
        cols={50}
        rows={5}
        placeholder="Test that you can paste it when you're done!"
      />
    </div>
  );
};

export default Solution19;
