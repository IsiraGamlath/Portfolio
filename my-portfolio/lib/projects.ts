

export type Project = {
  slug: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  stack: string[];
  screenshots: string[]; // paths under /public
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "BrainLink",
    id: "01",
    title: "BrainLink ",
    subtitle: "Study Group Hub — MERN Stack Platform",
    description:
      "BrainLink Study Group Hub, a platform that helps university students connect, form study groups, request peer help, schedule sessions, and share learning resources in one place.",
    longDescription:
      "BrainLink is a full-stack student collaboration platform that enables study group management, peer help requests, Kuppi session scheduling, and resource sharing with secure role-based access. It includes smart group matching, real-time workflow management, notifications, admin moderation, and RESTful APIs, demonstrating strong frontend–backend integration, MongoDB schema design, authentication, and collaborative software development practices.",
    stack: ["Java", "MERN", "React.js", "MongoDB", "TailwindCSS", "JWT"],
    screenshots: ["/projects/BrainLink/1.png", "/projects/BrainLink/2.png","/projects/BrainLink/3.png","/projects/BrainLink/4.png"],
    repoUrl: "https://github.com/IsiraGamlath/BRAIN-LINK.git",
  },
  {
    slug: "ayumanthra",
    id: "02",
    title: "AyuManthra",
    subtitle: "Ayurvedic wellness platform",
    description:
      "A MERN platform coordinating patients, doctors, and suppliers.",
    longDescription:
      "AyuManthra is a full-stack e-commerce platform for herbal products featuring secure role-based authentication, product and inventory management, shopping cart, order processing, payment workflow, and delivery tracking. The application demonstrates scalable MERN stack architecture, REST API development, database design, and complete e-commerce functionality.",
    stack: ["MERN Stack","MongoDB", "Express", "React", "Node.js"],
    screenshots: ["/projects/ayumanthra/1.png","/projects/ayumanthra/2.png","/projects/ayumanthra/3.png"],
    repoUrl: "https://github.com/IsiraGamlath/AYUMANTHRA.git",
  },
  {
    slug: "CarServe",
    id: "03",
    title: "CarServe ",
    subtitle: "Vehicle rental management system",
    description:
      "Developed a PHP and MySQL-based vehicle rental management system with booking, customer, and vehicle management features — including a user-friendly interface and secure authentication.",
    longDescription:
      "Vehicle Rental System is a web-based management application that simplifies vehicle reservations, customer management, and rental operations. The system provides booking management, vehicle availability tracking, and administrative controls while demonstrating CRUD operations, relational database design, and backend development using PHP and MySQL.",
    stack: ["PHP", "MySQL", "Java", "HTML", "CSS", "JavaScript"],
    screenshots: [],
    repoUrl: "",
  },
  {
    slug: "SmartCampusOperationsHub",
    id: "04",
    title: "Smart Campus Operations Hub",
    subtitle: "University Resource & Maintenance Management System",
    description:
      "Developed a full-stack university management platform using Spring Boot and React for facility bookings, maintenance ticketing, notifications, and role-based access control with OAuth 2.0 authentication.",
    longDescription:
      "Smart Campus Operations Hub is a university resource management platform that streamlines facility bookings, asset management, and maintenance workflows. The system supports booking approvals, conflict detection, maintenance ticketing with file attachments, technician assignment, notifications, and secure Google OAuth authentication with role-based access, showcasing scalable REST API development, workflow automation, CI/CD, and enterprise application design.",
    stack: ["Spring Boot","Java","React.js","MongoDB","TailwindCSS","OAuth 2.0","JWT","GitHub Actions"],
    screenshots: ["/projects/SmartCampusOperationsHub/9.png", "/projects/SmartCampusOperationsHub/1.png", "/projects/SmartCampusOperationsHub/2.png", "/projects/SmartCampusOperationsHub/3.png","/projects/SmartCampusOperationsHub/4.png","/projects/SmartCampusOperationsHub/5.png","/projects/SmartCampusOperationsHub/6.png","/projects/SmartCampusOperationsHub/7.png","/projects/SmartCampusOperationsHub/8.png"],
    repoUrl: "https://github.com/IsiraGamlath/Smart-Campus-Operations-Hub.git",
  },
  {
    slug: "TrendingTokensDashboard",
    id: "05",
    title: "Trending Tokens Dashboard",
    subtitle: "Next.js cryptocurrency dashboard",
    description:
      "A Next.js web application that displays trending Solana tokens, wallet information, and integrates with external cryptocurrency APIs.",
    longDescription:
      "Trending Tokens Dashboard is a modern cryptocurrency tracking application built with Next.js that integrates the Solana ecosystem to display real-time trending tokens, wallet balances, and token details. The project demonstrates third-party API integration, responsive UI development, blockchain data visualization, and modern frontend development practices.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Solana Tracker API"],
    screenshots: [],
    repoUrl: "https://github.com/IsiraGamlath/Trending-Tokens.git",
  },
  {
    slug: "TravelMate",
    id: "06",
    title: "Travel Mate",
    subtitle: "Android Travel Guiding Mobile App",
    description:
      "Designed and developed a mobile travel planning application interface using Android Studio and Figma.",
    longDescription:
      "Travel Mate is an individual mobile application project focused on helping users plan and organize their travel experiences. I designed and developed the application interface, created user flows, and implemented a user-friendly mobile experience using Android Studio and Figma. The project demonstrates independent development skills, UI/UX design, and the ability to transform ideas into functional applications.",
    stack: ["Kotlin", "Android Studio", "MPAndroidChart"],
    screenshots: [],
    repoUrl: "",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}