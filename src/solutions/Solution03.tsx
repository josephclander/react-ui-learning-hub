import { useRef, useState } from "react";

const Solution03 = () => {
  const conversionRate_GBP_to_USD: number = 1.25;

  const inputAmount = useRef<HTMLInputElement>(null);
  const [usdAmount, setUsdAmount] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputAmount?.current?.value) return;
    const gbp: number = parseInt(inputAmount?.current?.value);
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
        <input type="text" ref={inputAmount} />
        <input type="submit" value="Convert" />
      </form>
      <br />
      <div>USD Amount</div>
      <p>{usdAmount}</p>
    </div>
  );
};

export default Solution03;
