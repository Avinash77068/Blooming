import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import { bgBlack, bgWhite } from "./GlobalTextColor/bg";
import { textBlack, textWhite } from "./GlobalTextColor/text";
import { students } from "./Array/AllArray";
import { STUDENTS } from "./GlobalTextColor/string";

export default function Students() {
  const isOpen = useSelector((state: any) => state.user.isOpen);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    imageRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <div className={`relative ${isOpen ? bgBlack : bgWhite}`}>
      <section className="max-w-full mx-auto px-4 py-10">
        <p
          className={`flex justify-center items-center text-[22px] md:text-[32px] tracking-widest font-extrabold py-5 ${
            isOpen ? textWhite : textBlack
          }`}
        >
          {STUDENTS.SECTION_TITLE}
        </p>

        {/*  Wrapper: Scroll + Info Box */}
        <div className="relative">
          {/*  Scrollable Row */}
          <div className="overflow-x-auto scrollbar-hide  scrollbar-hidden pt-10 pb-50">
            <div className="flex flex-nowrap gap-2 sm:gap-8 px-2">
              {students.map((student, index) => (
                <div
                  key={index}
                  ref={(el: any) => (imageRefs.current[index] = el)}
                  className="flex flex-col cursor-pointer items-center min-w-[150px] sm:min-w-[200px] text-center"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    className="rounded-full hover:scale-105 object-cover w-24 h-24 border-4 border-blue-500 mb-2 transition-all duration-300"
                    src={student.image}
                    alt={student.name}
                  />
                </div>
              ))}
            </div>
          </div>

          {/*  Centered Info Box - Positioned inside same div */}
          <div className=" px-3 absolute top-full left-1/2 -translate-x-1/2 mt-[-170px] bg-white/20 bg-opacity-80 p-6 rounded-xl shadow-lg z-10 max-w-sm w-full text-center">
            <h3
              className={`font-semibold text-lg ${
                isOpen ? textWhite : textBlack
              }`}
            >
              {students[activeIndex].name}
            </h3>
            <p className="text-sm text-gray-500">
              {students[activeIndex].course}
            </p>
            <p
              className={`mt-2 text-sm ${isOpen ? textWhite : "text-gray-600"}`}
            >
              {students[activeIndex].testimonial}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
