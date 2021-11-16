import { useReducer } from "react";
import { doIncreasedBy, doReset } from "../counter-reducer/actions/actions";
import { CounterState } from "../counter-reducer/interfaces/interfaces";
import { counterReducer } from "../counter-reducer/state/counterReducer";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerPretty = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch(doReset());
  };

  const handleClick = (increaseBy: number) => {
    dispatch(doIncreasedBy(increaseBy));
  };
  return (
    <div>
      <h1>Counter {state.counter}</h1>
      <h2>Clicks: {state.changes}</h2>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
};
