import { useEffect } from "react";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import Header from "../header";
import MoviesPage from "../moviesComponent";

const toGetRequestToken =
  "https://api.themoviedb.org/3/authentication/token/new?api_key=4a867d8702eaa2d58333f3feb3238409";

const HomePage = () => {
  const [moviesData, setMoviesData] = useState([]);

  // const [searchFilterdData, setSearchFilterdData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // const [requestToken, setRequestToken] = useState("");
  // console.log(requestToken)

  // search filter
  // const searchDataFiltering = (value) => {
  //   console.log(value);
  //   if (value !== "") {
  //     const searchmovieData = moviesData.filter((eachItem) =>
  //       eachItem.title.toLowerCase().includes(value.toLowerCase())
  //     );
  //     return setSearchFilterdData(searchmovieData);
  //   } else {
  //     return setSearchFilterdData([...moviesData]);
  //   }
  //   return;
  // };

  // authentication
  // const getrequestToken = async () => {
  //   const response = await fetch(toGetRequestToken);
  //   const requestTokenData = await response.json();
  //   setRequestToken(requestTokenData.request_token);
  // };

  // const getAuthentication = async () => {
  //   const tokenKey = {
  //     request_token: requestToken,
  //   };
  //   console.log(tokenKey);
  //   const options = {
  //     method: "POST",
  //     body: JSON.stringify(tokenKey),
  //   };
  //   const askingPermission = await fetch(
  //     "https://api.themoviedb.org/3/authentication/session/new?api_key=4a867d8702eaa2d58333f3feb3238409",
  //     options
  //   );
  //   const sessionKey = await askingPermission.json();
  //   console.log(sessionKey);
  // };

  // fetching movies list
  const fetchMoviesDatafromApi = async () => {
    const key = "4a867d8702eaa2d58333f3feb3238409";
    const movisListCount = 10;
    const moviesApi = `https://api.themoviedb.org/3/list/${movisListCount}?api_key=${key}`;
    try {
      const moviesData = await fetch(moviesApi);
      const data = await moviesData.json();
      setIsLoading(false);
      setMoviesData(data.items);
      // setSearchFilterdData(data.items);
    } catch {
      console.log("error Fetching");
    }
  };

  // useEffect(() => {
  //   getrequestToken();
  // }, []);

  // useEffect(() => {
  //   getAuthentication();
  // }, [requestToken]);

  useEffect(() => {
    fetchMoviesDatafromApi();
  }, []);

  return isLoading ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  ) : (
    <>
      
        <div>
          <h1>Movies List</h1>
          <MoviesPage moviesData={moviesData} />
        </div>
     
    </>
  );
};

export default HomePage;
