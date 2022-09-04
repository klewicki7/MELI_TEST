import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {AiOutlineSearch} from "react-icons/ai";
import "./index.scss";

function SearchBar({ search, setSearch, onClick }) {
  const onChangeSearch = (text) => {
    setSearch(text.target.value);
  };
  const onKeyDown = (key) => {
    if(key === 'Enter') return onClick();
  }
  return (
    <header >
      <nav className="navbar-search bg-yellow">
        <Link className="link bg-yellow" to="/">
          <img className="logo bg-yellow" src={logo} alt="LOGO" />
        </Link>
        <div className="search-container bg-yellow">
          <input
            placeholder="Nunca dejes de buscar"
            className="search-bar bg-white"
            type={"text"}
            value={search}
            onChange={(text) => onChangeSearch(text)}
            onKeyDown={(e) => onKeyDown(e.key)}
          />
          <button disabled={search=== ''} onClick={() => onClick()} className="btn-search">
            <AiOutlineSearch  className="search-icon" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default SearchBar;
