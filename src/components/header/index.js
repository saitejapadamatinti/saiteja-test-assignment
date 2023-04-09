import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { redirect } from "react-router-dom";
import Cookies from "js-cookie";

// const UserContext = React.createContext()

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-screen flex justify-center items-center content-center bg-slate-700 h-14">
      <nav className="flex gap-32">
        <NavLink to="/" className="text-xl">
          Movies
        </NavLink>
        <NavLink to="/favorite" className="text-xl">
          Favarioate
        </NavLink>
        <form type="submit" onSubmit={(e) => onFormSubmit(e)}>
          <input onChange={(e) => onChangeSearch(e)} type="search" />
          <Link to={`/search/${searchValue}`}>
            <button type="submit">Submit</button>
          </Link>
        </form>
      </nav>
    </div>
  );
};

export default Header;
