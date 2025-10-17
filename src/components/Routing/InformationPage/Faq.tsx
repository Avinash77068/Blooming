import { BiChevronDown } from "react-icons/bi";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import { useState } from "react";
import { allFAQs } from "../../Array/AllArray";
import { bgBlack, bgWhite } from "../../GlobalTextColor/bg";
import { useSelector } from "react-redux";
import { textBlack, textWhite } from "../../GlobalTextColor/text";

const Faq = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [openQuestionIndex, setOpenQuestionIndex] = useState<null | number>(
    null
  );
  const isOpen = useSelector((state: any) => state.user.isOpen);

  const handleCategoryClick = (index: number) => {
    setActiveCategoryIndex(index);
    setOpenQuestionIndex(null);
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const activeCategory = allFAQs[activeCategoryIndex];

  return (
    <div className={`${"bg-[#e9e9dd]"}`}>
      <Navbar />
      <main className={`${"max-w-full mx-auto "} ${isOpen ? bgBlack : bgWhite}`}>
        {/* Intro */}
        <section
          className={`${"flex flex-col md:flex-row items-center justify-between px-10 pt-16"}`}
        >
          <div className={`${"max-w-xl mb-8 md:mb-0"}`}>
            <h1
              className={`${"text-[22px] font-bold text-[#1a1a1a] mb-3 select-none"} ${
                isOpen ? textWhite : textBlack
              }`}
            >
              FAQs
            </h1>
            <p
              className={`${"text-[13px] font-normal leading-4.5 text-[#1a1a1a] max-w-md select-text"}  ${
                isOpen ? textWhite : textBlack
              }`}
            >
              Our FAQ section is here to help you find answers to common
              questions about admissions, examinations, curriculum, fees,
              transport, and extra-curricular activities. Whether you're curious
              about the admission process, exam schedules, or school transport,
              we’ve got it covered. We aim to make school life easier for both
              students and parents by providing quick access to essential
              information. If you can’t find what you're looking for, our
              support team is always available to provide further assistance.
              Feel free to reach out for personalized help!
            </p>
          </div>
          <div className={`${"w-full max-w-[320px] md:max-w-[400px]"}`}>
            <img
              className={`${"w-full h-auto select-none rounded-lg"}`}
              draggable="false"
              src="https://storage.googleapis.com/a1aa/image/9215bf25-e457-49e6-49f3-034e6cd4ea3c.jpg"
              alt="FAQ Illustration"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className={`${"flex flex-col md:flex-row border-t border-gray-300  px-10 py-10 md:py-14"}  ${
            isOpen ? bgBlack : bgWhite
          }`}
        >
          {/* Categories */}
          <nav
            className={`${"flex flex-row md:flex-col flex-wrap gap-2 md:space-y-2 text-[11px]  font-normal md:w-48 select-text"} ${
              isOpen ? textWhite : textBlack
            }`}
          >
            {allFAQs.map((cat, i) => (
              <button
                key={i}
                onClick={() => handleCategoryClick(i)}
                className={`${"hover:underline flex items-center space-x-2"} ${
                  activeCategoryIndex === i
                    ? `font-bold ${isOpen ? textWhite : textBlack}`
                    : ""
                }`}
              >
                <span>{cat.category}</span>
              </button>
            ))}
          </nav>

          {/* Questions */}
          <div
            className={`${"flex-1 sm:border-l mt-4 md:mt-0 md:pl-8 w-full"}`}
          >
            <h2
              className={`${" text-[22px] font-bold select-none"} ${
                isOpen ? textWhite : textBlack
              }`}
            >
              {activeCategory.category}
            </h2>
            <div
              className={`${"space-y-4 text-[12px] font-normal w-full select-text"} ${
                isOpen ? textWhite : textBlack
              }`}
            >
              {activeCategory.questions.map((q, index) => (
                <div
                  key={index}
                  className={`${"border-b border-gray-300 pb-2 cursor-pointer"}`}
                >
                  <div
                    onClick={() => toggleQuestion(index)}
                    className={`${"flex justify-between items-center font-semibold"}`}
                  >
                    {q.question}
                    <BiChevronDown
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        openQuestionIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openQuestionIndex === index && (
                    <div className="mt-2">{q.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
