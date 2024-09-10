import React, { useEffect } from "react";
import charactersCall from "../../api/charactersCall";

export const Characters = () => {
  useEffect(() => {
    charactersCall
      .get(`characters?apikey=${process.env.REACT_APP_API_KEY}`, {})
      .then((res) => console.log(res));
  }, []);
  return <div>Characters</div>;
};
