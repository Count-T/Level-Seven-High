import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Math from "./Components/Math";
import Physics from "./Components/Physics";
import Chemistry from "./Components/Chemistry";
import ComputerScience from "./Components/ComputerScience";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar></Navbar></div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Math" element={<Math />}></Route>
        <Route exact path="/Physics" element={<Physics />}></Route>
        <Route exact path="/Math" element={<Math />}></Route>
        <Route exact path="/Chemistry" element={<Chemistry />}></Route>
        <Route
          exact
          path="/ComputerScience"
          element={<ComputerScience />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
