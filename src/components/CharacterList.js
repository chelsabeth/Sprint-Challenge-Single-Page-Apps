import React, { useEffect, useState } from "react";



const CharacterList = props => {
  const [list, setList] = useState([])
  useEffect(() => {
    const getList = () => {
      axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setList(res.data)
        console.log(res)
      })
      .catch(err => {
        console.log("Sorry, an error has occured", err);
      });
    }
    getList();
  }, []);


  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}

export default CharacterList;
