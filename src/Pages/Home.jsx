import HeroBanner from "../Components/HeroBanner";
import News from "../Components/News";
import Newsletter from "../Components/Newsletter";
import HighestRatedGames from "../Components/HighestRatedGames";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <HighestRatedGames />
      <News />
      <Newsletter />
    </div>
  );
};

export default Home;
