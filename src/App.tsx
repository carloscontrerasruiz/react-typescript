import { Conter } from "./bases/Conter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterEffectHook } from "./bases/CounterEffectHook";
import { CounterReducerComponent } from "./bases/CounterReducerComponent";

function App() {
  return (
    <div className="App">
      <h1>React</h1>
      <hr />
      <Conter initialValue={5} />
      <h1>Counter By</h1>
      <hr />
      <CounterBy />
      <h1>Counter Effect</h1>
      <hr />
      <CounterEffect />
      <h1>Counter Effect Hook</h1>
      <hr />
      <CounterEffectHook />
      <h1>Counter Reducer</h1>
      <hr />
      <CounterReducerComponent />
    </div>
  );
}

export default App;
