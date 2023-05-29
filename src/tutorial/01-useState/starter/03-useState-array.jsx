import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button onClick={() => removePerson(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={clearAll} style={{ marginTop: "2rem" }}>
        Clear all
      </button>
    </>
  );
};

export default UseStateArray;
