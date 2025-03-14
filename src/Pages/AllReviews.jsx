import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllReviews = () => {
  const allReviews = useLoaderData();
  const [reviews, setReviews] = useState(allReviews);
  const handleFilter = (e) => {
    e.preventDefault();
    const selected = e.target.value;
    if (selected === "Show All") {
      setReviews(allReviews);
    } else {
      const filtered = [...allReviews].filter(
        (review) => review.genre === selected
      );
      setReviews(filtered);
    }
  };
  const handleSort = (e) => {
    e.preventDefault();
    const selected = e.target.value;
    let sortedReviews = reviews;

    if (selected === "low-year") {
      sortedReviews = [...reviews].sort(
        (a, b) => a.publishingYear - b.publishingYear
      );
    } else if (selected === "high-year") {
      sortedReviews = [...reviews].sort(
        (a, b) => b.publishingYear - a.publishingYear
      );
    } else if (selected === "high-rating") {
      sortedReviews = [...reviews].sort(
        (a, b) => parseInt(b.rating) - parseInt(a.rating)
      );
    } else if (selected === "low-rating") {
      sortedReviews = [...reviews].sort(
        (a, b) => parseInt(a.rating) - parseInt(b.rating)
      );
    } else {
      sortedReviews = allReviews;
    }
    setReviews(sortedReviews);
  };
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-center text-3xl font-bold">All Reviews</h2>
      <p className="text-center text-lg my-4 sm:w-[80%] mx-auto">
        Dive into our comprehensive collection of game reviews, where our
        vibrant community shares their thoughts and experiences. Discover
        in-depth analyses, ratings, and recommendations to help you find your
        next gaming obsession!
      </p>
      {/* Filter and Sort Functionality */}
      <div className="my-6 flex justify-end flex-wrap gap-4">
        <div className="form-control flex items-center gap-2">
          <label className="label text-base-content">
            <span className="label-text">Filter:</span>
          </label>
          <select
            onChange={handleFilter}
            defaultValue="All"
            name="filter"
            className="select focus-within:outline-none w-full"
          >
            <option>Show All</option>
            <option>Action</option>
            <option>Adventure</option>
            <option>RPG</option>
            <option>Strategy</option>
            <option>Racing</option>
          </select>
        </div>

        <div className="form-control flex items-center gap-2">
          <label className="label text-base-content">
            <span className="label-text">Sort:</span>
          </label>
          <select
            onChange={handleSort}
            defaultValue="Default"
            name="sort"
            className="select focus-within:outline-none w-full"
          >
            <option>Default</option>
            <option value="low-year">Year (Low &gt; High)</option>
            <option value="high-year">Year (High &gt; Low)</option>
            <option value="low-rating">Rating (Low &gt; High)</option>
            <option value="high-rating">Rating (High &gt; Low)</option>
          </select>
        </div>
      </div>
      {reviews.length === 0 ? (
        <h2 className="text-2xl font-bold text-center">
          Sorry! No reviews available.
        </h2>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews?.map((review) => (
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
      )}
    </div>
  );
};

export default AllReviews;
