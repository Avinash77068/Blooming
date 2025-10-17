import "./App.css";
import store from "./components/store/Store";
import TotalFile from "./components/TotalFiles";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchoolFeeAgreement from "./components/Routing/InformationPage/SchoolFeeAgreement";
import NoPageFound from "./components/Routing/NoPageFound";
import TeacherGallery from "./components/Routing/TeacherGallary/TeacherGallary";
import StudentGallary from "./components/Routing/StudentGallary/StudentGallary";
import Faq from "./components/Routing/InformationPage/Faq";
import Allnews from "./components/Routing/AllNews/Allnews";
import TeacherProfile from "./components/Routing/TeacherGallary/TeacherProfile";

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
          <Route path="/teachers" element={<TeacherProfile />} />
          <Route path="/allnews" element={<Allnews />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
