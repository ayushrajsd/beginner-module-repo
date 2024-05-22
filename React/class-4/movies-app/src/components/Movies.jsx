import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import { WatchListContext } from "../context/WatchListContext";

function Movies() {
const { watchList, addToWatchList, removeFromWatchList } = useContext(WatchListContext);
  //     this state variable will be used to represent pagination
  const [pageNo, setPageNo] = useState(1);

  // watchList handlers

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
