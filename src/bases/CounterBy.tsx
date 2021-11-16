import { useState } from "react";

interface propsType {
  initialValue?: number;
}
interface state {
  clicks: number;
  counter: number;
}
export const CounterBy = ({ initialValue = 5 }: propsType) => {
  const [counter, setcounter] = useState<state>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (addValue: number) => {
    setcounter((prev) => ({
      clicks: prev.clicks + 1,
      counter: prev.counter + addValue,
    }));
  };
  return (
    <div>
      <h1>Counter {counter.counter}</h1>
      <h1>Clicks: {counter.clicks}</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </div>
  );
};
