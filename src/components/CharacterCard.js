import React from "react";

function CharacterCard(props) {
  return (
    <div className="character">
      <img src={props.image} alt="character" />
      <div className="character-content">
        <h3>Name: {props.name}</h3>
        <h4>Species: {props.species}</h4>
      </div>
    </div>
  );
}

export default CharacterCard;
