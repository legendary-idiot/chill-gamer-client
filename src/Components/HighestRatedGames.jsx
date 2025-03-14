import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HighestRatedGames = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("https://chill-gamer-server-rafee.vercel.app/reviews")
      .then((response) => response.json())
      .then((data) => {
        const sortByHighRating = [...data].sort(
          (a, b) => parseInt(b.rating) - parseInt(a.rating)
        );
        setGames(sortByHighRating);
      });
  }, []);

  return (
    <div className="w-11/12 mx-auto my-10 animate__animated animate__fadeInRightBig animate__delay-4s">
      <h2 className="text-center text-3xl font-bold">Highest Rated Games</h2>
      <p className="text-center text-lg my-4 sm:w-[80%] mx-auto">
        Explore the pinnacle of gaming excellence with our top-rated titles.
        These games have captivated audiences and critics alike—discover why
        they're the best!
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games?.slice(0, 6)?.map((game) => (
          <div
            key={game._id}
            className="max-w-[800px] h-[450px] rounded-md relative"
            style={{
              backgroundImage: `url(${game.gameCover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              backgroundBlendMode: "overlay",
            }}
          >
            <Rating
              style={{ maxWidth: 150 }}
              value={parseInt(game.rating)}
              readOnly
              className="absolute left-3 top-3 opacity-80"
            />
            <h3 className="text-white text-2xl font-bold absolute bottom-24 left-3">
              {game.gameTitle}
            </h3>
            <p className="text-white text-lg absolute bottom-16 left-3">
              {game.publishingYear}
            </p>
            <Link
              to={`/reviews/${game._id}`}
              className="absolute bottom-3 right-2 btn text-white border-none bg-linear-to-r/decreasing from-indigo-500 to-teal-400 hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-teal-400"
            >
              Explore More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighestRatedGames;
