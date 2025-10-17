import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import { cardData } from "../../Array/AllArray";
import { bgBlack, bgWhite } from "../../GlobalTextColor/bg";
import { useSelector } from "react-redux";
import { textBlack, textWhite } from "../../GlobalTextColor/text";

const Allnews = () => {
  const isOpen = useSelector((state: any) => state.user.isOpen);

  return (
    <>
      <Navbar />
      <div
        className={`min-h-screen ${
          isOpen ? bgBlack : bgWhite
        } flex items-center justify-center  pt-[70px] sm:pt-0`}
      >
        <div
          className={`${
            isOpen ? bgBlack : bgWhite
          } grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full p-2 rounded-lg cursor-pointer`}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`${
                isOpen ? bgBlack : bgWhite
              } rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-transform`}
            >
              <img src={card.img} alt={card.title} className="w-full h-auto" />
              <div className="p-2">
                <p className={`text-[13px] font-semibold ${isOpen?textWhite:textBlack}`}>
                  {card.title}
                </p>
                <p className="text-gray-600 text-[12px] ">
                  {card.description.slice(0, 50)}&nbsp;
                  <span className="text-blue-500 font-semibold">Read more</span>
                </p>
                <span className="text-gray-400 text-xs block mt-1">
                  {card.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Allnews;
