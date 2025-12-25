import { BiSearch } from "react-icons/bi";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { useSelector } from "react-redux";

import { bgBlack, BgFooterLight } from "../GlobalTextColor/bg";
import { textBlack, textWhite, textLink } from "../GlobalTextColor/text";
import { FOOTER } from "../GlobalTextColor/string";

export default function Footer() {
  const isOpen = useSelector((state: any) => state.user.isOpen);

  return (
    <footer className={`${isOpen ? bgBlack : BgFooterLight} text-xs border-t`}>
      <div className="mx-auto grid grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4">
        {/* Account */}
        <div>
          <h3
            className={`${
              isOpen ? textWhite : textBlack
            } text-[18px] font-semibold mb-2`}
          >
            {FOOTER.ACCOUNT_TITLE}
          </h3>
          <ul className="space-y-1 text-[14px]">
            {FOOTER.ACCOUNT_LINKS.map((item, i) => (
              <li key={i}>
                <a href="#" className={`${textLink} hover:underline`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3
            className={`${
              isOpen ? textWhite : textBlack
            } text-[18px] font-semibold mb-2`}
          >
            {FOOTER.ABOUT_TITLE}
          </h3>
          <ul className="space-y-1 text-[14px]">
            {FOOTER.ABOUT_LINKS.map((item, i) => (
              <li key={i}>
                <a href="#" className={`${textLink} hover:underline`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3
            className={`${
              isOpen ? textWhite : textBlack
            } text-[18px] font-semibold mb-2`}
          >
            {FOOTER.NEWSLETTER_TITLE}
          </h3>

          <form className="relative mb-2 flex max-w-xs">
            <input
              type="email"
              placeholder={FOOTER.NEWSLETTER_PLACEHOLDER}
              className="flex-grow rounded-2xl border border-[#2a8a9d] px-3 py-2 text-xs"
            />
            <button className="absolute right-0 px-3 py-2 text-white opacity-70">
              <BiSearch className="w-6 h-6" />
            </button>
          </form>

          <p className={`${isOpen ? textWhite : textBlack} text-[10px] mb-4`}>
            {FOOTER.NEWSLETTER_NOTE}
          </p>

          <p className={`${isOpen ? textWhite : textBlack} font-semibold mb-1`}>
            {FOOTER.ACCEPT_TEXT}
          </p>

          <div
            className={`flex gap-3 text-lg ${isOpen ? textWhite : textBlack}`}
          >
            <BsInstagram className="hover:text-[#E1306C]" />
            <BsFacebook className="hover:text-[#1877F2]" />
            <BsTwitter className="hover:text-[#1DA1F2]" />
            <BsLinkedin className="hover:text-[#0077B5]" />
            <BsYoutube className="hover:text-[#FF0000]" />
          </div>
        </div>

        {/* Map */}
        <div className="h-[200px] w-full">
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18..."
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-between border-t px-6 py-3 text-[10px] text-gray-400">
        <div>{FOOTER.COPYRIGHT}</div>
        <div>{FOOTER.LANGUAGE}</div>
      </div>
    </footer>
  );
}
