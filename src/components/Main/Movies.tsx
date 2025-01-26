import { MovieListPropsType, MoviePropsType, MovieType } from "../../types";

const average = (arr: number[]) =>
  arr?.reduce((acc, cur, _i, arr) => acc + cur / arr.length, 0);

import { memo } from "react";
import { Export } from "../";

export const MovieList = memo(function MovieList({
  movies,
  Component,
  onSelectMovie,
}: MovieListPropsType) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Component
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
});

export function Movie({ movie, onSelectMovie }: MoviePropsType) {
  return (
    <li key={movie.imdbID} onClick={() => onSelectMovie(movie?.imdbID)}>
      <img src={movie.Poster} alt={`${movie?.Title} poster`} />
      <h3>{movie?.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie?.Year}</span>
        </p>
      </div>
    </li>
  );
}

/**
 * A component that renders a summary of watched movies.
 * @param {MovieType[]} watched an array of watched movies
 * @returns {ReactNode} a JSX element
 */
export const WatchedSummary = memo(function WatchedSummary({
  watched,
}: {
  watched: MovieType[];
}) {
  const avgImdbRating = average(watched.map((movie) => movie?.ImdbRating || 0));
  const avgUserRating = average(watched.map((movie) => movie?.UserRating || 0));
  const avgRuntime = average(watched.map((movie) => movie?.Runtime || 0));

  return (
    <div className="summary">
      <h2>
        Movies you watched <Export watched={watched} />
      </h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
});

/**
 * A component that renders a single movie in the watched list.
 * @param {{ movie: MovieType }} props
 * @returns {ReactNode} a JSX element
 */
export function WatchedMovie({ movie, onSelectMovie }: MoviePropsType) {
  return (
    <li key={movie.imdbID}>
      <img src={movie?.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie?.ImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie?.UserRating?.toFixed(1)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie?.Runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onSelectMovie(movie?.imdbID)}
        >x</button>
      </div>
    </li>
  );
}
