import Navbar from "./common/Navbar";
import HeroSlider from "./HeroSlider";
import LatestNews from "./LatestNews";
import SchoolFormSection from "./SchoolFormSection";
import Footer from "./common/Footer";
import Teacher from "./Teacher";
import Students from "./TopperStudent";
 import { ToastContainer } from "react-toastify";
export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <LatestNews />
      <SchoolFormSection />
      <Teacher />
      <Students />
      <Footer />
      <ToastContainer/>
    </>
  );
}
