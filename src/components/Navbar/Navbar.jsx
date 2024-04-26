import { Link, NavLink } from "react-router-dom";

import homeLogo from "../../../src/assets/logo/home.svg";
const Navbar = () => {
  const navLinks = (
    <>
      <li><NavLink className="font-bold" to="/"
       style={({ isActive }) => {
        return {
        //   fontWeight: isActive ? "bold" : "",
        //   color: isActive ? "red" : "black",
        backgroundColor: isActive ? "green" : "black"
         
        };
      }}
      >Home</NavLink></li>
      <li><NavLink className="font-bold" to="allTouristsSpot"
      style={({ isActive }) => {
        return {
        //   fontWeight: isActive ? "bold" : "",
        //   color: isActive ? "red" : "black",
        backgroundColor: isActive ? "green" : ""
         
        };
      }}
      >All Tourists Spot</NavLink></li>
      <li><NavLink className="font-bold" to="/addTouristSpot"
      style={({ isActive }) => {
        return {
        //   fontWeight: isActive ? "bold" : "",
        //   color: isActive ? "red" : "black",
        backgroundColor: isActive ? "green" : ""
         
        };
      }}
      >Add Tourists Spot</NavLink></li>
      <li><NavLink className="font-bold" to="/myList"
      style={({ isActive }) => {
        return {
        //   fontWeight: isActive ? "bold" : "",
        //   color: isActive ? "red" : "black",
        backgroundColor: isActive ? "green" : ""
         
        };
      }}
      >My List</NavLink></li>
    </>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-2 ">
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {navLinks}

                <div className="navbar-end mt-3 gap-2 flex flex-col md:hidden w-full">
          <button className="btn bg-green-700 text-white font-bold ">Login</button>
          <button className="btn bg-green-700 text-white font-bold">Register</button>
        </div>
            </ul>

          
          </div>
         
          <Link to="/">
          <img className="cursor-pointer" src={homeLogo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end  gap-5 hidden md:flex">
          <button className="btn bg-green-700 text-white font-bold">Login</button>
          <button className="btn bg-green-700 text-white font-bold">Register</button>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
