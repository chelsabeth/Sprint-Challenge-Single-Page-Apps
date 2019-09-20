import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getList = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(res => {
          setList(res.data['results']);
          console.log(res);
        })
        .catch(err => {
          console.log("Sorry, an error has occured", err);
        });
    };
    getList();
  }, []);

  return (
    <div className="character-list">
      {list.map(character => {
        <CharacterCard
          image={character.image}
          name={character.name}
          species={character.species}
        />;
      })}
    </div>
  );
};

export default CharacterList;
