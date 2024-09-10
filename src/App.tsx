import React from "react";
import "./App.css";
import { NavBar } from "./ Components/NavBar/NavBar";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { MainContainer } from "./ Components/MainContainer/MainContainer";

export const App = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/characters" />} />
        <Route path="/:page" element={<MainContainer />} />
      </Routes>
    </div>
  );
};
