import useNowPlayingMoives from "../utils/hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

  
useNowPlayingMoives();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      <div>
       
      </div>
    </div>
  );
};

export default Browse;
