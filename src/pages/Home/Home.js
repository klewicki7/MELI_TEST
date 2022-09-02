import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListItems from "../../components/ListItems/ListItems";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./index.scss";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  
  const searchItem = () => {
    navigate("/items/search/" + search);
  };

  return (
    <SearchBar search={search} setSearch={setSearch} onClick={searchItem} />
  );
}

export default Home;
