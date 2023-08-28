import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount(Math.floor(Math.random() * 100))}>
          Nevin is {count}% gay
        </button>
      </div>
    </>
  );
}

export default App;
