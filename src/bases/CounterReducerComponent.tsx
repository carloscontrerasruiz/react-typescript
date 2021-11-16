import { useReducer } from "react";
import { useCounter } from "../hooks/useCounter";

interface propsType {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | {
      type: "increaseBy";
      payload: { value: number };
    }
  | { type: "reset" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increaseBy":
      return {
        ...state,
        previous: state.counter,
        counter: state.counter + action.payload.value,
        changes: state.changes + 1,
      };
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };
    default:
      return state;
  }
};

export const CounterReducerComponent = ({ initialValue = 5 }: propsType) => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleClick = (increaseBy: number) => {
    dispatch({ type: "increaseBy", payload: { value: increaseBy } });
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
