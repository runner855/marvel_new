import React, { useEffect, useState } from "react";
import charactersCall from "../../api/charactersCall";
import { CharactersProps } from "../../Types/Apptypes";

export const Characters = () => {
  const [characters, setCharacters] = useState<any>();
  useEffect(() => {
    charactersCall
      .get(`characters?apikey=${process.env.REACT_APP_API_KEY}`, {})
      .then((res) => setCharacters(res.data));
  }, []);

  console.log(
    characters &&
      characters.data.results.map((item: CharactersProps, index: number) => {
        return item;
      })
  );
  return (
    <div>
      {characters &&
        characters.data.results.map((item: CharactersProps, index: number) => {
          return (
            <div className="cards_container" key={index}>
              <div className="card">{item.name}</div>
            </div>
          );
        })}
    </div>
  );
};
