import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../Components/LoadingSpinner";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://chill-gamer-server-rafee.vercel.app/reviews/user/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Sorry. Some error occurred", error);
      });
  }, [reviews]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server-rafee.vercel.app/reviews/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Review has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  };
  if (loading) return <LoadingSpinner />;
  return (
    <div className="w-11/12 md:w-8/12 mx-auto my-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Reviewed Games
      </h2>
      {reviews.length === 0 ? (
        <h2 className="text-xl font-semibold text-center text-amber-600">
          You've not reviewed any games!
        </h2>
      ) : (
        <ul className="list bg-base-100 rounded-box shadow-md">
          {reviews?.map((review) => (
            <li key={review._id} className="list-row">
              <div>
                <img
                  className="size-20 rounded-box object-cover"
                  src={review.gameCover}
                />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-medium hover:text-primary">
                  <Link to={`/reviews/${review._id}`}>{review.gameTitle}</Link>
                </h2>
                <div className="text-sm uppercase font-semibold opacity-60">
                  Published: {review.publishingYear}
                </div>
                <Rating
                  style={{ maxWidth: 120, maxHeight: 30 }}
                  value={parseInt(review.rating)}
                  readOnly
                  className="opacity-80 list-col-wrap"
                />
              </div>
              <Link
                to={`/update-review/${review._id}`}
                className="btn btn-lg btn-square btn-ghost"
                data-tooltip-content="Update"
                data-tooltip-id="review-tooltip"
              >
                <FaEdit />
              </Link>
              <button
                onClick={() => handleDelete(review._id)}
                className="btn btn-lg btn-square btn-ghost"
                data-tooltip-content="Delete"
                data-tooltip-id="review-tooltip"
              >
                <RiDeleteBinLine />
              </button>
            </li>
          ))}
        </ul>
      )}

      <Tooltip id="review-tooltip" />
    </div>
  );
};

export default MyReviews;
