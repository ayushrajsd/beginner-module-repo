import "./App.css";
import Home from "./components/Home";
import WatchList from "./components/WatchList";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import WatchListContextWrapper from "./context/WatchListContext";
import Counter from "./components/Counter";
import TodoRedux from "./components/Todo";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/"
          element={
            <>
              <TodoRedux />
              <Counter />
            </>
          }
        /> */}
        <Route
          path="/watchlist"
          element={
            <WatchListContextWrapper>
              <WatchList />
            </WatchListContextWrapper>
          }
        />
      </Routes>
    </>
  );
}

export default App;
