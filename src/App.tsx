import React, { useEffect } from "react";
import "./App.css";
import charactersCall from "./api/charactersCall";

export const App = () => {
  useEffect(() => {
    charactersCall
      .get(`characters?apikey=${process.env.REACT_APP_API_KEY}`, {})
      .then((res) => console.log(res));
  }, []);
  console.log(process.env.REACT_APP_API_KEY);
  return <div className="App">Marvel</div>;
};
