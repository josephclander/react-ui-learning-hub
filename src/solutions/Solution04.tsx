import { useRef, useState } from "react";

const Solution04 = () => {
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
    if (!selection || selection === "Select an option") {
      setForecast(null);
      return;
    }
    const result = weather[selection as keyof typeof weather];
    setForecast(result);
  };

  return (
    <div>
      <div>{forecast}</div>
      <br />
      <select ref={selectionRef} onChange={handleSelect}>
        <option>Select an option</option>
        <option value="London">London</option>
        <option value="Manchester">Manchester</option>
        <option value="Brighton">Brighton</option>
      </select>
    </div>
  );
};

export default Solution04;
