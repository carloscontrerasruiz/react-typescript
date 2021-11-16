import { useCounter } from "../hooks/useCounter";

interface propsType {
  initialValue?: number;
}

export const CounterEffectHook = ({ initialValue = 5 }: propsType) => {
  const { counter, counterAnimated, handleClick } = useCounter(5);
  return (
    <div>
      <h1>Counter {counter.counter}</h1>
      <h2 ref={counterAnimated}>Clicks: {counter.clicks}</h2>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </div>
  );
};
