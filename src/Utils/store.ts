import { MovieType } from "../types/common";

/**
 * Returns the watched movies stored in local storage.
 * If there are no movies stored, an empty array is returned.
 * @returns {MovieType[]} an array of watched movies
 */
function localWatched(): MovieType[] {
  const storedWatched = localStorage.getItem("watched");
  return storedWatched ? JSON.parse(storedWatched) : [];
}
export { localWatched };
