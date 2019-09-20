import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";

const CharacterList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getList = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(res => {
          const list = res.data.results;
          console.log("Character Data", res);
          setList(list);
        })
        .catch(err => {
          console.log("Sorry, an error has occured", err);
        });
    };
    getList();
  }, []);

  return (
    <div className="character-list">
      <Container>
      <Row>
      {list.map(character => {
        return(
          <CharacterCard 
          key={character.id}
          image={character.image}
          name={character.name}
          species={character.species}
          />
        );
      })}
      </Row>
      </Container>
    </div>
  );
};

export default CharacterList;
