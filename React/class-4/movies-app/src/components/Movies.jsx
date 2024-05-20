import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
function Movies() {
  const [watchList, setWatchList] = useState([]);
  //     this state variable will be used to represent pagination
  const [pageNo, setPageNo] = useState(1);

  // watchList handlers

  const addToWatchList = (movieObj) => {
    const updatedWatchlist = [...watchList, movieObj];
    setWatchList(updatedWatchlist);
    localStorage.setItem("movies", JSON.stringify(updatedWatchlist));
  };
  console.log("updating watchlist", watchList);

  const removeFromWatchList = (movieObj) => {
    let filtredMovies = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchList(filtredMovies);
    localStorage.setItem("movies", JSON.stringify(filtredMovies));
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  // go back handler
  const handlePrevious = () => {
    if (pageNo == 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };
  //     we will be using this static list of movies then we will replace it with actual  data fetching logic
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    console.log("use effect fetched data");
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=60d18d673bedf3d701f305ef746f6eef&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [pageNo]);

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movies");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);
  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8 ">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              movieObj={movieObj}
              addToWatchList={addToWatchList}
              watchList={watchList}
              removeFromWatchList={removeFromWatchList}
            />
          );
        })}
      </div>
      <Pagination
        nextPageFn={handleNext}
        previosuPageFn={handlePrevious}
        pageNumber={pageNo}
      />
    </div>
  );
}

export default Movies;
