export const solutionCode = `import { useRef, useState } from "react";
import styles from "./Solution.module.css";

const Solution = () => {
  type weatherProps = {
    [key: string]: string;
  };

  const weather: weatherProps = {
    London: "Sunny ☀️",
    Manchester: "Rainy 🌧️",
    Brighton: "Cloudy ☁️",
  };

  const selectionRef = useRef<HTMLSelectElement>(null);
  const [forecast, setForecast] = useState<null | string>(null);

  const handleSelect = () => {
    const selection: string | undefined = selectionRef?.current?.value;
    if (!selection || selection === "Select city") {
      setForecast(null);
      return;
    }
    const result = weather[selection as keyof typeof weather];
    setForecast(result);
  };

  return (
    <div>
      <h2>Weather forecast</h2>
      <div className={styles.container}>
        <select ref={selectionRef} onChange={handleSelect}>
          <option>Select city</option>
          <option value="London">London</option>
          <option value="Manchester">Manchester</option>
          <option value="Brighton">Brighton</option>
        </select>
        <div className={styles.output}>{forecast}</div>
      </div>
    </div>
  );
};`;
