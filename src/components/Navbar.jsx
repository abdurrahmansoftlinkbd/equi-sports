import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "font-bold underline" : "hover:underline font-medium"}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `font-medium ${isActive ? "font-bold underline" : "hover:underline"}`
        }
        to="/allSportsEquipment"
      >
        All Sports Equipment
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `font-medium ${isActive ? "font-bold underline" : "hover:underline"}`
        }
        to="/addEquipment"
      >
        Add Equipment
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `font-medium ${isActive ? "font-bold underline" : "hover:underline"}`
        }
        to="/myEquipmentList"
      >
        My Equipment List
      </NavLink>
    </>
  );

  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="navbar container w-11/12 mx-auto py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
          >
            {links}
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </ul>
        </div>
        <Link to="/" className="text-3xl font-bold">
          EquiSports
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center gap-4 px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {user && user?.email ? (
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        ) : (
          ""
        )}
        {user && user?.email ? (
          <button
            onClick={logOut}
            className="btn hidden md:flex hover:bg-light hover:border-light hover:text-white"
          >
            Log out
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="btn hidden md:flex hover:bg-light hover:border-light hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn hidden md:flex hover:bg-light hover:border-light hover:text-white"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
