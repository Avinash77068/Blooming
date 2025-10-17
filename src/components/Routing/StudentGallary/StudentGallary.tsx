import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";

import { students } from "../../Array/AllArray";
import { bgBlack, bgWhite } from "../../GlobalTextColor/bg";
import { useSelector } from "react-redux";
import { textWhite, textBlack } from "../../GlobalTextColor/text";

const StudentGallary = () => {
  const isOpen = useSelector((state: any) => state.user.isOpen);
  return (
    <div className={`${isOpen ? bgBlack : bgWhite}`}>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[70px] pb-12">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2
            className={`font-bold ${
              isOpen ? textWhite : textBlack
            } text-lg sm:text-xl`}
          >
            Student Gallery
          </h2>
          <p
            className={`text-xs sm:text-sm ${
              isOpen ? textWhite : textBlack
            } mt-1`}
          >
            The School Student Gallery showcases memorable images of our
            students, highlighting their hard work and contributions to
            students. This gallery celebrates their teaching programs and
            dedication towards their students' success.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {students.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-sm ${
                isOpen ? "opacity-80" : "opacity-100"
              }`}
            >
              <img
                alt="Student"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                src={image.image}
              />
              <div className="absolute bottom-0 left-0 right-0 text-black bg-white/40 bg-opacity-60 font-bold text-xs sm:text-sm p-2">
                <p className="font-bold">{students[index]?.name}</p>
                <p>{students[index]?.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentGallary;
