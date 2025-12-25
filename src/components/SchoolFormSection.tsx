import { useSelector } from "react-redux";
import { bgBlack, bgWhite } from "./GlobalTextColor/bg";
import { textBlack, textWhite } from "./GlobalTextColor/text";
import { SCHOOL_ENV } from "./GlobalTextColor/string";
import { IMAGE } from "./GlobalTextColor/images";

// components/SchoolFormSection.jsx
export default function SchoolFormSection() {
   const isOpen = useSelector((state: any) => state.user.isOpen); 
  return (
    <section
      className={` block sm:flex justify-between items-center px-4 md:px-12 py-5 ${
        isOpen ? bgBlack : bgWhite
      }`}
    >
      {/* Text Content */}
      <div className="sm:w-[50%] max-w-lg">
        <h3
          className={`text-[15px] font-bold uppercase tracking-wide ${
            isOpen ? textWhite : textBlack
          } mb-2`}
        >
          {SCHOOL_ENV.TITLE}
        </h3>
        <p
          className={`text-xs sm:text-sm md:text-sm ${
            isOpen ? textWhite : textBlack
          } leading-relaxed mb-4`}
        >
          {SCHOOL_ENV.DESC_1}
          <br />
          <br />
          {SCHOOL_ENV.DESC_2}
        </p>
      </div>

      {/* Image Content */}
      <div className=" sm:w-[400px] shadow-md overflow-hidden rounded-md">
        <img
          src={IMAGE.SCHOOLFORM}
          alt={SCHOOL_ENV.IMAGE_ALT}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
