// import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

export default function NoPageFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Centered Error Message */}
      <div className="flex-grow flex items-center justify-center px-4">
        <p className="text-center text-black text-3xl sm:text-4xl md:text-5xl font-bold">
          404 - Page Not Found
        </p>
      </div>

      {/* Footer at bottom */}
      {/* <Footer /> */}
    </div>
  );
}
