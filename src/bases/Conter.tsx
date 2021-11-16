import { useState } from "react";

interface propsType {
  initialValue?: number;
}
export const Conter = ({ initialValue = 0 }: propsType) => {
  const [counter, setcounter] = useState(initialValue);

  const handleClick = () => {
    setcounter((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};
