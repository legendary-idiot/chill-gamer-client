import { Rating } from "@smastrom/react-rating";
import { Link, useLoaderData } from "react-router-dom";

const AllReviews = () => {
  const reviews = useLoaderData();
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-center text-3xl font-bold">All Reviews</h2>
      <p className="text-center text-lg my-4 sm:w-[80%] mx-auto">
        Dive into our comprehensive collection of game reviews, where our
        vibrant community shares their thoughts and experiences. Discover
        in-depth analyses, ratings, and recommendations to help you find your
        next gaming obsession!
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="border border-gray-200 rounded-md overflow-hidden"
          >
            <img
              src={review.gameCover}
              alt={review.gameTitle}
              className="h-[300px] w-full object-cover"
            />
            <div className="p-4 space-y-4">
              <h3 className="text-2xl font-bold">{review.gameTitle}</h3>
              <Rating
                style={{ maxWidth: 150 }}
                value={parseInt(review.rating)}
                readOnly
              />
              <div className="flex items-center justify-between">
                <p className="text-lg">{review.publishingYear}</p>
                <p className="badge badge-warning">{review.genre}</p>
              </div>
              <Link
                to={`/reviews/${review._id}`}
                className="btn w-full text-white border-none bg-linear-to-r/decreasing from-indigo-500 to-teal-400 hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-teal-400"
              >
                Explore More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
