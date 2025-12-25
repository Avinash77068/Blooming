import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { slides } from "./Array/AllArray";
import { bgBlack, bgWhite } from "./GlobalTextColor/bg";
import { textWhite, textBlack } from "./GlobalTextColor/text";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const isOpen = useSelector((state: any) => state.user.isOpen);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className={`relative w-full overflow-hidden ${
        isOpen ? bgBlack : bgWhite
      }`}
    >
      {/* FIXED HEIGHT (NO FLICKER / NO JUMP) */}
      <div className="relative w-full h-[340px] sm:h-[380px] md:h-[550px] overflow-hidden">
        <img
          key={current}
          src={slides[current].url}
          alt="School slide"
          className="absolute sm:inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          draggable="false"
          loading="eager"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENT */}
        <section id="hero" className="relative z-10 h-full">
          <div className="max-w-6xl hidden  mx-auto h-full sm:grid items-center px-4 md:grid-cols-2 lg:px-0">
            <div
              className={`space-y-6 rounded-[32px] border border-white/20 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.6)]
              ${
                isOpen
                  ? "bg-gradient-to-br from-[#020617] to-[#020617]/80"
                  : "bg-white/90"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.6em] text-[#F38B2E]">
                Featured
              </p>

              <h1
                className={`text-3xl font-black leading-tight md:text-5xl ${
                  isOpen ? textWhite : textBlack
                }`}
              >
                {slides[current].title}
              </h1>

              <p
                className={`text-base md:text-lg ${
                  isOpen ? "text-white/80" : "text-slate-600"
                }`}
              >
                {slides[current].desc}
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-gradient-to-r from-[#F38B2E] to-[#FCEA2B] px-6 py-3 text-xs font-bold uppercase tracking-[0.4em] text-slate-900 shadow-lg transition hover:scale-[1.03]">
                  Admissions Open
                </button>

                <button
                  className={`rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] transition
                  ${
                    isOpen
                      ? "border-white/60 text-white hover:border-white"
                      : "border-slate-400 text-slate-700 hover:border-slate-600"
                  }`}
                >
                  Book a Tour
                </button>
              </div>
            </div>
          </div>
          <div className="flex sm:hidden">
            <h1>{slides[current].title}</h1>
            <p>{slides[current].desc}</p>
          </div>
        </section>

        {/* ARROWS */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 cursor-pointer z-20 -translate-y-1/2 text-white/80 hover:text-white transition"
        >
          <FaArrowAltCircleLeft size={36} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 cursor-pointer top-1/2 z-20 -translate-y-1/2 text-white/80 hover:text-white transition"
        >
          <FaArrowAltCircleRight size={36} />
        </button>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              current === index ? "bg-[#F38B2E] scale-110" : "bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
