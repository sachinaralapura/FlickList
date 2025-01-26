export type MovieType = {
  imdbID: string;
  Title?: string;
  Year?: string;
  Type?: string;
  Language?: string;
  Poster?: string;
  Plot?: string;
  Released?: string;
  Actors?: string;
  Director?: string;
  Genre?: string;
  ImdbRating?: number;
  UserRating?: number;
  Runtime?: number;
};

export type MoviePropsType = {
  movie: MovieType;
  onSelectMovie: (id: string) => void;
};

export type MovieListPropsType = {
  movies: MovieType[] | undefined;
  Component: React.ComponentType<MoviePropsType>;
  onSelectMovie: (id: MovieType["imdbID"]) => void;
};

export type MovieDetailsProps = {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: (movie: MovieType) => void;
  watched: string[];
};
