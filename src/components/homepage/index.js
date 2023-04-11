import { useEffect } from "react";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import MoviesPage from "../moviesComponent";
import { BsSearch } from "react-icons/bs";

// const toGetRequestToken =
//   "https://api.themoviedb.org/3/authentication/token/new?api_key=4a867d8702eaa2d58333f3feb3238409";

const HomePage = () => {
  // feching all movies data
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // feching search movie data
  // const [searchedArray, setSearchedArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // ------------------------- fetching movies list and seach list  ------------------------
  const fetchMoviesDatafromApi = async () => {
    const key = "4a867d8702eaa2d58333f3feb3238409";
    const movisListCount = 10;
    const moviesApi = `https://api.themoviedb.org/3/list/${movisListCount}?api_key=${key}`;
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=4a867d8702eaa2d58333f3feb3238409&query=${searchValue}`;
    try {
      if (searchValue === "") {
        const moviesData = await fetch(moviesApi);
        const data = await moviesData.json();
        setIsLoading(false);
        setMoviesData(data.items);
      } else {
        const moviesData = await fetch(searchUrl);
        const data = await moviesData.json();
        setIsLoading(false);
        setMoviesData(data.results);
      }
    } catch {
      console.log("error Fetching");
    }
  };

  useEffect(() => {
    fetchMoviesDatafromApi();
  }, [searchValue]);

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // gettingDataFromSearchUrl();
  };

  // feching search movie data only
  // const gettingDataFromSearchUrl = async () => {
  //   setIsLoading(true);
  //   const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=4a867d8702eaa2d58333f3feb3238409&query=${searchValue}`;
  //   const response = await fetch(searchUrl);
  //   const data = await response.json();
  //   setIsLoading(false);
  //   setSearchedArray(data.results);
  // };

  // ------------------------- fetching movies list method 1 ------------------------
  // const fetchMoviesDatafromApi = async () => {
  //   const key = "4a867d8702eaa2d58333f3feb3238409";
  //   const movisListCount = 10;
  //   const moviesApi = `https://api.themoviedb.org/3/list/${movisListCount}?api_key=${key}`;
  //   try {
  //     const moviesData = await fetch(moviesApi);
  //     const data = await moviesData.json();
  //     setIsLoading(false);
  //     setMoviesData(data.items);
  //   } catch {
  //     console.log("error Fetching");
  //   }
  // };

  return isLoading ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  ) : (
    <>
      <div>
        <div className="px-[20px] pt-[30px] md:px-[40px] lg:px-[60px]">
          <form type="submit" onSubmit={(e) => onFormSubmit(e)}>
            <div className="flex justify-start">
              <div className="border rounded-md flex items-center pr-2">
                <input
                  placeholder="Search Movie here"
                  onChange={(e) => onChangeSearch(e)}
                  type="search"
                  className="outline-none  md:w-[300px] p-1 pl-2 "
                />
                <button className="border-l-2 pl-2" type="submit">
                  <BsSearch />
                </button>
              </div>
            </div>
          </form>

          <h1 className="py-5 text-2xl font-bold">Movies List</h1>
        </div>
        {/* {searchedArray.length === 0 ? ( */}
        <MoviesPage moviesData={moviesData} />
        {/* // ) : (
        //   <MoviesPage moviesData={searchedArray} />
        // )} */}
      </div>
    </>
  );
};

export default HomePage;
