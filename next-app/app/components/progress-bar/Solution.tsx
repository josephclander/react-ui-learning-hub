"use client";

import { useState, CSSProperties } from "react";

const Solution = () => {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const progressBarWidth = 400;

  const inputStyle: CSSProperties = {
    padding: "5px",
    margin: "50px 0 20px",
  };

  const progressContainerStyle: CSSProperties = {
    position: "relative",
  };

  const progressStyle: CSSProperties = {
    position: "absolute",
    marginTop: "10px",
    height: "20px",
    // 400 / 50 = 8 -> calc proportion of length
    width: `${Math.min(progressBarWidth, 8 * count)}px`,
    backgroundColor: "#BFE6DE",
    border: "1px solid black",
  };

  const progressBGStyle: CSSProperties = {
    position: "absolute",
    marginTop: "10px",
    height: "20px",
    width: `${progressBarWidth}px`,
    border: "1px solid black",
  };

  const handleCount: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const newCount = event.target.value.length;
    setCount(newCount);
    setIsComplete(newCount >= 50);
  };

  return (
    <div>
      <h3>Enter a string with at least 50 characters</h3>
      <div style={progressContainerStyle}>
        <div style={progressBGStyle}></div>
        <div style={progressStyle}></div>
      </div>
      <textarea onChange={handleCount} style={inputStyle} cols={46} rows={3} />
      {isComplete && <h3 style={{ color: "red" }}>Complete!</h3>}
    </div>
  );
};

export default Solution;
