"use client";

import { useState } from "react";

const Solution = () => {
  const [pwd, setPwd] = useState("");
  const [visible, toggleVisible] = useState(false);

  const toggleVisibility = (): void => {
    toggleVisible((prevVisible) => !prevVisible);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPwd(event.target.value);
  };

  return (
    <div>
      <label htmlFor="password">Enter Password</label>
      <br />
      <input
        onChange={handleInput}
        value={pwd}
        type={visible ? "text" : "password"}
        id="password"
        name="pwd"
      />{" "}
      <button onClick={toggleVisibility}>
        {visible ? "Hide Password" : "Show Password"}
      </button>
      <br />
      <br />
    </div>
  );
};

export default Solution;
