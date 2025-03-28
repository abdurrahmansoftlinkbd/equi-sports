import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { IoFootballOutline } from "react-icons/io5";

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
          `${isActive ? "font-bold underline" : "hover:underline font-medium"}`
        }
        to="/allSportsEquipment"
      >
        All Sports Equipment
      </NavLink>
    </>
  );

  const { user, logOut } = useContext(AuthContext);

  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  // );

  // const handleToggle = (e) => {
  //   if (e.target.checked) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", localTheme);
  // }, [theme]);

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

            {user && user?.email ? (
              <>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "font-bold underline"
                        : "hover:underline font-medium"
                    }`
                  }
                  to="/addEquipment"
                >
                  Add Equipment
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "font-bold underline"
                        : "hover:underline font-medium"
                    }`
                  }
                  to="/myEquipmentList"
                >
                  My Equipment List
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "font-bold underline"
                        : "hover:underline font-medium"
                    }`
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
                <Link onClick={logOut}>Log out</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="text-3xl font-bold">
          <div className="flex items-center gap-1">
            <IoFootballOutline className="text-4xl" />
            <h1>EquiSports</h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center lg:gap-2 xl:gap-6 px-1">
          {links}
          {user?.email && (
            <>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-bold underline"
                      : "hover:underline font-medium"
                  }`
                }
                to="/addEquipment"
              >
                Add Equipment
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-bold underline"
                      : "hover:underline font-medium"
                  }`
                }
                to="/myEquipmentList"
              >
                My Equipment List
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-bold underline"
                      : "hover:underline font-medium"
                  }`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {/* <label className="hidden md:inline-grid swap swap-rotate">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
          />
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label> */}
        {user && user?.email ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-14 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  title={user?.displayName}
                  src={user?.photoURL}
                  className="w-full"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-zinc-950"
            >
              <li>
                <a className="justify-between">{user?.displayName}</a>
              </li>
            </ul>
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
