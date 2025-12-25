import Navbar from "./common/Navbar";
import HeroSlider from "./HeroSlider";
import LatestNews from "./LatestNews";
import SchoolFormSection from "./SchoolFormSection";
import Footer from "./common/Footer";
import Teacher from "./Teacher";
import Students from "./TopperStudent";
import { ToastContainer } from "react-toastify";
import Academics from "./Academics";
import { useSelector } from "react-redux";
import { bgBlack, bgWhite } from "./GlobalTextColor/bg";
export default function HomeLayout() {
  const isOpen = useSelector((state: any) => state.user.isOpen);
  return (
    <div className={`${isOpen ? bgBlack : bgWhite}`}>
      <Navbar />
      <HeroSlider />
      <div className="max-w-7xl mx-auto">   
        <LatestNews />
        <Academics />
        <SchoolFormSection />
        <Teacher />
        <Students />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
