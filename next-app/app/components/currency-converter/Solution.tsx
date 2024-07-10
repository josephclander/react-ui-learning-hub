"use client";

import { useRef, useState } from "react";
import styles from "./Solution.module.css";

const Solution = () => {
  const conversionRate_GBP_to_USD: number = 1.25;
  const inputAmount = useRef<HTMLInputElement>(null);
  const [usdAmount, setUsdAmount] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const gbp: number = parseInt(inputAmount?.current?.value || "0");
    setUsdAmount(gbp * conversionRate_GBP_to_USD);
  };

  return (
    <div>
      <div>
        Current Rate: GBP to USD <span>{conversionRate_GBP_to_USD}</span>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div>GBP Amount</div>
        <input className={styles.inputAmount} type="text" ref={inputAmount} />
        <input className={styles.inputSubmit} type="submit" value="Convert" />
      </form>
      <br />
      <div>USD Amount</div>
      <p>{usdAmount}</p>
    </div>
  );
};

export default Solution;
