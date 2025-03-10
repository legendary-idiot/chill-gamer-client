import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const user = "ABCD";
  const links = (
    <>
      <li>
        <NavLink to="/" className="font-medium text-lg">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/brands" className="font-medium text-lg">
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
      <li>
        <NavLink to="/about-dev" className="font-medium text-lg">
          Update Review
        </NavLink>
      </li>
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
                onClick={() => console.log("Log Out Completed")}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
