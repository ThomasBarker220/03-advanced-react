import { useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState("");
  //truthy
  const [name, setName] = useState("thomas");

  return (
    <div>
      <h2>Falsy OR: {text || "hello world"}</h2>
      <h2>Falsy AND: {text && "hello world"}</h2>
      <h2>Truthy OR: {name || "hello world"}</h2>
      <h2>Truthy AND: {name && "hello world"}</h2>
    </div>
  );
};
export default ShortCircuitOverview;
