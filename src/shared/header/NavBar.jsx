import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import ThemeToggle from "../../components/themeToggle/ThemeToggle";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  const activeLinkClass = "text-primary font-extrabold"; // #4A90E2 in light mode, #60A5FA in dark
  const normalLinkClass = "hover:text-secondary transition-colors duration-300"; // #50E3C2 / #34D399

  return (
    <div className="navbar fixed top-0 z-50 bg-base-100 shadow-md">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center gap-4">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLinkClass : normalLinkClass
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allArticles"
                  className={({ isActive }) =>
                    isActive ? activeLinkClass : normalLinkClass
                  }
                >
                  All Articles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    isActive ? activeLinkClass : normalLinkClass
                  }
                >
                  About Us
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? activeLinkClass : normalLinkClass
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <h1 className="flex items-center font-bold md:text-3xl select-none">
            <img
              className="w-20 mr-2"
              src="logo1.png"
              alt="Knowledge Hunt Logo"
              loading="lazy"
            />
            Knowledge
            <span className="text-primary hidden md:flex">Hunt</span>
          </h1>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLinkClass : normalLinkClass
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allArticles"
                className={({ isActive }) =>
                  isActive ? activeLinkClass : normalLinkClass
                }
              >
                All Articles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive ? activeLinkClass : normalLinkClass
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeLinkClass : normalLinkClass
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  isActive ? activeLinkClass : normalLinkClass
                }
              >
                Support
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? activeLinkClass : normalLinkClass
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center space-x-3">
          <ThemeToggle />

          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
                title={user.displayName || "User"}
              >
                <div className="w-10 rounded-full overflow-hidden">
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-lg space-y-2 z-50"
              >
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn bg-primary text-white hover:bg-primary/90 rounded-full w-full"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="btn bg-primary text-white rounded-full px-6"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
