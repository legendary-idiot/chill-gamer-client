import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const AddReview = () => {
  const formHandler = (e) => {
    e.preventDefault();
    const gameCover = e.target.gameCover.value;
    const gameTitle = e.target.gameTitle.value;
    const genre = e.target.genre.value;
    const publishingYear = e.target.publishingYear.value;
    const rating = e.target.rating.value;
    const review = e.target.review.value;
    const email = e.target.email.value;
    const username = e.target.username.value;
    const reviewData = {
      gameCover,
      gameTitle,
      genre,
      publishingYear,
      rating,
      review,
      email,
      username,
    };
    fetch("https://chill-gamer-server-rafee.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="my-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">Add Review!</h2>
        <p className="text-base w-[90%] sm:w-[70%] mx-auto text-center">
          Creating your account is the first step to enjoying incredible savings
          and a seamless shopping experience with all your favorite brands.
          Don&apos;t miss out—register today and start saving big!
        </p>
      </div>

      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow border border-indigo-200 my-8 mx-auto">
        <form className="card-body space-y-3" onSubmit={formHandler}>
          <div className="form-control space-y-2">
            <label className="label font-medium text-black">
              <span className="label-text">Game Cover URL</span>
            </label>
            <input
              type="text"
              name="gameCover"
              placeholder="Enter Game Cover Image URL"
              className="input input-bordered w-full focus-within:outline-none"
              required
            />
          </div>
          <div className="form-control space-y-2">
            <label className="label font-medium text-black">
              <span className="label-text">Game Title</span>
            </label>
            <input
              type="text"
              name="gameTitle"
              placeholder="Enter Game Title"
              className="input input-bordered w-full focus-within:outline-none"
              required
            />
          </div>
          <div className="form-control space-y-2">
            <label className="label font-medium text-black">
              <span className="label-text">Publishing Year</span>
            </label>
            <input
              type="text"
              name="publishingYear"
              placeholder="Publishing Year"
              className="input input-bordered w-full focus-within:outline-none"
              required
            />
          </div>
          <div className="form-control space-y-2">
            <label className="label font-medium text-black">
              <span className="label-text">Genre</span>
            </label>
            <select
              defaultValue="Action"
              name="genre"
              className="select focus-within:outline-none w-full"
            >
              <option>Action</option>
              <option>Adventure</option>
              <option>RPG</option>
              <option>Strategy</option>
              <option>Racing</option>
            </select>
          </div>
          <div className="form-control space-y-2">
            <label className="label font-medium text-black">
              <span className="label-text">Rating</span>
            </label>
            <select
              defaultValue="1 Star"
              name="rating"
              className="select focus-within:outline-none w-full"
            >
              <option>1 Star</option>
              <option>2 Stars</option>
              <option>3 Stars</option>
              <option>4 Stars</option>
              <option>5 Stars</option>
            </select>
          </div>
          <div className="form-control space-y-2">
            <label className="label font-medium text-black">
              <span className="label-text">Review Description</span>
            </label>
            <textarea
              name="review"
              className="textarea w-full focus-within:outline-none"
              placeholder="Write Your Review Here"
            ></textarea>
          </div>
          <div className="form-control space-y-2">
            <label className="label font-medium text-black">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full focus-within:outline-none"
              required
            />
          </div>
          <div className="form-control space-y-2">
            <label className="label font-medium text-black">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input input-bordered w-full focus-within:outline-none"
              required
            />
          </div>
          <div className="form-control">
            <button className="btn btn-primary w-full">Submit Review</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
