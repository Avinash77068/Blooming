import { useState, useEffect } from "react";
import { slides } from "./Array/AllArray";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { textWhite } from "./GlobalTextColor/text";
import { bgBlack, bgWhite } from "./GlobalTextColor/bg";
import { useSelector } from "react-redux";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const isOpen = useSelector((state: any) => state.user.isOpen);
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative w-full overflow-hidden top-10 `}>
      {/* Slide Image */}
      <img
        src={slides[current].url}
        alt={`Slide visual`}
        className={`w-full object-cover aspect-[16/9] md:h-[350px] transition-all duration-700 ease-in-out`}
      />

      {/* Overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-opacity-40 flex flex-col justify-center px-4 sm:px-6 md:px-12 py-4`}
      >
        {/* Headline */}
        <h2
          className={`${textWhite} font-bold text-base sm:text-lg md:text-2xl max-w-lg leading-snug`}
        >
          {slides[current].title}
        </h2>

        {/* Paragraph */}
        <p
          className={`${textWhite} text-xs sm:text-sm md:text-base max-w-md mt-2 leading-relaxed opacity-90`}
        >
          {slides[current].text}
        </p>

        {/* Controls */}
        <div
          className={`flex items-center space-x-3 mt-4 ${textWhite} text-xs sm:text-sm`}
        >
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className={`w-7 h-7 rounded-full border border-white bg-black/50 flex items-center justify-center hover:${
              isOpen ? bgBlack : bgWhite
            } hover:text-blue-900 transition`}
          >
            <FaArrowAltCircleLeft />
          </button>
          <button
            onClick={nextSlide}
            aria-label={`Next slide"`}
            className={`w-7 h-7 rounded-full border border-white bg-black/50 flex items-center justify-center hover:${bgWhite} hover:text-blue-900 transition"`}
          >
            <FaArrowAltCircleRight />
          </button>

          {/* Dots */}
          <div className={`flex space-x-2 items-center ml-auto">`}>
            {slides.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${bgWhite} transition-opacity ${
                  i === current ? "opacity-100" : "opacity-50"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
