import React from "react";

const Show = (props) => {
console.log(props.pokemon.name)
  return (
      <div>  
      <h1>Gotta Catch 'Em All</h1>
      <h2>{props.pokemon.name}</h2>
      <h3>{props.pokemon.type}</h3>
      <p><a href='/pokemon'>Go Back</a></p>
    </div>
  );
};

export default Show