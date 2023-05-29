import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle component
      </button>
      {toggle && <NewComponent />}
    </div>
  );
};

const NewComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      //some logic
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return <h1>Hello</h1>;
};

export default CleanupFunction;