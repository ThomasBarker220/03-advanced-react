import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "ping pong",
  });
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("Ping Pong");

  const changePerson = () => {
    setPerson({
      name: "John",
      age: 28,
      hobby: "scream at the computer",
    });
  };

  return (
    <div>
      <h2>UseState Object Example</h2>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className="btn" onClick={changePerson}>
        Show John
      </button>
    </div>
  );
};

export default UseStateObject;
