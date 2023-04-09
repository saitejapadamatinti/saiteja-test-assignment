import React, { useEffect, useState } from "react";
import MoviesPage from "../moviesComponent";
import Cookies from "js-cookie";

const SearchPage = () => {
  const [searchedArray, setSearchedArray] = useState([]);
  const [searchValueinput, setSearchValueInput] = useState("Spider")

  const gettingDataFromSearchUrl = async () => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=4a867d8702eaa2d58333f3feb3238409&query=${searchValueinput}`;
    const response = await fetch(searchUrl);
    const data = await response.json();
    setSearchedArray(data.results);
  };

  useEffect(() => {
    gettingDataFromSearchUrl();
   const inputValue =  Cookies.get("searchInputValue")
   console.log(inputValue) 
   setSearchValueInput(inputValue)
  }, []);

  return (
    <div>
      <div>
        <MoviesPage moviesData={searchedArray} />
      </div>
    </div>
  );
};

export default SearchPage;
