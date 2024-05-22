import "./App.css";
import Home from "./components/Home";
import WatchList from "./components/WatchList";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import WatchListContextWrapper from "./context/WatchListContext";

function App() {
  return (
    <>
      <NavBar />
      <WatchListContextWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </WatchListContextWrapper>
    </>
  );
}

export default App;
