import { createContext, useState, useEffect } from "React";

const WatchListContext = createContext();

export default function WatchListContextWrapper({ children }) {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (movieObj) => {
    const updatedWatchlist = [...watchList, movieObj];
    setWatchList(updatedWatchlist);
    localStorage.setItem("movies", JSON.stringify(updatedWatchlist));
  };

  const removeFromWatchList = (movieObj) => {
    let filtredMovies = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchList(filtredMovies);
    localStorage.setItem("movies", JSON.stringify(filtredMovies));
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movies");
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  return (
    <WatchListContext.Provider
      value={{ addToWatchList, removeFromWatchList, watchList, setWatchList }}
    >
      {children}{" "}
    </WatchListContext.Provider>
  );
}
export { WatchListContext };
