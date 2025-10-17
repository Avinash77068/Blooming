import { useSelector } from "react-redux";
import { bgBlack, bgWhite } from "../../GlobalTextColor/bg";
import Navbar from "../../common/Navbar";
import { textBlack, textWhite } from "../../GlobalTextColor/text";

const TeacherProfile = () => {
  const isOpen = useSelector((state: any) => state.user.isOpen);
  return (
    <div className={`flex ${isOpen ? bgBlack : bgWhite}  `}>
      <Navbar />
      <div className="flex pt-[70px] justify-center items-center w-full">
        <div
          className={`rounded-2xl shadow-lg max-w-sm  mx-auto my-6 sm:my-10 ${
            isOpen ? "border-white border-2" : "border-black  border-2"
          }`}
        >
          <img
            className="w-full h-48 sm:h-60 md:h-72 object-cover rounded-2xl "
            src="https://picsum.photos/600/400"
            alt="Profile"
          />
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <div className="mt-2 sm:mt-0 sm:ml-4">
                <h2
                  className={`text-xl sm:text-2xl md:text-3xl font-bold  ${
                    isOpen ? textWhite : textBlack
                  }`}
                >
                  Ann Lovefully
                </h2>
                <p
                  className={`mt-1 text-sm sm:text-base ${
                    isOpen ? textWhite : textBlack
                  }`}
                >
                  Designer, cat lover, bookworm, apple pie fanatic, and nature
                  enthusiast :
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <i className="fas fa-map-marker-alt mr-1"></i> Hungary
                </p>
                <a
                  href="mailto:example@example.com"
                  className="text-sm text-blue-500 hover:underline mt-1 inline-block"
                >
                  Send E-mail
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between mt-6 text-center">
              <div className="mb-2 sm:mb-0">
                <span
                  className={`block text-lg font-bold ${
                    isOpen ? textWhite : textBlack
                  }`}
                >
                  8,100
                </span>
                <span className={`text-sm ${isOpen ? textWhite : textBlack}`}>
                  Followers
                </span>
              </div>
              <div>
                <span
                  className={`block text-lg font-bold ${
                    isOpen ? textWhite : textBlack
                  }`}
                >
                  3,650
                </span>
                <span className={`text-sm ${isOpen ? textWhite : textBlack}`}>
                  Following
                </span>
              </div>
            </div>

            <button className="mt-6 w-full py-2 sm:py-3 bg-green-500 text-white font-bold rounded-xl shadow hover:bg-green-600 transition duration-200">
              Copy Phone Number
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
