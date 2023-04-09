import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Pagenation from "../pagenation";

const posterImageUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";

const MoviesPage = (props) => {
  const { moviesData, isClicked } = props;
  console.log(isClicked);
  const [pageMoviesData, setPageMoviesData] = useState([]);
  const [isFav, setIsFav] = useState(false);
  const [staticPagenumber, setStaticPagenumber] = useState(1);

  const pageHandler = (pageNumber) => {
    setStaticPagenumber(pageNumber);
  };

  useEffect(() => {
    setPageMoviesData(
      moviesData.slice(staticPagenumber * 12 - 12, staticPagenumber * 12)
    );
  }, [staticPagenumber, moviesData]);

  return (
    <div className="px-[20px] md:px-[40px] lg:px-[60px]">
      <div>
        {isClicked ? (
          <div className="grid grid-cols-2 gap-3 gap-y-4 content-between md:grid-cols-4 lg:grid-cols-6">
            {moviesData.map((eachMovie) => (
              <div className="relative border rounded rounded-md h-full">
                <img
                  alt={eachMovie.title}
                  className="w-full max-w-none "
                  src={posterImageUrl + eachMovie.poster_path}
                />
                {isFav ? (
                  <AiFillHeart
                    onClick={() => setIsFav(!isFav)}
                    className="cursor-pointer absolute top-[12px] right-[12px] text-gray-950 bg-gray-50 p-[3px] text-[19px] rounded-full"
                  />
                ) : (
                  <AiFillHeart
                    onClick={() => setIsFav(!isFav)}
                    className="cursor-pointer absolute top-[12px] right-[12px] text-red-600 bg-gray-50 p-[3px] text-[19px] rounded-full"
                  />
                )}

                <div className="p-2">
                  <Link to={`/movie/${eachMovie.id}`}>
                    <h2 className="cursor-pointer font-semibold">
                      {eachMovie.title}
                    </h2>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 gap-y-4 content-between md:grid-cols-4 lg:grid-cols-6">
            {pageMoviesData.map((eachMovie) => (
              <div className="relative border rounded rounded-md h-full">
                <img
                  alt={eachMovie.title}
                  className="w-full max-w-none "
                  src={posterImageUrl + eachMovie.poster_path}
                />
                {isFav ? (
                  <AiFillHeart
                    onClick={() => setIsFav(!isFav)}
                    className="cursor-pointer absolute top-[12px] right-[12px] text-gray-950 bg-gray-50 p-[3px] text-[19px] rounded-full"
                  />
                ) : (
                  <AiFillHeart
                    onClick={() => setIsFav(!isFav)}
                    className="cursor-pointer absolute top-[12px] right-[12px] text-red-600 bg-gray-50 p-[3px] text-[19px] rounded-full"
                  />
                )}

                <div className="p-2">
                  <Link to={`/movie/${eachMovie.id}`}>
                    <h2 className="cursor-pointer font-semibold">
                      {eachMovie.title}
                    </h2>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {isClicked ? null : (
        <Pagenation pageHandler={pageHandler} moviesData={moviesData} />
      )}
    </div>
  );
};

export default MoviesPage;
