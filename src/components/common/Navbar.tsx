import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import logo from "../../assets/logo/BCA.svg";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/Store";
import { SetIsOpen } from "../store/DarkMode";
import { setMenuOpen } from "../store/NavbarOpen";

import { Link } from "react-router-dom";
import { navItems, dropdownOptions } from "../Array/AllArray";
import { bgBlack, BgBlue, BgOther } from "../GlobalTextColor/bg";
import { textBlack, textWhite, textBlueType } from "../GlobalTextColor/text";
import { NAVBAR } from "../GlobalTextColor/string";
import { toast } from "react-toastify";

export default function Navbar() {
  const menuOpen = useSelector((state: RootState) => state.navbar.navOpen);
  const isOpen = useSelector((state: any) => state.user.isOpen);
  const dispatch = useDispatch();

  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<number | null>(
    null
  );
  const [input, setInput] = useState("");

  const notify = () => toast.warn(NAVBAR.TOAST_LOGIN_INACTIVE);
  const notifys = () => toast.warn(NAVBAR.TOAST_LOGIN_INACTIVE);

  // Check if menu has dropdown
  const hasDropdown = (index: number) =>
    dropdownOptions[index]?.some((opt) => opt.path && opt.path.length > 0 || opt.path === "/");

  return (
    <nav
      className={`flex flex-wrap items-center justify-between px-5 ${
        isOpen ? bgBlack : BgOther
      } w-full fixed z-50 cursor-pointer`}
    >
      {/* Logo */}
      <div className="flex justify-between w-full items-center pb-4 pt-2">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src={logo}
              alt="School logo"
              className="w-12 h-12 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul
          className={`hidden lg:flex space-x-6 text-xs font-semibold ${textBlueType}`}
        >
          {navItems.map((item, i) => (
            <li
              key={i}
              className="relative group"
              onMouseEnter={() => hasDropdown(i) && setDropdownOpen(i)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <Link
                to={
                  dropdownOptions[i]?.length
                    ? "#"
                    : dropdownOptions[i]?.[0]?.path || "#"
                }
                className="hover:underline"
              >
                {item}
              </Link>

              {/* Dropdown */}
              {hasDropdown(i) && (
                <ul
                  className={`absolute left-0 mt-1 ${
                    dropdownOpen === i ? "flex" : "hidden"
                  } flex-col w-40 ${
                    isOpen ? bgBlack : BgOther
                  } shadow-md rounded-md ${textBlueType} text-sm z-50`}
                >
                  {dropdownOptions[i]
                    .filter((opt) => opt.path && opt.path.length > 0 || opt.path === "/")
                    .map((opt, index) => (
                      <Link key={index} to={opt.path}>
                        <li className="px-4 py-2 -mt-1 hover:bg-blue-100 cursor-pointer">
                          {opt.name}
                        </li>
                      </Link>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex gap-4 items-center">
          {/* Desktop Search + Login */}
          <div className="hidden md:flex items-center space-x-3">
            <input
              type="text"
              placeholder={NAVBAR.SEARCH_PLACEHOLDER}
              className={`py-1 px-3 rounded-2xl border ${
                isOpen
                  ? `border-white ${textWhite} placeholder:text-white`
                  : `border-black ${textBlack} placeholder:text-black`
              }`}
            />
            <button
              className={`${textWhite} rounded-2xl ${BgBlue} px-6 py-1 text-[15px]`}
              onClick={notify}
            >
              {NAVBAR.LOGIN}
            </button>
          </div>

          {/* Mobile Search + Darkmode + Hamburger */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={`sm:hidden px-4 py-1 rounded-2xl border ${
                isOpen ? textWhite : textBlack
              }`}
            />

            <button
              onClick={() => dispatch(SetIsOpen())}
              className={`text-xl ${textBlueType} px-2`}
            >
              {isOpen ? <BsMoonStarsFill /> : <BsSun />}
            </button>

            <button
              onClick={() => dispatch(setMenuOpen())}
              className={`text-xl ${textBlueType} lg:hidden`}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-[70px] left-0 w-full bg-white/60 z-50"
          onClick={() => dispatch(setMenuOpen())}
        >
          <div
            className="lg:hidden w-[15rem] mx-auto border-t border-gray-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`flex flex-col h-screen py-3 px-4 ${
                isOpen ? bgBlack : BgOther
              }`}
            >
              <ul className="flex flex-col space-y-4 text-sm font-semibold">
                {navItems.map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <button
                      onClick={() =>
                        hasDropdown(i) &&
                        setMobileDropdownOpen(
                          mobileDropdownOpen === i ? null : i
                        )
                      }
                      className="flex justify-between items-center w-full hover:underline"
                    >
                      {item}
                      {hasDropdown(i) && (
                        <BiChevronDown
                          className={`w-6 h-6 ${
                            mobileDropdownOpen === i ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {hasDropdown(i) && mobileDropdownOpen === i && (
                      <ul className="pl-4 mt-2 space-y-1">
                        {dropdownOptions[i].map((opt, idx) => (
                          <Link
                            key={idx}
                            to={opt.path}
                            onClick={() => dispatch(setMenuOpen())}
                          >
                            <li className="px-2 py-1 rounded-md hover:bg-blue-100">
                              {opt.name}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-col gap-y-4 px-5">
                <button
                  onClick={notifys}
                  className={`${textWhite} ${BgBlue} rounded-2xl px-4 py-1`}
                >
                  {NAVBAR.SIGNUP}
                </button>
                <button
                  onClick={notify}
                  className={`${textWhite} ${BgBlue} rounded-2xl px-4 py-2`}
                >
                  {NAVBAR.LOGIN}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
