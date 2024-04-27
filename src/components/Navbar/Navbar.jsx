import { Link, NavLink } from "react-router-dom";

import homeLogo from "../../../src/assets/logo/home.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";
import toast from "react-hot-toast";
import { FaArrowRightToBracket } from "react-icons/fa6";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li><NavLink className="font-bold" to="/"
       style={({ isActive }) => {
        return {
        //   fontWeight: isActive ? "bold" : "",
        //   color: isActive ? "red" : "black",
        backgroundColor: isActive ? "green" : ""
         
        };
      }}
      >Home</NavLink></li>
      <li><NavLink className="font-bold" to="/allTouristsSpot"
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


  const handleLogOut = () => {
    logOut()
      .then(() => {
        swal("Successfully logged Out!", "success");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-2 mt-5">
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

            {
                user ? 
                <div className="navbar-end w-full mt-5  flex  justify-center ">
                  {/*! Profile  */}
                  <div className="">
                    <div className="dropdown dropdown-end  ">
                      <div className="tooltip " data-tip={user?.displayName}>
                        <img
                          className="w-10 rounded-full"
                          alt="profile"
                          src={user?.photoURL}
                        />
                      </div>
                    </div>
                  </div>
                  <Link
                    onClick={handleLogOut}
                    className="btn btn-outline btn-error flex"
                  >
                    <FaArrowRightToBracket />
                    Log Out
                  </Link>
                </div>
                 : 
                <div className="navbar-end mt-3 gap-2 flex flex-col md:hidden w-full">
         <Link className="w-full" to="login">
         <button className="btn w-full bg-green-700 text-white font-bold ">Login</button>
         </Link>
          <Link className="w-full" to="/regsiter"> 
          <button className="btn w-full bg-green-700 text-white font-bold">Register</button>
          </Link>
        </div>
            }
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
        {
            user ?
            <div className="navbar-end hidden md:flex">
            {/*! Profile  */}
            <div>
              <div className="dropdown dropdown-end">
                <div className="tooltip" data-tip={user?.displayName}>
                  <img
                    className="w-10 rounded-full"
                    alt="profile"
                    src={user?.photoURL}
                  />
                </div>
              </div>
            </div>
            <Link
              onClick={handleLogOut}
              className="btn  ml-4 btn-outline btn-error"
            >
              <FaArrowRightToBracket />
              Log Out
            </Link>
          </div>
            : 
            <div className="navbar-end  gap-5 hidden md:flex">
          <Link to="/login">
          <button className="btn bg-green-700 text-white font-bold">Login</button>
          </Link>
         <Link to="/register">
         <button className="btn bg-green-700 text-white font-bold">Register</button>
         </Link>
        </div>
        }
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
