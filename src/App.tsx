import "./App.css";
import store from "./components/store/Store";
import TotalFile from "./components/TotalFiles";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Information Pages
import SchoolFeeAgreement from "./components/Routing/InformationPage/SchoolFeeAgreement";
import Faq from "./components/Routing/InformationPage/Faq";

// Gallery
import TeacherGallery from "./components/Routing/TeacherGallary/TeacherGallary";
// import TeacherProfile from "./components/Routing/TeacherGallary/TeacherProfile";
import StudentGallary from "./components/Routing/StudentGallary/StudentGallary";
import FunctionPhotos from "./components/Routing/StaticPages/FunctionPhotos";
import SchoolPhotos from "./components/Routing/StaticPages/SchoolPhotos";

// Static Pages
import AboutUs from "./components/Routing/StaticPages/AboutUs";
import Team from "./components/Routing/StaticPages/Team";
import Careers from "./components/Routing/StaticPages/Careers";
import ContactPage from "./components/Routing/StaticPages/ContactPage";
import Courses from "./components/Routing/StaticPages/Courses";
import Workshops from "./components/Routing/StaticPages/Workshops";
import Webinars from "./components/Routing/StaticPages/Webinars";
import Certifications from "./components/Routing/StaticPages/Certifications";
import Support from "./components/Routing/StaticPages/Support";
import HelpCenter from "./components/Routing/StaticPages/HelpCenter";
import Community from "./components/Routing/StaticPages/Community";
import HomeSubTwo from "./components/Routing/StaticPages/HomeSubTwo";

// Others
import Allnews from "./components/Routing/AllNews/Allnews";
import NoPageFound from "./components/Routing/NoPageFound";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TotalFile />} />
          <Route path="/agreement" element={<SchoolFeeAgreement />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/teacher" element={<TeacherGallery />} />
          <Route path="/student" element={<StudentGallary />} />
          {/* <Route path="/teachers/:index" element={<TeacherProfile />} />   */}
          <Route path="/allnews" element={<Allnews />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/home-sub2" element={<HomeSubTwo />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/certs" element={<Certifications />} />
          <Route path="/support" element={<Support />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/community" element={<Community />} />
          <Route path="/function" element={<FunctionPhotos />} />
          <Route path="/school" element={<SchoolPhotos />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
