import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "./../Pages/Login";
import AddReview from "../Pages/AddReview";
import Watchlist from "../Pages/Watchlist";
import DetailedReview from "../Pages/DetailedReview";
import Register from "./../Pages/Register";
import Private from "../PrivateRoutes/Private";
import AllReviews from "../Pages/AllReviews";

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
        path: "/all-reviews",
        element: <AllReviews />,
        loader: () =>
          fetch("https://chill-gamer-server-rafee.vercel.app/reviews"),
      },
      {
        path: "/add-review",
        element: (
          <Private>
            <AddReview />
          </Private>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <Private>
            <h2>My Reviews</h2>
          </Private>
        ),
      },
      {
        path: "/update-review",
        element: (
          <Private>
            <h2>Update Reviews</h2>
          </Private>
        ),
      },
      {
        path: "/my-watchlist",
        element: (
          <Private>
            <Watchlist />
          </Private>
        ),
      },
      {
        path: "/reviews/:id",
        element: (
          <Private>
            <DetailedReview />
          </Private>
        ),
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
        element: <Register />,
      },
    ],
  },
]);
