import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";

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
        path: "/add-reviews",
        element: <h2>Add Reviews</h2>,
      },
      {
        path: "/my-reviews",
        element: <h2>My Reviews</h2>,
      },
      {
        path: "/update-reviews",
        element: <h2>Update Reviews</h2>,
      },
      {
        path: "/my-watchlist",
        element: <h2>My Watchlist</h2>,
      },
      {
        path: "/login",
        element: <h2>Login</h2>,
      },
      {
        path: "/register",
        element: <h2>Register</h2>,
      },
    ],
  },
]);
