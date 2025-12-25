import { useSelector } from "react-redux";
import { newsItems } from "./Array/AllArray";
import { bgBlack, bgWhite } from "./GlobalTextColor/bg";
import { textBlack, textWhite } from "./GlobalTextColor/text";
import { Link } from "react-router-dom";

export default function LatestNews() {
  const isOpen = useSelector((state: any) => state.user.isOpen);
  return (
    <section
      className={`px-4 sm:px-6 md:px-10 lg:px-12 pt-5 sm:pt-16 max-w-full ${
        isOpen ? bgBlack : bgWhite
      } `}
    >
      <div className={`flex justify-between items-center mb-4`}>
        <h3
          className={`text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide ${
            isOpen ? textWhite : textBlack
          }`}
        >
          LATEST NEWS
        </h3>
        <Link to={"/allnews"}
          className={`text-xs font-semibold border border-gray-300 rounded-full px-4 py-1.5 hover:bg-gray-100 transition ${
            isOpen ? textWhite : textBlack
          }`}
        >
          All News
        </Link>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4`}>
        {newsItems.map((item: any, i: number) => (
          <article
            key={i}
            className={`${
              isOpen ? bgBlack : bgWhite
            } rounded-lg shadow-sm overflow-hidden`}
          >
            <div className={`relative`}>
              <img
                src={item.img}
                alt={`News thumbnail`}
                className={`w-full h-40 object-cover`}
              />
              <button
                aria-label={`Bookmark news item`}
                className={`absolute top-2 right-2 ${
                  isOpen ? textWhite : textBlack
                } text-lg`}
              >
                <i className={`far fa-bookmark`}></i>
              </button>
            </div>
            <div className={`p-3`}>
              <h4
                className={`text-xs font-semibold leading-tight ${
                  isOpen ? textWhite : textBlack
                }`}
              >
                {item.title}
              </h4>
              <div
                className={`flex justify-between text-[10px] ${
                  isOpen ? textWhite : textBlack
                } mt-1`}
              >
                <span>{item.time}</span>
                <span>{item.comments}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
