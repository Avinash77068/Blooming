import { useSelector } from "react-redux";
import { bgBlack, bgWhite } from "./GlobalTextColor/bg";
import { textBlack, textWhite } from "./GlobalTextColor/text";
import { teacher } from "./Array/AllArray";
import { Link } from "react-router-dom";

export default function Teacher() {
  const isOpen = useSelector((state: any) => state.user.isOpen);

  return (
    <div>
      <section
        className={`relative max-w-7xl mx-auto px-4 py-5 cursor-pointer ${
          isOpen ? bgBlack : bgWhite
        }`}
      >
        <p
          className={`flex justify-center  items-center text-[22px] md:text-[32px] tracking-widest font-extrabold py-5 ${
            isOpen ? textWhite : textBlack
          }`}
        >
          Teacher List
        </p>

        <div className={`flex flex-wrap justify-center gap-8 `}>
          {teacher.map((teachers, index) => (
            <div key={index} className={`text-center max-w-xs`}>
              <Link to={`/teachers`}>
                <img
                  className={`rounded-full transition-all duration-300 hover:scale-105 object-cover w-24 h-24 mx-auto border-4 border-blue-500 mb-2`}
                  src={teachers.image}
                  alt={teachers.name}
                />
              </Link>

              <div className={`flex justify-center mb-1`}>
                <svg
                  className={`h-6 w-6 text-yellow-400`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17h4v-6H5V5h6V3H5a2 2 0 0 0-2 2v8a4 4 0 0 0 4 4zm10 0h4v-6h-6V5h6V3h-6a2 2 0 0 0-2 2v8a4 4 0 0 0 4 4z" />
                </svg>
              </div>

              <h3
                className={`font-semibold ${
                  isOpen ? textWhite : "text-gray-700"
                } text-base`}
              >
                {teachers.name}
              </h3>
              <p className={`text-gray-500 text-xs mb-2`}>{teachers.course}</p>
              <p
                className={`${
                  isOpen ? textWhite : "text-gray-600"
                } text-sm px-2`}
              >
                {teachers.testimonial}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
