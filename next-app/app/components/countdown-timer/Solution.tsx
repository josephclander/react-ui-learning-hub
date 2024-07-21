"use client";

import { useRef, useState, useEffect } from "react";

const Solution = () => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const intervalRef = useRef<number | null>(null);
  const [count, setCount] = useState(0);

  const timeStyle = {
    padding: "5px",
    display: "block",
    margin: "5px 0",
    width: "100px",
  };

  const displayStyle = {
    padding: "5px",
    display: "block",
    margin: "5px 0",
  };

  const handleStart = () => {
    const inputValue = inputRef.current?.value;
    const numberValue = inputValue ? parseInt(inputValue, 10) : 0;
    setCount(numberValue); // Set count and start/restart timer
  };

  // this was required for multiple start presses
  useEffect(() => {
    // Only start a new timer if count is greater than 0
    if (count > 0) {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current); // Clear existing timer
      }
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
      }, 1000) as unknown as number;
    } else if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      // Cleanup interval on component unmount or count changes
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [count]); // Effect depends on count

  return (
    <div>
      <label htmlFor="time">Time</label>
      <input ref={inputRef} type="number" style={timeStyle} defaultValue={0} />
      <button onClick={handleStart} type="button">
        Start
      </button>
      <div style={displayStyle}>{count}</div>
    </div>
  );
};

export default Solution;
