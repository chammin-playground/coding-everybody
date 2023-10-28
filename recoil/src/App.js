import { useRecoilState } from "recoil";
import { countState } from "./atom";

import "./App.css";

function Counter() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
    </div>
  );
}

function DisplayCounter() {
  const [count] = useRecoilState(countState);

  return <div>{count}</div>;
}

function App() {
  return (
    <div>
      <h1>App</h1>
      <Counter />
      <DisplayCounter />
    </div>
  );
}

export default App;
