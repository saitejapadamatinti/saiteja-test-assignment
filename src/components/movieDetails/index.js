import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const posterImageUrl = "https://www.themoviedb.org/t/p/original";

const MovieDetails = () => {
  const [movieDetailsData, setMovieDetails] = useState([]);
  const [similarData, setSimilarData] = useState([]);
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

  const gettingSimilarMvoies = async () => {
    const responsee = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=4a867d8702eaa2d58333f3feb3238409&page=1`
    );
    const data = await responsee.json();
    setSimilarData(data.results);
  };

  useEffect(() => {
    geetingMovieDataFromApi();
    gettingSimilarMvoies();
  }, [id]);

  return isLoading ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  ) : (
    <div className="px-[20px] md:px-[40px] lg:px-[60px] md:py-12">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[300px] md:h-[400px] ">
          <img
            className="w-screen md:w-[300px] md:h-[400px] object-cover md:max-w-none"
            alt={movieDetailsData.title}
            src={posterImageUrl + movieDetailsData.poster_path}
          />
        </div>
        <div className="md:p-5">
          <h1 className="text-3xl font-extrabold">{movieDetailsData.title}</h1>
          <span className="text-sm ">
            {movieDetailsData.release_date}({movieDetailsData.original_language}
            )
          </span>
          <span className="text-sm px-3">|</span>
          <span className="text-sm">{movieDetailsData.runtime} min</span>{" "}
          <span className="text-sm px-3">|</span> Votes :
          {movieDetailsData.vote_average} <span></span>
          <h1 className="text-xl">{movieDetailsData.tagline}</h1>
          <hr className="my-5" />
          <p className="text-2xl">Overview</p>
          <h1 className="w-full">{movieDetailsData.overview}</h1>
          <p></p>
        </div>
      </div>
      <hr className="my-8" />
      <div className=" mt-2 ">
        <p className="text-xl font-bold pb-3">Similar Movies</p>
        <div className="flex overflow-auto gap-2">
        {similarData.map((eachItem) => (
          <Link to={`/movie/${eachItem.id}`} className="">
            <div className="hover:shadow-[0_1px_4px_rgba(0,0,0,0.16)] border rounded-md hover:text-sky-600">
              <img
                className="w-[140px] max-w-none"
                src={posterImageUrl + eachItem.poster_path}
              />
              <p className="truncate p-2">{eachItem.title.slice(0, 12)}...</p>
            </div>
          </Link>
        ))}</div>
      </div>
    </div>
  );
};

export default MovieDetails;
