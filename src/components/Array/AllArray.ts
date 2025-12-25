import image1 from "../../assets/image/University.jfif";
import image2 from "../../assets/image/school.jpg";
import Blooming from "../../assets/logo/bloooming.jpg";
import image3 from "../../assets/./image/schoolBoys.jfif";
import newsImage1 from "../../assets/image/Boys.jpg";
import newsImage2 from "../../assets/image/Library.jpg";
import newsImage3 from "../../assets/image/SeatingRoom.jpg";
import Sangram from "../../assets/Teacher/Sangram.jpg";
import Ramesh from "../../assets/Teacher/ramesh.jpg";
import vibhayRaj from "../../assets/Teacher/vibhayRaj.jpg";
import girja from "../../assets/Teacher/girja.jpg";
import surendra from "../../assets/Teacher/Surendra.jpg";
import sunil from "../../assets/Teacher/sunil.jpeg";
import dilshad from "../../assets/Teacher/dilshad.jpeg";

import aviansh from "../../assets/Student/avinash.png";
import shailesh from "../../assets/Student/shailesh.jfif";
import suraj from "../../assets/Student/suraj.jfif";
const time = () => {
  const now = new Date();
  return now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};


export const dropdownOptions: {
  [key: number]: { name: string; path: string }[];
} = {
  0: [
    { name: "Home", path: "/" },
    { name: "Home Sub 2", path: "/home-sub2" },
  ],
  1: [
    { name: "About Us", path: "/about-us" },
    { name: "Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ],
  2: [
    { name: "Courses", path: "/courses" },
    { name: "Workshops", path: "/workshops" },
    { name: "Webinars", path: "/webinars" },
    { name: "Certifications", path: "/certs" },
  ],
  3: [
    { name: "Support", path: "/support" },
    { name: "Help Center", path: "/help" },
    { name: "FAQ", path: "/faq" },
    { name: "Community", path: "/community" },
  ],
  4: [
    { name: "Teacher's Photo", path: "/teacher" },
    { name: "Student's photos", path: "/student" },
    { name: "Funnction photos", path: "/function" },
    { name: "School Photos", path: "/school" },
  ],
  5: [
    { name: "Fee Agreement", path: "/agreement" },
    { name: "FAQ", path: "/faq" },
    { name: "Community", path: "/community" },
  ],
};
export const slides = [
  {
    id: 1,
    url: Blooming,
    title: "Welcome to Bright Future College",
    desc: "",
    text: "Empowering students to achieve academic excellence and personal growth in a vibrant learning environment.",
  },
  {
    id: 2,
    url: image2,
    title: "Explore Our Career-Focused Programs",
    desc: "",
    text: "From technology to humanities, discover programs designed to prepare you for real-world success.",
  },
  {
    id: 3,
    url: image3,
    title: "Join a Community of Innovators",
    desc: "",
    text: "Collaborate, create, and connect with faculty and peers who are passionate about shaping the future.",
  },
];
export const newsItems = [
  {
    img: image1,
    time: "3 hours ago",
    comments: time(),
    title:"High quality English teachers from Great Britain will teach...",
  },
  {
    img: newsImage1,
    time: "2 hours ago",
    comments: time(),
    title:"High quality English teachers from Great Britain will teach...",
  },
  {
    img: newsImage2,
    time: "3 hours ago",
    comments: time(),
    title:"High quality English teachers from Great Britain will teach...",
  },
  {
    img: newsImage3,
    time: "3 hours ago",
    comments: time(),
    title:"High quality English teachers from Great Britain will teach...",
  },
];
export const navItems = [
  "HOME",
  "EDUCATIONAL PROGRAMS",
  "SERVICES",
  "PROJECTS",
  "GALLERY",
  "INFORMATION PAGE",
];
export const teacher = [
  {
    name: "Surendra sir",
    course: "B.Sc. in Chemistry",
    testimonial:
      "With a deep passion for Chemistry, I strive to simplify complex concepts and make the subject enjoyable for my students.",
    image: surendra,
    email:"surendra@example.com",
    expertise:
      "Expert in Inorganic and Organic Chemistry, with a focus on experimental techniques and reaction mechanisms.",
  },
  {
    name: "Sangram Sharma",
    course: "M.A. in English Literature",
    testimonial:
      "The study of English literature opens doors to a new world of critical thinking and creativity. I guide students to explore these realms.",
    image: Sangram,
    email:"sangram@example.com",
    expertise:
      "Expert in English literature, specializing in classic and modern texts, literary analysis, and creative writing.",
  },
  {
    name: " Mr. Ramesh Gupta",
    course: "B.Sc. in Chemistry and Physics",
    testimonial:
      "Chemistry and Physics go hand-in-hand in the real world. I aim to bridge these two subjects for a deeper understanding of both.",
    image: Ramesh,
    email:"ramesh@example.com",
    expertise:
      "Specializes in Physical Chemistry, Thermodynamics, Quantum Mechanics, and Classical Physics.",
  },
  {
    name: "Vibhayraj sir",
    course: "M.A. in Sanskrit",
    testimonial:
      "Sanskrit is not just a language but a way to connect with ancient Indian knowledge. I aim to bring that knowledge to life for my students.",
    image: vibhayRaj,
    email:"vibhayraj@example.com",
    expertise:
      "Fluent in classical Sanskrit, Vedic texts, and Sanskrit literature. Strong in the philosophical and grammatical aspects.",
  },
  {
    name: "Girja Ma'am",
    course: "M.A. in English and Hindi",
    testimonial:
      "The beauty of language lies in its ability to connect cultures and people. I teach both English and Hindi to make communication powerful.",
    image: girja,
    email:"girja@example.com",
    expertise:
      "Specializes in literature, translation studies, and bilingual communication in both English and Hindi.",
  },
  {
    name: "Reema Yadav",
    course: "B.A. in Hindi, Art, and Social Science",
    testimonial:
      "I help students find the link between Art, Social Science, and language to develop a holistic perspective on various subjects.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    email:"reema@example.com",
    expertise:
      "Expert in Hindi literature, Art history, and Social Science with a focus on societal structures and art movements.",
  },
  {
    name: "Seema Yadav",
    course: "M.A. in Grammar",
    testimonial:
      "Language is built on grammar. My approach helps students master grammar in both English and Hindi to communicate effectively.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    expertise:
      "Expert in linguistic structures, syntax, and grammar rules for both English and Hindi languages.",
  },
  {
    name: "Dilshad Ahmad",
    course: "M.A. in Grammar and English",
    testimonial:
      "A solid understanding of grammar is crucial to mastering any language. I focus on perfecting language skills through strong grammar foundations.",
    image: dilshad,
    email:"dilshad@example.com",
    expertise:
      "Specialized in advanced English grammar, syntax, and teaching English as a second language. Also proficient in Hindi grammar.",
  },
  {
    name: "Sunil Gupta",
    course: "B.A. Math",
    testimonial:
      "Practical experience in the legal field is essential for every Math student. I help students bridge the gap between numerical and practice.",
    image: sunil,
    email:"surendra@example.com",
    expertise:
      "Expert in legal theory, Constitutional law, and practical exposure through moot court and legal aid clinics.",
  },
];
export const students = [
  {
    name: "Avinash",
    class: "12th",
    course: "Science (Physics, Chemistry, Mathematics)",
    testimonial:
      "Blooming Children Academy has provided me with a solid foundation in the sciences. The faculty is supportive, and the resources available for learning are exceptional.",
    image: aviansh,
    expertise:
      "Focused on Physics and Mathematics with a passion for problem-solving.",
  },
  {
    name: "Ritika",
    class: "12th",
    course: "Commerce (Economics, Business Studies, Accountancy)",
    testimonial:
      "The Academy’s environment encourages creativity and critical thinking, which has helped me develop a strong understanding of business concepts.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    expertise:
      "Specialized in Economics and Business Studies with an interest in financial planning.",
  },
  {
    name: "Shailesh",
    class: "12th",
    course: "Science (Biology, Chemistry, Physics)",
    testimonial:
      "My experience here has been incredibly enriching. The biology classes were highly interactive and helped me strengthen my concepts for future studies in medicine.",
    image: shailesh,
    expertise:
      "Aspired to pursue a career in medicine with a focus on biological sciences.",
  },
  {
    name: "Suraj",
    class: "12th",
    course: "Arts (English, History, Political Science)",
    testimonial:
      "Blooming Children Academy has been a transformative experience for me. The teachers are extremely passionate, and they inspire me to continue exploring the arts.",
    image: suraj,
    expertise:
      "Passionate about literature and history with an interest in social sciences.",
  },
  {
    name: "Shailesh",
    class: "12th",
    course: "Commerce (Economics, Business Studies, Accountancy)",
    testimonial:
      "The Academy has helped me not only academically but also in building essential life skills such as leadership and teamwork.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    expertise: "Focus on business development, leadership, and economics.",
  },
  {
    name: "Vandna",
    class: "12th",
    course: "Science (Physics, Chemistry, Biology)",
    testimonial:
      "I am grateful for how the Academy's hands-on approach in teaching science has made learning so engaging. It truly inspires me to pursue research in biotechnology.",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
    expertise:
      "Interested in biotechnology and environmental science with strong biology skills.",
  },
  {
    name: "Sonika",
    class: "12th",
    course: "Commerce (Economics, Business Studies, Accountancy)",
    testimonial:
      "Blooming Children Academy is the best place for commerce students. The teachers are so knowledgeable and approachable, making learning enjoyable.",
    image: "https://randomuser.me/api/portraits/women/99.jpg",
    expertise:
      "Aiming for a career in finance, with a keen interest in accounting and economics.",
  },
  {
    name: "Monika",
    class: "12th",
    course: "Arts (Geography, History, Political Science)",
    testimonial:
      "The supportive teachers and great study materials at Blooming Children Academy have helped me discover my love for geography and history.",
    image: "https://randomuser.me/api/portraits/women/111.jpg",
    expertise:
      "Strong interest in geography, with a passion for history and social sciences.",
  },
  {
    name: "Archna",
    class: "12th",
    course: "Science (Physics, Chemistry, Biology)",
    testimonial:
      "I have found a great sense of curiosity and intellectual challenge at Blooming Children Academy. The faculty has been amazing in providing deep insights into science.",
    image: "https://randomuser.me/api/portraits/women/121.jpg",
    expertise:
      "Excels in chemistry and physics, with an interest in pursuing engineering.",
  },
];
export const allFAQs = [
  {
    category: "Admissions",
    questions: [
      {
        question: "What is the process to get admission?",
        answer:
          "To get admission, you need to fill out the application form first. Then, document verification and an entrance test will follow. Final selection is based on an interview.",
      },
      {
        question: "Is online admission available?",
        answer:
          "Yes, you can fill out the admission form and upload your documents through our website.",
      },
    ],
  },
  {
    category: "Examinations",
    questions: [
      {
        question: "When are the annual exams conducted?",
        answer:
          "Annual exams are conducted every year in the month of March. A detailed schedule is notified in advance.",
      },
      {
        question: "How can I check the exam results?",
        answer:
          "Results are available both on the school notice board and on the online portal. You can check them by logging in with your student ID.",
      },
    ],
  },
  {
    category: "Curriculum",
    questions: [
      {
        question: "Which board's syllabus is followed by the school?",
        answer:
          "Our school follows the CBSE board curriculum as per the prescribed guidelines.",
      },
      {
        question: "Which subjects are taught?",
        answer:
          "Primary level includes Math, Science, English, Hindi, and EVS. Senior levels have additional subjects like Computer Science and Social Studies.",
      },
    ],
  },
  {
    category: "Fees & Payments",
    questions: [
      {
        question: "What is the fee payment process?",
        answer:
          "You can pay the fee at the school counter or through the online payment gateway. Both monthly and quarterly payment options are available.",
      },
      {
        question: "What is the late fee penalty?",
        answer:
          "A penalty of ₹50 per week is charged for late payments. If the delay exceeds one month, admission may be temporarily suspended.",
      },
    ],
  },
  {
    category: "Transport",
    questions: [
      {
        question: "How can I opt for school transport?",
        answer:
          "You need to fill out the transport form and submit it at the office. Routes and timings are predefined.",
      },
      {
        question: "Is bus tracking available?",
        answer:
          "Yes, you can track the bus in real-time through the parent mobile app.",
      },
    ],
  },
  {
    category: "Extra-Curricular",
    questions: [
      {
        question: "Which activities are available?",
        answer:
          "The school offers music, dance, sports, art & craft, robotics, and other extra-curricular activities.",
      },
      {
        question: "What is the process to join clubs?",
        answer:
          "To join a club, students must fill out a selection form. An orientation session is also held at the beginning of each term.",
      },
    ],
  },
];
export const cardData = [
  {
    img: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    title: "Sunrise Over the Mountains",
    description:
      "A breathtaking view of the sun rising behind a majestic mountain range.",
    date: "October 1, 2023",
  },
  {
    img: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    title: "Serene Beach Escape",
    description:
      "A tranquil beach scene with palm trees swaying in the gentle breeze.",
    date: "October 5, 2023",
  },
  {
    img: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    title: "Autumn Leaves",
    description: "A vibrant display of autumn foliage.",
    date: "October 10, 2023",
  },
  {
    img: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    title: "City Lights at Night",
    description: "City skyline illuminated by thousands of lights.",
    date: "October 15, 2023",
  },
  {
    img: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    title: "Starry Night",
    description: "A mesmerizing night sky filled with stars.",
    date: "October 20, 2023",
  },
];

export const academicPrograms = [
  {
    title: "Early Years",
    payload: "Play-based learning, phonics, expressive art & movement.",
    badge: "Foundation",
  },
  {
    title: "Middle School",
    payload: "Inquiry-led Science, Math, Social Studies, and Hindi.",
    badge: "Holistic",
  },
  {
    title: "Senior Secondary",
    payload: "CBSE / Cambridge pathways, focused labs & counselling.",
    badge: "Future Ready",
  },
];