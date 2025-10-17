import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo/BCA.svg";
import { bgBlack, BgBlue, BgOther } from "../GlobalTextColor/bg";
import { textBlack, textBlueType, textWhite } from "../GlobalTextColor/text";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { SetIsOpen } from "../store/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { setMenuOpen } from "../store/NavbarOpen";
import { RootState } from "../store/Store";
import { navItems } from "../Array/AllArray";
import { Link } from "react-router-dom";
import { dropdownOptions } from "../Array/AllArray";
import { toast } from "react-toastify";

export default function Navbar() {
  const menuOpen = useSelector((state: RootState) => state.navbar.navOpen);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<number | null>(
    null
  );
  const notify = () => toast.warn("Login is not Active Now!");
  const notifys = () => toast.warn("Login is not Active Now!");
  const [input, setInput] = useState("");
  const isOpen = useSelector((state: any) => state.user.isOpen);
  const dispatch = useDispatch();

  const Darkmode = () => {
    dispatch(SetIsOpen());
  };

  return (
    <nav
      className={`flex flex-wrap items-center justify-between px-5 ${
        isOpen ? bgBlack : BgOther
      } cursor-pointer w-full z-50 fixed`}
    >
      <div className="flex justify-between w-full items-center pb-4 pt-2">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            {" "}
            <img
              src={logo}
              alt="School logo"
              className="w-12 h-12 -z-10 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul
          className={`hidden lg:flex space-x-4 md:space-x-4 lg:space-x-6 text-xs font-semibold ${textBlueType}`}
        >
          {navItems.map((item, i) => (
            <li
              key={i}
              className="relative group"
              onMouseEnter={() => setDropdownOpen(i)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <a href="#" className="hover:underline">
                {item}
              </a>
              <ul
                className={`absolute left-0 mt-1 ${
                  dropdownOpen === i ? "flex" : "hidden"
                } flex-col w-40 ${
                  isOpen ? bgBlack : BgOther
                } shadow-md rounded-md ${textBlueType} text-sm z-50`}
              >
                {(dropdownOptions[i] || []).map((opt, index) => (
                  <Link
                    to={opt.path}
                    {...(opt.path === "/agreement" ? {} : {})}
                  >
                    {" "}
                    <li
                      key={index}
                      className="px-4 py-2 -mt-1 hover:bg-blue-100 cursor-pointer"
                    >
                      {opt.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Right Side Desktop & Tablet */}
        <div className="flex gap-4">
          <div className="hidden md:flex lg:flex items-center space-x-3 lg:mt-0">
            <input
              type="text"
              placeholder=" Search here"
              className={`py-1 border px-3 rounded-2xl ${
                isOpen
                  ? `border-white ${textWhite} placeholder:text-white`
                  : `border-black ${textBlack} placeholder:text-black`
              }`}
            />
            <button
              className={`${textWhite} rounded-2xl ${BgBlue} px-6 py-1 text[15px]`}
              onClick={notify}
            >
              Log In
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search here"
              className={` px-4 text-[14px] rounded-2xl flex sm:hidden py-1 border ${
                isOpen ? textWhite : textBlack
              }`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={Darkmode}
              className={`text-xl ${textBlueType} px-2 transition-transform duration-300`}
            >
              <span
                className={`inline-block transform transition-transform duration-300 ${
                  isOpen ? "rotate-360" : "rotate-0"
                }`}
              >
                {isOpen ? <BsMoonStarsFill /> : <BsSun />}
              </span>
            </button>

            <button
              onClick={() => dispatch(setMenuOpen())}
              className={`text-xl ${textBlueType} focus:outline-none lg:hidden transition-transform duration-300`}
            >
              <span
                className={`inline-block transform transition-transform duration-300 ${
                  menuOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {menuOpen && (
        <div
          className="flex w-full absolute top-[70px] left-0 border-none sm:border-t border-gray-300 bg-white/60 animate-fadeIn z-50"
          onClick={() => dispatch(setMenuOpen())}
        >
          <div
            className="lg:hidden -mt-1 w-[15rem] border-t border-gray-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`flex flex-col transition-all duration-300 ease-out opacity-100 ${
                isOpen ? bgBlack : BgOther
              } h-screen py-3 px-4`}
            >
              <ul
                className={`flex flex-col space-y-4 text-sm font-semibold ${textBlueType} transition-all duration-300 delay-100`}
              >
                {navItems.map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(
                          mobileDropdownOpen === i ? null : i
                        )
                      }
                      className="flex justify-between items-center w-full hover:underline transition duration-300"
                    >
                      {item}
                      <BiChevronDown
                        className={`w-6 h-6 transform transition-transform duration-300 ${
                          mobileDropdownOpen === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileDropdownOpen === i && (
                      <ul className="pl-4 mt-2 space-y-1 transition-all duration-300 delay-150">
                        {(dropdownOptions[i] || []).map((opt, idx) => (
                          <li key={idx}>
                            <Link
                              to={opt.path}
                              className="hover:bg-blue-100 px-2 py-1 rounded-md block transition-colors duration-00"
                              onClick={() => dispatch(setMenuOpen())}
                            >
                              {opt.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div
                className={`mt-4 flex flex-col gap-y-4 pt-4 px-5 transition-opacity duration-300 delay-200 ${
                  isOpen
                    ? `border-white ${textWhite} placeholder:text-white`
                    : `border-black ${textBlack} placeholder:text-black`
                }`}
              >
                <button
                  onClick={notifys}
                  className={`${textWhite} ${BgBlue} rounded-2xl px-4 py-1`}
                >
                  SignUp
                </button>
                <button
                  className={`${textWhite} ${BgBlue} text-[15px] rounded-2xl px-4 py-2`}
                  onClick={notify}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
