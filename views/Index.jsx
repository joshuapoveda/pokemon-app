import React from "react";

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
          return <li><a href={`pokemon/${data[i]._id}`}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</a></li>;
        })}
      </ul>
    </div>
  );
};

export default Index;