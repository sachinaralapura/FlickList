import "./index.css";
import { useCallback, useEffect, useState } from "react";
import {
  NavBar,
  Box,
  Main,
  MovieList,
  Movie,
  WatchedMovie,
  WatchedSummary,
  Loading,
  MovieDetails,
  Title,
  Search,
} from "./components";
import { localWatched } from "./Utils";
import { MovieType } from "./types";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [watched, setWatched] = useState<MovieType[]>(localWatched());
  const [movieName, setMovieName] = useState<string>("matrix");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string>("");

  // Fetch movies based on the current movieName
  useEffect(() => {
    const controller: AbortController = new AbortController();

    setLoading(true);
    (async function fetchMovies() {
      try {
        const res = await fetch(`${API_URL}?apikey=${API_KEY}&s=${movieName}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
      } catch (e: any) {
        if (e.name === "AbortError") return;
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [movieName]);

  // Save watched movies to local storage
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  // ------------- handler functions -------------
  const handleMovieSelect = useCallback(
    (id: MovieType["imdbID"]) => {
      setSelectedId((p) => (p === id ? null : id));
    },
    [setSelectedId]
  );

  const handleAddWatched = (movie: MovieType) => {
    setWatched((w) => {
      let temp = w.filter((m) => m.imdbID !== movie.imdbID);
      return [...temp, movie];
    });
  };

  const handleRemoveWatched = useCallback(
    (id: MovieType["imdbID"]) => {
      setWatched((w) => w.filter((m) => m.imdbID !== id));
    },
    [setWatched]
  );

  function handleSearchMovie(name: string) {
    setMovieName(name);
  }

  return (
    <>
      <NavBar>
        <Title />
        <Search onSearch={handleSearchMovie} />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </NavBar>
      <Main>
        <Box>
          {loading && <Loading />}
          {!loading && !error && (
            <MovieList
              movies={movies}
              Component={Movie}
              onSelectMovie={handleMovieSelect}
            />
          )}
          {error && <div className="error">{error}</div>}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={() => setSelectedId(null)}
              onAddWatched={handleAddWatched}
              watched={watched.map((movie) => movie.imdbID)}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <MovieList
                movies={watched}
                Component={WatchedMovie}
                onSelectMovie={handleRemoveWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;
