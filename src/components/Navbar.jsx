import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import UseAuth from "../utils/UseAuth";
const Navbar = () => {
  const { user, handleLogOut } = UseAuth();
  const links = [
    { name: "home", path: "/" },
    { name: "brands", path: "brands" },
    { name: "my profile", path: "myProfile" },
    { name: "about dev", path: "aboutDev" },
  ];
  return (
    <div>
      <div className=" top-0 left-0 right-0 navbar px-5 bg-[#F55c22] text-white shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#FF8500] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links.map((navItem) => (
                <NavLink
                  className={"hover:scale-110 transition-all"}
                  to={navItem.path}
                  key={navItem.name}
                >
                  {navItem.name}
                </NavLink>
              ))}
            </ul>
          </div>
          <h1 className="text-2xl font-bold">discount PRO</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" capitalize flex items-center gap-5">
            {links.map((navItem) => (
              <NavLink
                className={"hover:scale-110 transition-all"}
                to={navItem.path}
                key={navItem.name}
              >
                {navItem.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>

              <button
                onClick={() => handleLogOut()}
                className="bg-white px-5 py-2 rounded-sm cursor-pointer text-black"
              >
                logout
              </button>
            </div>
          ) : (
            <Link to={"/register"}>
              <button className="bg-white px-5 py-2 rounded-sm hover:bg-transparent hover:border hover:border-white hover:text-white cursor-pointer transition-all text-black">
                Register
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
