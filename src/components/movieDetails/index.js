import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";


const posterImageUrl = "https://www.themoviedb.org/t/p/w300_and_h450_face";

const MovieDetails = () => {
  const [movieDetailsData, setMovieDetails] = useState([]);
  const [bgUrl, setBgUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  // getting movie data with id and params
  const geetingMovieDataFromApi = async () => {
    try {
      const movieData = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4a867d8702eaa2d58333f3feb3238409`
      );
      const data = await movieData.json();
      setBgUrl(
        `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}`
      );
      setIsLoading(false);
      setMovieDetails(data);
    } catch {}
  };

  useEffect(() => {
    geetingMovieDataFromApi();
  }, []);

  return isLoading ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  ) : (
    <div>
      <div className="flex flex-col md:flex-row">
        <div>
          <img
            className="w-screen md:w-auto"
            alt={movieDetailsData.title}
            src={posterImageUrl + movieDetailsData.poster_path}
          />
        </div>
        <div className="p-5">
          <h1 className="text-3xl font-extrabold">{movieDetailsData.title}</h1>
          <span className="text-sm ">
            {movieDetailsData.release_date}({movieDetailsData.original_language}
            )
          </span>
          <span className="text-sm px-3">|</span>
          <span className="text-sm">{movieDetailsData.runtime} min</span>{" "}
          <span className="text-sm px-3">|</span> Votes :{" "}
          {movieDetailsData.vote_average} <span></span>
          <h1 className="text-xl">{movieDetailsData.tagline}</h1>
          <hr className="my-5" />
          <p className="text-2xl">Overview</p>y
          <h1 className="w-full">{movieDetailsData.overview}</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
