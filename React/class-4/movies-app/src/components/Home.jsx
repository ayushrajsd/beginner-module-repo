import Banner from "./Banner";
import Movies from "./Movies";
import WatchListContextWrapper from "../context/WatchListContext";

function Home() {
  return (
    <div>
      Home
      <Banner />
      <WatchListContextWrapper>
        <Movies />
      </WatchListContextWrapper>
    </div>
  );
}

export default Home;
