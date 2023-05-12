import React from "react";
import pokemon from "../models/pokemon";

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

const Index = (props) => {
  const data = props.pokemon;
  return (
    <div style={myStyle}>
      <ul>
        {data.map((poke, i) => {
          return <li>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</li>;
        })}
      </ul>
    </div>
  );
};

export default Index;
