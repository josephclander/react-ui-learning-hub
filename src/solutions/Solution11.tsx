import { useState } from "react";

const Solution11 = () => {
  const [pwd, setPwd] = useState("");
  const [visible, toggleVisible] = useState(false);

  const handleVisibility = (): void => {
    toggleVisible((prev) => !prev);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPwd(event.target.value);
  };

  return (
    <div>
      <label htmlFor="password">Enter Password</label>
      <br />
      <input
        onChange={(event) => handleInput(event)}
        value={pwd}
        type="password"
        id="password"
      />
      <button onClick={handleVisibility}>
        {visible ? "Hide Password" : "View Password"}
      </button>
      {visible && <p>{pwd}</p>}
      <br />
      <br />
    </div>
  );
};

export default Solution11;
