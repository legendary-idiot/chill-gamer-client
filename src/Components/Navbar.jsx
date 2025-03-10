import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/" className="font-medium text-lg">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-reviews" className="font-medium text-lg">
          All Reviews
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/add-review" className="font-medium text-lg">
            Add Review
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/my-reviews" className="font-medium text-lg">
            My Reviews
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/my-watchlist" className="font-medium text-lg">
            Game Watchlist
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar w-full sm:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden px-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-accent">
          Chill Gamer
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <img
                src={user?.photoURL}
                alt="User Image"
                className="size-10 object-cover border rounded-full border-gray-400"
              />
              <button
                onClick={() =>
                  logOutUser()
                    .then(() => toast.success("Logged Out Successfully!"))
                    .catch((error) =>
                      toast.error("Sorry, something went wrong!")
                    )
                }
                className="btn"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <FaUserCircle className="size-10" />
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="hidden sm:btn">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
