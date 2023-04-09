import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // Cookies.set("searchInputValue", {searchValue}, { maxAge:  5});
  //   const inputValue =  Cookies.get("searchInputValue")
  //  console.log(inputValue)  
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
        <form onSubmit={(e) => onFormSubmit(e)}>
          <input onChange={(e) => onChangeSearch(e)} type="text" />
          <Link to="/search">
            <button type="submit">Submit</button>
          </Link>
        </form>
      </nav>
    </div>
  );
};

export default Header;
