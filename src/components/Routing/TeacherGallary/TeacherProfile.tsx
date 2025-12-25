import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { teacher } from "../../Array/AllArray";
import { bgBlack, bgWhite } from "../../GlobalTextColor/bg";
import { textBlack, textWhite } from "../../GlobalTextColor/text";
import { Link } from "react-router-dom";
import { RootState } from "../../store/Store";

const TeacherProfile = () => {
  const { index } = useParams<{ index: string }>();
  const isOpen = useSelector((state:RootState) => state.user.isOpen);
  const teacherData = teacher[Number(index)];

  if (!teacherData) {
    return (
      <div className={`min-h-screen ${isOpen ? bgBlack : bgWhite}`}>
        <div className="flex justify-center items-center h-[calc(100vh-70px)]">
          <div className="text-center">
            <h2 className={`text-2xl font-bold mb-4 ${isOpen ? textWhite : textBlack}`}>
              Teacher not found
            </h2>
            <Link 
              to="/teacher" 
              className={`px-4 py-2 rounded-lg ${
                isOpen ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
            >
              Back to Teachers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isOpen ? bgBlack : bgWhite}`}>
     
      <div className="pt-[70px] pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/teacher" 
            className={`inline-flex items-center mb-6 ${
              isOpen ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
            }`}
          >
            <svg 
              className="w-5 h-5 mr-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Back to Teachers
          </Link>
          
          <div className={`rounded-2xl shadow-xl overflow-hidden ${
            isOpen ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <div className="md:flex">
              {/* Teacher Image */}
              <div className="md:w-1/3">
                <img
                  className="w-full h-64 md:h-full object-cover"
                  src={teacherData.image}
                  alt={teacherData.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Teacher+Image';
                  }}
                />
              </div>
              
              {/* Teacher Details */}
              <div className="p-6 md:w-2/3">
                <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${isOpen ? textWhite : 'text-gray-900'}`}>
                  {teacherData.name}
                </h2>
                <p className={`text-lg mb-4 ${isOpen ? 'text-blue-300' : 'text-blue-600'}`}>
                  {teacherData.course}
                </p>
                
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-2 ${isOpen ? textWhite : 'text-gray-800'}`}>
                    About
                  </h3>
                  <p className={`${isOpen ? 'text-gray-300' : 'text-gray-600'}`}>
                    {teacherData.testimonial}
                  </p>
                </div>
                
                {teacherData.expertise && (
                  <div className="mb-6">
                    <h3 className={`text-lg font-semibold mb-2 ${isOpen ? textWhite : 'text-gray-800'}`}>
                      Expertise
                    </h3>
                    <p className={`${isOpen ? 'text-gray-300' : 'text-gray-600'}`}>
                      {teacherData.expertise}
                    </p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href={`mailto:${teacherData.email || 'contact@example.com'}`}
                    className={`px-6 py-2 rounded-lg flex items-center ${
                      isOpen 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    <svg 
                      className="w-5 h-5 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;