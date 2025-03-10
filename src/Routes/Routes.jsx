import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "./../Pages/Login";
import AddReview from "../Pages/AddReview";
import Watchlist from "../Pages/Watchlist";
import DetailedReview from "../Pages/DetailedReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-review",
        element: <AddReview />,
      },
      {
        path: "/my-reviews",
        element: <h2>My Reviews</h2>,
      },
      {
        path: "/update-review",
        element: <h2>Update Reviews</h2>,
      },
      {
        path: "/my-watchlist",
        element: <Watchlist />,
      },
      {
        path: "/reviews/:id",
        element: <DetailedReview />,
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-rafee.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <h2>Register</h2>,
      },
    ],
  },
]);
