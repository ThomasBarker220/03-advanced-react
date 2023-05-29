import React from "react";
import avatar from "../../../assets/default-avatar.svg";
import { people } from "../../../data";

const Person = ({ name, nickName = "shakeAndBake", images }) => {
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h2>{name}</h2>
      <h4>Nickname: {nickName}</h4>
    </div>
  );
};

export default Person;
