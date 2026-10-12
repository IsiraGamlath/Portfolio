export type Project = {
  slug: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features?: {
    title: string;
    description: string;
  }[];

  challenge?: {
    title: string;
    description: string;
  };
  architecture?: {
    headline?: string;
    steps: {
      step: string;
      title: string;
      tool?: string;
      description: string;
    }[];
  };
  longDescription: string[];
  stack: string[];
  screenshots: string[]; // paths under /public
  screenshotLayout?: "contain" | "default";
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "Simple-Site",
    id: "01",
    title: "A Simple Coffee Site",
    subtitle: "Practice project — Next.js, AWS ECS Fargate, CI/CD",
    description:
      "A small Next.js practice project deployed to AWS ECS Fargate with an automated CI/CD pipeline using GitHub Actions, Docker, Amazon ECR, and an Application Load Balancer.",
    longDescription: [
      "I recently deployed a simple Next.js application to AWS and built an automated CI/CD pipeline: ",
      "GitHub → GitHub Actions → Docker → ECR → ECS Fargate → Application Load Balancer → Live App",
      "The pipeline now automatically handles:",
      "• Linting and building the application",
      "• Docker image creation and tagging",
      "• Pushing images to Amazon ECR",
      "• Creating new ECS task definition revisions",
      "• Deploying updates to ECS",
      "• Waiting for ALB health checks before completing the deployment",
      "The process came with a few challenges — including IAM AccessDeniedException errors, iam:PassRole, ECS permissions, security group configuration, ALB connectivity, and making sure the latest image was actually running.",
      "After troubleshooting those issues, a git push can now take a change from code all the way to a running container on AWS.",
    ],
    architecture: {
      headline: "Automated AWS CI/CD Pipeline & Zero-Downtime Deployment",
      steps: [
        {
          step: "01",
          title: "Git Push",
          tool: "GitHub",
          description: "Developer pushes commit or merges PR into the production branch, triggering automated webhooks.",
        },
        {
          step: "02",
          title: "Automated Build & Lint",
          tool: "GitHub Actions",
          description: "Runner executes Next.js linting and build tests to safeguard code quality before container packaging.",
        },
        {
          step: "03",
          title: "Container Packaging",
          tool: "Docker",
          description: "Generates an optimized standalone container image tagged with the unique commit SHA.",
        },
        {
          step: "04",
          title: "Image Registry",
          tool: "Amazon ECR",
          description: "Pushes and stores immutable container images in Amazon Elastic Container Registry with IAM authentication.",
        },
        {
          step: "05",
          title: "Serverless Orchestration",
          tool: "AWS ECS Fargate",
          description: "Generates new ECS task definition revision and orchestrates container provisioning without managing servers.",
        },
        {
          step: "06",
          title: "Health Check & Route",
          tool: "AWS ALB",
          description: "Application Load Balancer verifies target group health checks before switching live traffic seamlessly.",
        },
      ],
    },
    stack: [
      "GitHub",
      "GitHub Actions",
      "Docker",
      "ECR",
      "AWS",
      "CI/CD pipeline",
    ],
    screenshots: [
      "/projects/Simple-Site/1.png",
      "/projects/Simple-Site/4.png",
      "/projects/Simple-Site/5.png",
      "/projects/Simple-Site/2.png",
      "/projects/Simple-Site/3.png",
    ],
    repoUrl: "https://github.com/IsiraGamlath/Simple-Site.git",
  },
  {
    slug: "SportSpace",
    id: "02",
    title: "SportSpace",
    subtitle: "Community Sports Facility Booking & Management Platform",
    description:
      "A full-stack sports booking platform connecting players, facility managers, and coaches. SportSpace streamlines venue reservations, payment processing, booking changes, and facility administration through a Flutter mobile app and a Next.js admin portal.",

    longDescription: [
      "SportSpace was developed for the Year 3 Human-Computer Interaction (HCI) module at SLIIT. Our team surveyed 26 players, facility managers, and coaches to identify real-world challenges in sports facility reservations. More than 58% of respondents reported experiencing double-booking conflicts, highlighting the need for a more reliable booking experience.",

      "My primary contribution focused on the end-to-end player booking workflow and the facility manager's web portal, with an emphasis on booking conflict resolution, payment workflows, and reservation management.",
    ],

    features: [
      {
        title: "End-to-End Booking Management",
        description:
          "Implemented the player booking workflow with date selection, available time-slot selection, reservation management, rescheduling, and cancellations.",
      },
      {
        title: "Booking Conflict Resolution",
        description:
          "Designed a conflict-handling experience that alerts players when a selected slot becomes unavailable, refreshes the schedule, and suggests alternative available time slots.",
      },
      {
        title: "Stripe Payment Integration",
        description:
          "Integrated Stripe card checkout and payment verification into the booking workflow to support online payments.",
      },
      {
        title: "Bank Slip Upload & Verification",
        description:
          "Implemented bank-slip image uploads using Multer and Cloudinary, enabling facility managers to review payment evidence and approve bookings.",
      },
      {
        title: "Facility Manager Admin Portal",
        description:
          "Developed Next.js web functionality for reviewing payment slips, managing booking approvals, and maintaining facility schedules.",
      },
      {
        title: "Usability-Focused Design",
        description:
          "Applied insights from initial user research to address common reservation problems, simplify booking management, and provide clear feedback when booking conflicts occur.",
      },
    ],

    challenge: {
      title: "Handling Simultaneous Bookings",
      description:
        "A major challenge was handling multiple players attempting to reserve the same popular time slot. The solution focuses on detecting unavailable slots, notifying affected players, refreshing availability, and suggesting alternative times instead of leaving users with a generic error. Reliable prevention of duplicate reservations also requires appropriate server-side validation and database-level concurrency controls.",
    },

    architecture: {
      headline: "End-to-End Booking & Conflict Resolution Flow",
      steps: [
        {
          step: "01",
          title: "Player Selection",
          tool: "Flutter Mobile App",
          description: "Player browses sports facilities, chooses date, and requests an open slot from real-time venue availability.",
        },
        {
          step: "02",
          title: "Slot Locking & Check",
          tool: "Node.js / Express API",
          description: "API verifies immediate slot availability and applies an atomic temporary hold to prevent double-booking collisions.",
        },
        {
          step: "03",
          title: "Payment Processing",
          tool: "Stripe / Cloudinary",
          description: "Handles secure Stripe card payments or accepts bank transfer slip uploads via Multer to Cloudinary.",
        },
        {
          step: "04",
          title: "State Persistence",
          tool: "MongoDB & Mongoose",
          description: "Persists confirmed booking record, generates receipt token, and invalidates booked time across client pools.",
        },
        {
          step: "05",
          title: "Facility Management",
          tool: "Next.js Portal",
          description: "Venue managers review bank slips, track court schedules, and manage cancellations with instant status sync.",
        },
      ],
    },

    stack: [
      "Flutter",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Firebase Authentication",
      "Stripe",
      "Multer",
      "Cloudinary",
      "REST APIs",
    ],

    screenshots: [
      "/projects/SportSpace/1.png",
      "/projects/SportSpace/2.png",
      "/projects/SportSpace/3.png",
      "/projects/SportSpace/4.png",
      "/projects/SportSpace/5.png",
      "/projects/SportSpace/6.png",
      "/projects/SportSpace/7.png",
      "/projects/SportSpace/8.png",
      "/projects/SportSpace/9.png",
      "/projects/SportSpace/10.png",
    ],
    screenshotLayout: "contain",

    repoUrl: "https://github.com/IsiraGamlath/SportSpace.git",
  },

  {
    slug: "BrainLink",
    id: "03",
    title: "BrainLink ",
    subtitle: "Study Group Hub — MERN Stack Platform",
    description:
      "BrainLink Study Group Hub, a platform that helps university students connect, form study groups, request peer help, schedule sessions, and share learning resources in one place.",
    longDescription: [
      "BrainLink is a full-stack student collaboration platform that enables study group management, peer help requests, Kuppi session scheduling, and resource sharing with secure role-based access.",
      "It includes smart group matching, real-time workflow management, notifications, admin moderation, and RESTful APIs, demonstrating strong frontend–backend integration, MongoDB schema design, authentication, and collaborative software development practices.",
    ],
    stack: ["Java", "MERN", "React.js", "MongoDB", "TailwindCSS", "JWT"],
    screenshots: [
      "/projects/BrainLink/1.png",
      "/projects/BrainLink/2.png",
      "/projects/BrainLink/3.png",
      "/projects/BrainLink/4.png",
    ],
    repoUrl: "https://github.com/IsiraGamlath/BRAIN-LINK.git",
  },
  {
    slug: "ayumanthra",
    id: "04",
    title: "AyuManthra",
    subtitle: "Ayurvedic wellness platform",
    description:
      "A MERN platform coordinating patients, doctors, and suppliers.",
    longDescription: [
      "AyuManthra is a full-stack e-commerce platform for herbal products featuring secure role-based authentication, product and inventory management, shopping cart, order processing, payment workflow, and delivery tracking.",
      "The application demonstrates scalable MERN stack architecture, REST API development, database design, and complete e-commerce functionality.",
    ],
    stack: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
    screenshots: [
      "/projects/ayumanthra/1.png",
      "/projects/ayumanthra/2.png",
      "/projects/ayumanthra/3.png",
    ],
    repoUrl: "https://github.com/IsiraGamlath/AYUMANTHRA.git",
  },
  {
    slug: "CarServe",
    id: "05",
    title: "CarServe ",
    subtitle: "Vehicle rental management system",
    description:
      "Developed a PHP and MySQL-based vehicle rental management system with booking, customer, and vehicle management features — including a user-friendly interface and secure authentication.",
    longDescription: [
      "Vehicle Rental System is a web-based management application that simplifies vehicle reservations, customer management, and rental operations.",
      "The system provides booking management, vehicle availability tracking, and administrative controls while demonstrating CRUD operations, relational database design, and backend development using PHP and MySQL.",
    ],
    stack: ["PHP", "MySQL", "Java", "HTML", "CSS", "JavaScript"],
    screenshots: [],
    repoUrl: "",
  },
  {
    slug: "SmartCampusOperationsHub",
    id: "06",
    title: "Smart Campus Operations Hub",
    subtitle: "University Resource & Maintenance Management System",
    description:
      "Developed a full-stack university management platform using Spring Boot and React for facility bookings, maintenance ticketing, notifications, and role-based access control with OAuth 2.0 authentication.",
    longDescription: [
      "Smart Campus Operations Hub is a university resource management platform that streamlines facility bookings, asset management, and maintenance workflows.",
      "The system supports booking approvals, conflict detection, maintenance ticketing with file attachments, technician assignment, notifications, and secure Google OAuth authentication with role-based access, showcasing scalable REST API development, workflow automation, CI/CD, and enterprise application design.",
    ],
    stack: [
      "Spring Boot",
      "Java",
      "React.js",
      "MongoDB",
      "TailwindCSS",
      "OAuth 2.0",
      "JWT",
      "GitHub Actions",
    ],
    screenshots: [
      "/projects/SmartCampusOperationsHub/9.png",
      "/projects/SmartCampusOperationsHub/1.png",
      "/projects/SmartCampusOperationsHub/2.png",
      "/projects/SmartCampusOperationsHub/3.png",
      "/projects/SmartCampusOperationsHub/4.png",
      "/projects/SmartCampusOperationsHub/5.png",
      "/projects/SmartCampusOperationsHub/6.png",
      "/projects/SmartCampusOperationsHub/7.png",
      "/projects/SmartCampusOperationsHub/8.png",
    ],
    repoUrl: "https://github.com/IsiraGamlath/Smart-Campus-Operations-Hub.git",
  },
  {
    slug: "TrendingTokensDashboard",
    id: "07",
    title: "Trending Tokens Dashboard",
    subtitle: "Next.js cryptocurrency dashboard",
    description:
      "A Next.js web application that displays trending Solana tokens, wallet information, and integrates with external cryptocurrency APIs.",
    longDescription: [
      "Trending Tokens Dashboard is a modern cryptocurrency tracking application built with Next.js that integrates the Solana ecosystem to display real-time trending tokens, wallet balances, and token details.",
      "The project demonstrates third-party API integration, responsive UI development, blockchain data visualization, and modern frontend development practices.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Solana Tracker API"],
    screenshots: [],
    repoUrl: "https://github.com/IsiraGamlath/Trending-Tokens.git",
  },
  {
    slug: "TravelMate",
    id: "08",
    title: "Travel Mate",
    subtitle: "Android Travel Guiding Mobile App",
    description:
      "Designed and developed a mobile travel planning application interface using Android Studio and Figma.",
    longDescription: [
      "Travel Mate is an individual mobile application project focused on helping users plan and organize their travel experiences.",
      "I designed and developed the application interface, created user flows, and implemented a user-friendly mobile experience using Android Studio and Figma.",
      "The project demonstrates independent development skills, UI/UX design, and the ability to transform ideas into functional applications.",
    ],
    stack: ["Kotlin", "Android Studio", "MPAndroidChart"],
    screenshots: [],
    repoUrl: "",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
