import { useSelector } from "react-redux";
import { bgBlack, bgWhite } from "./GlobalTextColor/bg";
import { textBlack, textWhite } from "./GlobalTextColor/text";

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
          OUR SCHOOL ENVIRONMENT IS BUILT TO NURTURE STUDENT GROWTH
        </h3>
        <p
          className={`text-xs sm:text-sm md:text-sm ${
            isOpen ? textWhite : textBlack
          } leading-relaxed mb-4`}
        >
          At our institution, we focus on creating a safe, engaging, and
          inclusive learning environment where every student feels inspired to
          achieve their full potential.
          <br />
          <br />
          With modern classrooms, experienced faculty, and a well-rounded
          curriculum, we aim to develop confident, curious, and compassionate
          learners who are prepared for the challenges of tomorrow.
        </p>
      </div>

      {/* Image Content */}
      <div className=" sm:w-[400px] shadow-md overflow-hidden rounded-md">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkks6iBWTWO1eehnY3SYc52ky1HQjJZ7Q9XmdnvL0qbATgkf9xUWYMT6vidAk9igYgrQI&usqp=CAU"
          alt="School Students"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
