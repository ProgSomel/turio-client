import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const loc = useLocation();
  console.log(loc);
  useEffect(()=> {
    if(loc.pathname === "/") {
        document.title = `Home`
    }else {
        document.title = `${loc.pathname.replace('/', '')}`
    }

    if(loc.state) {
        document.title = loc.state
    }
    
  }, [loc.pathname])

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-black text-red-400 " : "" }>
      <div
        className={
          darkMode
            ? "cursor-pointer grid place-items-center   absolute left-[100px] md:left-[300px] lg:left-[550px] top-11 -right-0"
            : "cursor-pointer grid place-items-center absolute left-[100px] md:left-[300px] lg:left-[550px] top-11 -right-0"
        }
      >
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            onChange={toggleTheme}
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
