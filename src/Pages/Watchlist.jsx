import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import LoadingSpinner from "./../Components/LoadingSpinner";

const Watchlist = () => {
  const { user } = useContext(AuthContext);
  const [watchList, setWatchList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://chill-gamer-server-rafee.vercel.app/watch-list/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWatchList(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (loading) return <LoadingSpinner />;
  return (
    <div className="max-w-11/12 sm:w-8/12 mx-auto my-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Your Watch List
      </h2>
      {watchList.length === 0 ? (
        <h2 className="text-xl font-semibold my-4 text-center text-amber-600">
          No games in you list!
        </h2>
      ) : (
        <ul className="list bg-base-100 rounded-box shadow-md">
          {watchList?.map((item) => (
            <li key={item._id} className="list-row">
              <div>
                <img
                  className="size-20 object-cover rounded-box"
                  src={item?.review?.gameCover}
                />
              </div>
              <div className="space-y-1">
                <h2 className="sm:text-lg font-bold">
                  {item.review.gameTitle}
                </h2>
                <p>
                  Released: {item.review.publishingYear} | Genre:{" "}
                  {item.review.genre}
                </p>
                <Rating
                  style={{ maxWidth: 120, maxHeight: 20 }}
                  value={parseInt(item.review.rating)}
                  readOnly
                  className="opacity-70"
                />
              </div>

              <Link
                to={`/reviews/${item.review._id}`}
                className="btn btn-ghost btn-sm"
              >
                details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Watchlist;
``;
