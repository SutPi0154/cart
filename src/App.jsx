import { useContext, useReducer, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./Pages/Products";
import StateCard from "./components/StateCart";
import Success from "./components/Success";
import Detail from "./Pages/Detail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/stateCart" element={<StateCard />} />
        <Route path="/success" element={<Success />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
