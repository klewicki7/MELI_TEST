import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./index.scss";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const searchItem = () => {
    navigate("/items/search/" + search);
  };

  return (
    <React.Fragment>
      <SearchBar search={search} setSearch={setSearch} onClick={searchItem} />
    </React.Fragment>
  );
}

export default Home;
