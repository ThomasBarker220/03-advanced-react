import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const clickCount = () => {
    setTimeout(() => {
      setCount((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <div>
      <h2>UseState "Gotcha"</h2>
      <h3>{count}</h3>
      <button type="button" className="btn" onClick={clickCount}>
        Increment
      </button>
    </div>
  );
};

export default UseStateGotcha;
