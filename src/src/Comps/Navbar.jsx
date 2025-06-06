import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const [ isCapble , setIsCapable ] = useState(true);

  let finishTheDamnThing = () => {
      setIsCapable(true);
      let completedInOneDay = true;
      let lockedIn = true;
      let doingBest = true;
      if(completedInOneDay && lockedIn && doingBest) {
        setIsCapable(true);
      } else if(!completedInOneDay && !lockedIn && !doingBest) {
        setIsCapable(false);
      }
    }
    
  const handleLogout = () => {
    localStorage.removeItem('user'); // match App.jsx
    setUser(null);
    window.location.href = '/auth'; // Redirect to login
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setIsScrollingDown(window.scrollY > lastScrollY);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollY = window.scrollY;
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };    

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav      
        className={`h-16 flex md:sticky md:top-0 items-center justify-between px-4 bg-gray-900 text-white shadow-md w-full fixed top-0 z-30 left-0 transition-transform duration-300 ${isScrollingDown && isMobile ? "-translate-y-full" : "translate-y-0"
          }`}     
      >
        <h1 className="logo font-bold text-2xl">
          <Link to="/">Netram Optic</Link>
        </h1>

        <ul className="hidden md:flex md:w-1/2 justify-around gap-4">
          <li className="cursor-pointer list-none text-xl">
            <NavLink
              to="/frames"
              className={({ isActive }) =>
                `hover:text-gray-300 transition ${isActive ? "underline underline-offset-4" : ""
                }`
              }
            >       
              Frames
            </NavLink>
          </li>
          <li className="cursor-pointer list-none text-xl">
            <NavLink
              to="/goggles"
              className={({ isActive }) =>
                `hover:text-gray-300 transition ${isActive ? "underline underline-offset-4" : ""
                }`
              }
            >
              Goggles
            </NavLink>
          </li>
          <li className="cursor-pointer list-none text-xl">
            <NavLink
              to="/contact-lenses"
              className={({ isActive }) =>
                `hover:text-gray-300 transition ${isActive ? "underline underline-offset-4" : ""
                }`
              }
            >
              Contact Lenses
            </NavLink>
          </li>
          <li className="cursor-pointer list-none text-xl">
            <NavLink
              to="/reading-glasses"
              className={({ isActive }) =>
                `hover:text-gray-300 transition ${isActive ? "underline underline-offset-4" : ""
                }`
              }
            >
              Reading Glasses
            </NavLink>
          </li>
          <li className="cursor-pointer list-none text-xl">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `hover:text-gray-300 transition ${isActive ? "underline underline-offset-4" : ""
                }`
              }
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link
                to="/profile"
                className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600"
                title="Profile"
              >
                <i className="fa-solid fa-user text-sm"></i>
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm :underline ml-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/auth" className="text-sm hover:underline">Login</Link>
              <Link to="/auth" className="text-sm hover:underline">Register</Link>
            </>
          )}
        </div>
      </nav>

      {!isOpen && (
        <button
          className="md:hidden fixed top-2 right-2 text-2xl bg-gray-900 text-white p-2 rounded-lg shadow-lg z-30"
          onClick={() => setIsOpen(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 w-4/5 h-full bg-gray-900 text-white shadow-lg transform transition-transform duration-300 z-20 ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex flex-col items-center py-10 gap-8`}
      >
        <button
          className="absolute top-6 right-6 text-3xl"
          onClick={() => setIsOpen(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <h1 className=" text-xl mt-6 flex">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-home mt-4 me-2"></i> 
          </Link>
        </h1>
              
        <NavLink
          to="/frames"
          className={({ isActive }) =>
            `text-xl ${isActive ? "underline underline-offset-4" : ""}`
          }
          onClick={() => setIsOpen(false)}
        >
          Frames
        </NavLink>
        <NavLink
          to="/goggles"
          className={({ isActive }) =>
            `text-xl ${isActive ? "underline underline-offset-4" : ""}`
          }
          onClick={() => setIsOpen(false)}
        >
          Goggles
        </NavLink>
        <NavLink
          to="/contact-lenses"
          className={({ isActive }) =>
            `text-xl ${isActive ? "underline underline-offset-4" : ""}`
          }
          onClick={() => setIsOpen(false)}
        >
          Contact Lenses
        </NavLink>
        <NavLink
          to="/reading-glasses"
          className={({ isActive }) =>
            `text-xl ${isActive ? "underline underline-offset-4" : ""}`
          }
          onClick={() => setIsOpen(false)}
        >
          Reading Glasses
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${isActive ? "underline underline-offset-4" : ""}`
          }
          onClick={() => setIsOpen(false)}
        >
          <i className="fa-solid fa-cart-shopping text-2xl"></i>
        </NavLink>
        {user ? (
          <Link
            to="/profile"
            className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600"
            title="Profile"
          >
            <i className="fa-solid fa-user text-sm"></i>
          </Link>
        ) : (
          <>
            <Link to="/auth" className="text-sm hover:underline">Login</Link>
            <Link to="/auth" className="text-sm hover:underline">Register</Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
