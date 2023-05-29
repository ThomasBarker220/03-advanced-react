import { useState } from "react";

const UseStateBasics = () => {
  // const value = useState("hello")[0];
  // console.log(value);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  // const resetClick = () => {
  //   setCount(0);
  // };

  return (
    <>
      <h4> You clicked {count} times</h4>
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
      {/* <button className="btn" onClick={resetClick}>
        Reset
      </button> */}
    </>
  );
};

export default UseStateBasics;
