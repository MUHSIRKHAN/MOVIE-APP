import React from "react";
import { useSelector } from "react-redux";
import { getAllmovies ,getAllShows} from "../../features/Movies/MovieSlice";
import Moviecard from "../Moviecard/Moviecard";
import "./Movielisting.scss";

const Movielisting = () => {
  const movies = useSelector(getAllmovies);  
  const shows = useSelector(getAllShows); //syncnorous action creator to async ac using middleware thunk
  let renderMovies,renderShows = "";
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
    renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => (
        <Moviecard key={index} data={movie} />
      ))
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default Movielisting;
