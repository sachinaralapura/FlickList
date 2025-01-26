import { useState, useEffect } from "react";
import Loading from "../Loading";
import { MovieDetailsProps, MovieType } from "../../types";
import StarRating from "../StarRating/StarRating";
const API_KEY = import.meta.env.VITE_API_KEY;

export default function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}: MovieDetailsProps) {
  const [movie, setMovie] = useState<MovieType>();
  const [loading, setLoading] = useState<boolean>(true);
  const [userRating, setUserRating] = useState<number>(1);

  const isWatched = watched.includes(selectedId);
  const handleUserRating = (rating: number) => setUserRating(rating);

  const handleAddWatched = () => {
    onAddWatched({ ...movie, UserRating: userRating, imdbID: selectedId });
    onCloseMovie();
  };

  const {
    Actors: actors,
    Director: director,
    Genre: genre,
    ImdbRating: imdbRating,
    Plot: plot,
    Poster: poster,
    Released: released,
    Runtime: runtime,
    Title: title,
  } = movie || {};

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const res: Response = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}&plot=full`
        );
        if (!res.ok) throw new Error("Movie not found");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovie({
          Actors: data?.Actors ?? "",
          Director: data?.Director ?? "",
          Genre: data?.Genre ?? "",
          Language: data?.Language ?? "",
          Plot: data?.Plot ?? "",
          Poster: data?.Poster ?? "",
          Released: data?.Released ?? "",
          Title: data?.Title ?? "",
          Type: data?.Type ?? "",
          Year: data?.Year ?? "",
          imdbID: data?.imdbID ?? "",
          ImdbRating: Number.parseFloat(data?.imdbRating ?? "0"),
          Runtime: Number.parseInt(data?.Runtime ?? "0", 10),
        });
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [selectedId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="details">
          <header>
            <button className="btn-back" onClick={() => onCloseMovie()}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <h6>
                {released} &bull; {runtime}
                <p>{genre}</p>
                <p>
                  <span>🌟</span>
                  {imdbRating}
                </p>
              </h6>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating
                maxRating={10}
                size="24"
                defaultRating={1}
                onRate={handleUserRating}
              />
              <button className="btn-add" onClick={handleAddWatched}>
                {isWatched ? "Change Rating" : "Add to List"}
              </button>
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </div>
      )}
    </>
  );
}
