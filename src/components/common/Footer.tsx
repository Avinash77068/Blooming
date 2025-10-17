import { BiSearch } from "react-icons/bi";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { bgBlack, bgWhite } from "../GlobalTextColor/bg";
import { useSelector } from "react-redux";
import { textBlack, textWhite } from "../GlobalTextColor/text";

export default function Footer() {
  const isOpen = useSelector((state: any) => state.user.isOpen);
  return (
    <footer
      className={`${
        isOpen ? bgBlack : bgWhite
      } text-[#9ca3af] text-xs border-t-2 `}
    >
      <div className=" mx-auto px-4 sm:px-6  py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Account Info */}
        <div className="">
          <div className="flex justify-center sm:justify-start items-center">
            <h3
              className={`${
                isOpen ? textWhite : textBlack
              } text-[18px] font-semibold mb-2 border-b border-[#4b555b] pb-1`}
            >
              Account & other info
            </h3>
          </div>
          <ul className="space-y-1 text-[14px] flex sm:block">
            {[
              "Student Portal",
              "Academic Calendar",
              "Admission Process",
              "Fee Structure",
              "School Policies",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="text-[#2a8a9d] hover:underline flex">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About Us */}
        <div className="">
          <div className="flex justify-center  sm:justify-start items-center ">
            <h3
              className={`${
                isOpen ? textWhite : textBlack
              } text-[18px] font-semibold mb-2 border-b border-[#4b555b] pb-1`}
            >
              About us
            </h3>
          </div>
          <ul className="space-y-1 text-[14px] flex sm:block gap-3 sm:gap-0 justify-center sm:justify-start  ">
            {["Our Stores", "Contact us", "Locate store", "News", "Blog"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[#2a8a9d] hover:underline text-center"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="">
          <h3
            className={` text-[18px] font-semibold mb-2 hidden sm:flex ${
              isOpen ? textWhite : textBlack
            }`}
          >
            Stay informed
          </h3>

          <form className="flex mb-2 max-w-xs relative">
            <input
              type="email"
              placeholder="your email..."
              className="flex-grow px-2 py-2 md:py-2 text-xs border border-[#2a8a9d] focus:outline-none rounded-2xl"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className=" px-3 flex items-center justify-center text-white rounded-full absolute py-2 opacity-70 right-0"
            >
              <BiSearch className="w-6 h-6" />
            </button>
          </form>
          <p
            className={`text-[10px] mb-4 leading-tight ${
              isOpen ? textWhite : textBlack
            }`}
          >
            * Subscribe to our newsletter to receive early discount offers and
            new products info.
          </p>
          <div className="flex flex-col sm:block justify-center items-center">
            <p
              className={`text-whitefont-semibold mb-1 text-[18px] ${
                isOpen ? textWhite : textBlack
              }`}
            >
              We accept
            </p>
            <div
              className={`flex space-x-3 ${
                isOpen ? textWhite : textBlack
              } text-lg pt-2`}
            >
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#E1306C] w-6 h-5 transition rounded-full"
              >
                <BsInstagram />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#1877F2] w-6 h-5  transition  rounded-full"
              >
                <BsFacebook />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#1DA1F2] w-6 h-5  transition  rounded-full"
              >
                <BsTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[#0077B5] w-6 h-5  transition  rounded-full"
              >
                <BsLinkedin />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-[#FF0000] w-6 h-5  transition  rounded-full"
              >
                <BsYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Map Column */}
        <div className="flex justify-center items-center ">
          <div className="w-full">
            <div className="w-full h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1830279.9923766833!2d81.63714294472953!3d26.366442100000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39910500503eaee1%3A0x64c9dd5c94ff2c62!2sBlooming%20Children%20Academy%20Deoria%20Pandit%20A.%20N.!5e0!3m2!1sen!2sin!4v1745223998667!5m2!1sen!2sin"
                title="Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2a2f32] py-3 px-4 sm:px-6 md:px-10 flex items-center justify-between text-[10px] text-[#9ca3af]">
        <div>Made By © Avinash Shrivastav</div>
        <div className="flex items-center space-x-1 cursor-pointer select-none ">
          <img
            src="https://storage.googleapis.com/a1aa/image/38906831-2566-42a6-e719-815b356c7a02.jpg"
            alt="English (US) flag icon"
            className="w-3.5 h-3.5 rounded-full"
            width="14"
            height="14"
          />
          <span>English (US)</span>
          <i className="fas fa-caret-down text-[8px]"></i>
        </div>
      </div>
    </footer>
  );
}
