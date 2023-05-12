import React from "react";
import pokemon from "../models/pokemon";

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

const Index = (props) => {
  const data = props;
  console.log(data)
  return (
      <div>  
      <h1>Gotta Catch 'Em All</h1>
      <h2>{data.name}</h2>
      <img src={data.img + '.jpg'}></img>
      <h3><a href="/pokemon">Back</a></h3>
    </div>
  );
};

export default Index;
