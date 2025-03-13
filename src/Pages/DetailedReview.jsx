import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const DetailedReview = () => {
  const review = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleWatchList = () => {
    const data = { userEmail: user.email, review };
    fetch("https://chill-gamer-server-rafee.vercel.app/watch-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Added to Watch List!",
          icon: "success",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-11/12 mx-auto my-10 space-y-4">
      <img
        src={review.gameCover}
        alt={review.gameTitle}
        className="w-full max-h-[700px] object-fill rounded-md"
      />
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">{review.gameTitle}</h2>
        <p className="badge badge-info text-lg text-white">{review.genre}</p>
        <p className="font-bold">
          Released On:{" "}
          <span className="font-normal">{review.publishingYear}</span>
        </p>
        <p className="text-lg font-light text-justify">{review.review}</p>
        <div className="divider"></div>
        <div className="flex items-center gap-4">
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-12 rounded-full">
              <span className="text-3xl">{review.username[0]}</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="font-light">Reviewed By: {review.username}</p>
            <p className="font-light">{review.email}</p>
          </div>
        </div>
        <Rating
          style={{ maxWidth: 180 }}
          value={parseInt(review.rating)}
          readOnly
        />
        <button
          className="btn btn-lg text-white border-none bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-teal-400"
          onClick={handleWatchList}
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  );
};

export default DetailedReview;
