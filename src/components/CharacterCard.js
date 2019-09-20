import React from "react";

function CharacterCard(props) {
  return (
    <img src={props.img} alt="character"/> 
    <div>
        <h3>Name: {props.name}</h3>
        <h4>Species: {props.species}</h4>
    </div>
  );
}

export default CharacterCard;
