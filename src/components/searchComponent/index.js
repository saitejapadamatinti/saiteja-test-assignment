import React, { useEffect, useState } from "react";
import MoviesPage from "../moviesComponent";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const SearchPage = () => {
  const [searchedArray, setSearchedArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(searchedArray.length)

  const { value } = useParams();
//   console.log(value);

  const gettingDataFromSearchUrl = async () => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=4a867d8702eaa2d58333f3feb3238409&query=${value}`;
    const response = await fetch(searchUrl);
    const data = await response.json();
    setIsLoading(false);
    setSearchedArray(data.results);
  };

  useEffect(() => {
    gettingDataFromSearchUrl();
  }, [value]);

  return isLoading ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  ) : (
    <div>
      {searchedArray.length === 0 ? (
        
        <div className="w-screen h-full flex justify-center items-center"><p className="text-2xl font-bold mt-[40%] md:mt-[20%]" >No data</p></div>
      ) : (
        <div>
          <MoviesPage isClicked="true" moviesData={searchedArray} />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
