import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail/Detail";
import List from "./pages/List/List";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Home />
      <Routes>
        <Route path="/items/search/:search" element={<List />} />
        <Route path="/items/:id" element={<Detail />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
