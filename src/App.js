import { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const randomNumber = useMemo(() => {
    console.log("calucalte...");
    let total = 0;
    for (let i = 0; i < 1000; i++) {
      total += count;
      console.log(total);
    }
    return total;
  }, [count]);

  return (
    <div className="App">
      <h1>Hello UseMemo</h1>
      count {count}
      random number {randomNumber}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
