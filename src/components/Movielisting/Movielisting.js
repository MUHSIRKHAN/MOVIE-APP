import React from "react";
import { useSelector } from "react-redux";
import { getAllmovies } from "../../features/Movies/MovieSlice";
import Moviecard from "../Moviecard/Moviecard";
import "./Movielisting.scss";

const Movielisting = () => {
  const movies = useSelector(getAllmovies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <Moviecard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default Movielisting;
