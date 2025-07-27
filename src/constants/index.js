import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  c,
  cpp,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  // New technology imports
  python,
  java,
  numpy,
  scikit,
  seaborn,
  jupyter,
  matplotlib,
  canva,
  // Project images
  kanaquest,
  claritycounsel,
  horizon,
  amongus,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Scikit-learn",
    icon: scikit,
  },
  {
    name: "Seaborn",
    icon: seaborn,
  },
  {
    name: "Jupyter",
    icon: jupyter,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "Canva",
    icon: canva,
  },
];

const experiences = [
  {
    title: "Core Committee Member",
    company_name: "Indian Society for Technical Education - VIT Chapter",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2024 - 2025",
    points: [
      "Developed interactive websites and managed team projects for technical events and initiatives.",
      "Organized and coordinated various technical events, workshops, and competitions.",
      "Enhanced leadership and management skills through team coordination and event planning.",
      "Improved design skills and communication abilities while working with diverse teams.",
      "Certificate: [View Certificate](https://drive.google.com/file/d/1RUztTZtd-CHlEDwwLmfdTotlJpwroyte/view)",
    ],
  },
  {
    title: "MERN Stack Development Trainee",
    company_name: "Ethnus Industrial Certification Program",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2025 - July 2025",
    points: [
      "Completed intensive 2-month training program focused on full-stack development using MERN stack.",
      "Worked on daily mentor-guided tasks to strengthen core concepts in frontend and backend development.",
      "Gained hands-on experience with RESTful APIs, user authentication, routing, and state management.",
      "Developed and deployed a full-fledged MERN stack project as the capstone of the program.",
      "Certificate: [View Certificate](https://drive.google.com/file/d/10bLefoUNjymLPyOzABPr4iW3dfh3dsdo/view?usp=sharing)",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "KanaQuest - Japanese Learning App",
    description:
      "A full-stack MERN application designed to make learning Japanese engaging and efficient. Features interactive quizzes for Hiragana, Katakana, Kanji, and vocabulary with gamified learning, XP tracking, leaderboards, and personalized dashboards. Built with modern tech stack focusing on user experience and mobile responsiveness.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "graphql",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
    ],
    image: kanaquest,
    source_code_link: "https://github.com/kritikaIS/japanese-final-app",
    live_demo_link: "https://kanaquest123.onrender.com/",
  },
  {
    name: "ClarityCounsel - Legal Document Analyzer",
    description:
      "An AI-powered legal document analysis platform that uses FastAPI and Gemini AI to identify ambiguous clauses, provide comprehensive document summaries, and generate revised versions for clarity. Features PDF/TXT upload, automated issue detection, and generates two Google Docs outputs with detailed analysis and modifications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "gemini-ai",
        color: "orange-text-gradient",
      },
      {
        name: "google-docs",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
    ],
    image: claritycounsel,
    source_code_link: "https://github.com/kritikaIS/ClarityCounsel",
  },
  {
    name: "Horizon 2024-25 - ISTE-VIT Tech Fest",
    description:
      "Collaborated in a team to develop the official website for Horizon 2024-25, ISTE-VIT's national-level technical fest. Implemented responsive and interactive UI components using React and Tailwind CSS, creating an engaging platform for showcasing technical events, competitions, and registrations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "responsive",
        color: "orange-text-gradient",
      },
      {
        name: "teamwork",
        color: "blue-text-gradient",
      },
    ],
    image: horizon,
    source_code_link: "https://github.com/Harsh-1-0/Horizon_2024-25",
    live_demo_link: "https://horizon.istevit.in/",
  },
  {
    name: "Among Us IRL - Slot Booking Platform",
    description:
      "Collaborated as part of a team to develop a slot booking platform for the Rivera Among Us event by ISTE-VIT. Enabled login via VIT email IDs, allowing students to select time slots and view their in-game roles (Imposter/Crewmate). Built with modern web technologies for seamless event management and user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "authentication",
        color: "green-text-gradient",
      },
    ],
    image: amongus,
    source_code_link: "https://github.com/Rudragupta8777/Among-Us-Web",
    live_demo_link: "https://amongusirl.istevit.in/",
  },
];

export { services, technologies, experiences, testimonials, projects };
