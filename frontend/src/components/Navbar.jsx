import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Navbar = () => {
  const { token, setToken, userData } = useContext(AppContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="w-44 cursor-pointer"
      />
      <ul className="items-start gap-5 hidden md:flex font-medium uppercase">
        <NavLink to="/">
          <li className="p-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-[80%] m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="p-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-[80%] m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="p-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-[80%] m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="p-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-[80%] m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4 ">
        {token ? (
          <div className="flex items-center gap-2 relative cursor-pointer group">
            <img
              src={userData.image}
              alt="profile"
              className="rounded-full w-8 "
            />
            <img
              src={assets.dropdown_icon}
              alt="profile-arrow"
              className="w-3"
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-2 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer "
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer "
                >
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="hover:text-black cursor-pointer "
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary cursor-pointer text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon}
          className="w-6 md:hidden"
          alt="menu"
        />
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 bottom-0 top-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="close menu"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">Home</p>
            </NavLink>
            <NavLink
              className="px-4 py-2 rounded inline-block"
              onClick={() => setShowMenu(false)}
              to="/doctors"
            >
              <p className="px-4 py-2 rounded inline-block">All Doctors</p>
            </NavLink>
            <NavLink
              className="px-4 py-2 rounded inline-block"
              onClick={() => setShowMenu(false)}
              to="/about"
            >
              <p className="px-4 py-2 rounded inline-block">About</p>
            </NavLink>
            <NavLink
              className="px-4 py-2 rounded inline-block"
              onClick={() => setShowMenu(false)}
              to="/contact"
            >
              <p className="px-4 py-2 rounded inline-block">Contact</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
