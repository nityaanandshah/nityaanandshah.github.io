/**
 * PORTFOLIO DATA FILE
 * ====================
 * This file contains all content for the portfolio website.
 * 
 * HOW TO UPDATE:
 * - To add a new project: Append a new object to the `projects` array below
 * - To remove a project: Delete the corresponding object from `projects`
 * - To add/remove experience: Modify the `experience` array
 * - To update skills: Modify the arrays in the `skills` object
 * 
 * No component changes are needed for content updates!
 */

export const personalInfo = {
  name: "Nitya Anand Shah",
  title: "Software Engineer",
  email: "nityashah2801@gmail.com",
  phone: "+91 7621070728",
  location: "Pune, India",
  tagline: "Crafting scalable systems and turning complex problems into elegant solutions",
  resumeUrl: "https://drive.google.com/file/d/1cgbMDfs84YO1EYogG_cvcD37rqoaC6N_/view?usp=sharing",
  web3formsKey: "02981efd-1b2c-4c78-aed9-75c5b4eb114b", // Web3Forms access key
  social: {
    linkedin: "https://www.linkedin.com/in/nitya-anand-shah-5b059221a/",
    github: "https://github.com/nityaanandshah",
  },
};

export const aboutContent = {
  summary: `Hey! I'm a Software Engineer at BNY with a strong foundation in computer science from IIT Jodhpur. 
  I specialize in building scalable full-stack applications—from Spring Boot microservices that streamline enterprise workflows to intuitive Angular frontends that improve user productivity by 30%. 
  
  At BNY, I've designed systems that slash manual processing time by 40% and built enterprise-scale platforms supporting 1,000+ concurrent users with real-time feedback systems. 
  I've also created AeroVista, a 3D flight visualization tool using WebGL and astronomical algorithms to predict sun exposure and optimal viewing windows for 60+ airports.
  Previously, I architected a microservices-based Healthcare Management System with Docker/Kubernetes deployment, and contributed to rural COVID-19 contact tracing through data analysis. 
  
  I'm passionate about transforming ideas into impactful solutions through clean code, thoughtful architecture, and data-driven insights.`,
  highlights: [
    "Full Stack Development with Spring Boot, Angular, and React",
    "Microservices Architecture & Cloud Deployment",
    "AI/LLM Integration & Real-time Systems",
    "Data Analysis & Performance Optimization",
  ],
};

/**
 * SKILLS
 * Grouped by category. Add or remove skills as needed.
 * Top skills in each category are most relevant to FAANG companies.
 */
export const skills = {
  programming: {
    highlights: ["Java", "Python", "TypeScript", "Go", "C++", "JavaScript"],
    additional: ["C", "SQL"],
  },
  web: {
    highlights: ["React", "Node.js", "WebSocket", "Spring Boot", "Angular"],
    additional: ["Express.js", "RESTful APIs", "HTML", "CSS", "Tailwind CSS", "WebGL", "Three.js"],
  },
  databases: {
    highlights: ["PostgreSQL", "Redis", "MySQL", "MongoDB", "Oracle SQL"],
    additional: [],
  },
  ml: {
    highlights: ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "Pandas", "Keras"],
    additional: ["Matplotlib", "Graph Algorithms"],
  },
  tools: {
    highlights: ["Distributed Systems", "Microservices", "CI/CD", "Kubernetes", "Docker", "Git"],
    additional: ["GitHub Actions", "RabbitMQ", "JWT", "SonarQube", "Swagger UI", "Vite", "ESLint", "MATLAB"],
  },
};

/**
 * EXPERIENCE
 * Add new roles by appending to this array.
 * Most recent first.
 */
export const experience = [
  {
    id: "bny",
    role: "Full Stack Software Developer",
    company: "BNY",
    location: "Pune, India",
    startDate: "July 2024",
    endDate: "Present",
    techStack: ["Spring Boot", "Angular", "Oracle SQL", "RESTful APIs", "LLM Integration"],
    bullets: [
      "Designed and implemented Spring Boot–based microservices to automate and streamline document-heavy banking workflows, reducing manual processing time by ~40% and improving system reliability through RESTful API integrations",
      "Developed a modular Angular front end with reusable UI components and state-management best practices, improving user task completion speed by 30%, backed by optimized Oracle SQL schemas for high-volume transactional data",
      "Built Prompt'athon, an AI-driven platform enabling large-scale prompt-writing competitions, supporting 1,000+ concurrent users, multiple engagement modes, and real-time scoring pipelines",
      "Integrated LLM-powered suggestion engines to provide sub-second, real-time feedback to users, enhancing engagement by 50% and ensuring end-to-end scalability using Angular, Spring Boot microservices, and Oracle SQL performance tuning",
    ],
  },
  {
    id: "publicis-sapient",
    role: "Software Development Intern",
    company: "Publicis Sapient",
    location: "Remote",
    startDate: "June 2023",
    endDate: "July 2023",
    techStack: ["Spring Boot", "MongoDB", "RabbitMQ", "Docker", "Kubernetes", "JWT"],
    bullets: [
      "Architected and implemented the Patient Management module within a distributed HealthCare Management System using a microservices architecture, ensuring loose coupling, independent scalability, and fault isolation",
      "Designed MongoDB document schemas optimized for high-throughput patient data operations, enabling efficient CRUD workflows and reducing query latency",
      "Exposed secure RESTful API endpoints backed by JWT-based authentication and role-based authorization, ensuring HIPAA-aligned data access controls and secure inter-service interaction",
      "Integrated RabbitMQ as an event-driven messaging layer for asynchronous, reliable communication between microservices, improving throughput and system resilience under load",
      "Containerized and deployed the full microservices stack using Docker and Kubernetes, implementing auto-scaling, health checks, and rolling updates to ensure high availability and streamlined CI/CD workflows",
    ],
  },
  {
    id: "bj-medical",
    role: "Data Analysis Intern",
    company: "BJ Medical College",
    location: "Remote",
    startDate: "June 2022",
    endDate: "July 2022",
    techStack: ["Python", "Pandas", "Matplotlib"],
    bullets: [
      "Assisted the Rural COVID-19 Contact Tracing Team Coordinator in analyzing outbreak patterns and mapping high-risk transmission clusters across villages",
      "Performed exploratory data analysis (EDA) on rural COVID-19 datasets using Python, Pandas, and Matplotlib to identify anomalies, demographic trends, and data-quality gaps",
      "Developed feature categories for clinical symptoms, exposure triggers, and transmission indicators, enabling more accurate classification of rural epidemic patterns and supporting data-driven decision-making",
    ],
  },
  {
    id: "3-steps-ahead",
    role: "Web Development Intern",
    company: "3 Steps Ahead Technology",
    location: "Remote",
    startDate: "May 2022",
    endDate: "June 2022",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    bullets: [
      "Designed and delivered a fully responsive client dashboard from scratch, improving mobile accessibility and reducing page load time by 30% through optimized asset delivery",
      "Collaborated closely with stakeholders to gather requirements, iterate on design feedback, and deliver a pixel-perfect UI that exceeded client expectations",
      "Built reusable React components following modern best practices, reducing code redundancy by 40% and establishing a component library for future development cycles",
    ],
  },
];

/**
 * PROJECTS
 * To add a new project: Append a new object with the same structure.
 * To remove a project: Delete the object from the array.
 */
export const projects = [
  {
    id: "playforge",
    name: "PlayForge",
    description: "Multiplayer gaming platform with real-time WebSocket gameplay, ELO matchmaking, and tournament systems.",
    techStack: ["Go", "React", "TypeScript", "PostgreSQL", "Redis", "WebSocket", "Docker"],
    bullets: [
      "Built Go backend handling 100+ concurrent WebSocket connections with goroutines for real-time gameplay across 4 multiplayer games",
      "Implemented ELO matchmaking algorithm with Redis achieving O(log n) lookups and sub-100ms pairing times",
      "Designed Redis pub/sub architecture for horizontal scaling and distributed state synchronization",
      "Created tournament bracket system with spectator mode supporting 50+ concurrent viewers per match",
    ],
    githubUrl: "https://github.com/nityaanandshah/PlayForge",
    demoUrl: "https://play-forge-frontend-nitya.vercel.app",
    fullDescription: "A high-performance multiplayer gaming platform built with Go, featuring real-time WebSocket gameplay, intelligent ELO-based matchmaking, tournament brackets, and spectator mode.",
    problemStatement: "You join an online game and immediately hit lag. As a beginner, you're matched against a pro (terrible matchmaking). During peak hours when thousands connect, the system crashes. Connections drop, games freeze, you're kicked out. Try to spectate a tournament? That slows down everyone's game. The problem? Traditional platforms can't handle concurrent connections or scale under load. Their monolithic architecture buckles, matchmaking fails, and the whole experience breaks.",
    approach: "My solution to these problems:\n\n• Lag and connection drops: Built WebSocket infrastructure with Go's goroutines and channels for lock-free game state updates. Added connection pooling and automatic reconnection.\n\n• Unfair matchmaking: Designed ELO-based matchmaking using Redis sorted sets. Pairs players in O(log n) time with skill-based matching in under 100ms.\n\n• System crashes at scale: Architected Redis pub/sub for horizontal scaling. Multiple backend servers sync game state in real-time behind a load balancer.\n\n• Spectators slow down games: Built fan-out messaging with separate Redis channels per game room. 50+ spectators can watch without impacting player performance.\n\n• Slow tournament brackets: Implemented single-elimination tree algorithms with automatic bye-round handling.\n\n• Database queries slow under load: Optimized PostgreSQL with connection pooling, composite indexes, and write-through caching (Redis first, async persistence). Reduced query latency by 60%.\n\n• Frontend: React TypeScript with WebSocket reconnection and optimistic UI updates for instant feel. Dockerized entire stack—45MB Go binary, 12MB frontend.",
  },
  {
    id: "terramtes",
    name: "TerraMates",
    description: "A social platform to find and connect with compatible travel mates for your adventures.",
    techStack: ["Next.js 16", "React 19", "Socket.io", "NextAuth.js", "PostgreSQL", "Prisma", "Cloudinary", "Tailwind CSS"],
    bullets: [
      "Built real-time group chat with Socket.io for instant coordination",
      "Created intelligent matching system with advanced filtering by destination, dates, budget, and travel style",
      "Implemented secure authentication with NextAuth.js and PostgreSQL database via Prisma ORM",
      "Integrated Cloudinary for seamless image uploads and destination photo sharing",
      "Designed mobile-first, responsive UI for effortless trip planning",
    ],
    githubUrl: "https://github.com/nityaanandshah/Trip-Companion",
    demoUrl: "https://trip-companion.onrender.com/",
    fullDescription: "A dynamic full-stack social platform that brings solo travelers together by helping them find compatible travel companions who match their vibe, budget, and adventure style.",
    problemStatement: "Ever wanted to explore the world but couldn't find the right travel buddy? Solo travelers struggle to find companions who match their vibe, budget, and adventure style. Traditional social platforms weren't built for travelers—they lack tools to discover compatible travel mates, coordinate trip plans in real-time, and stay connected while organizing adventures. You need a platform that understands travel-specific needs, not just generic social networking.",
    approach: "My solution to these problems:\n\n• Finding compatible travel companions: Created an intelligent matching system with multi-parameter filtering (destination, dates, budget range, duration with ±2 day tolerance, and travel style). Algorithm matches travelers based on compatibility scores.\n\n• Real-time coordination: Built Socket.io infrastructure with room-based architecture for instant group chats. Added typing indicators, read tracking, and online presence via Map data structures.\n\n• Planning trips together: Developed request/approval workflow with state machine (pending → approved/rejected) and atomic operations. Prevents duplicate requests and handles edge cases.\n\n• Staying connected seamlessly: Implemented authentication middleware for WebSocket connections with automatic reconnection handling. Smart offline notification system that aggregates alerts.\n\n• Managing trip data: PostgreSQL with Prisma ORM for complex relational schema (7 models with cascading deletes and composite indexes). NextAuth.js v5 for session management with protected API routes.\n\n• Sharing destinations: Integrated Cloudinary for optimized image delivery. Mobile-first responsive UI with Tailwind CSS for effortless planning on any device.\n\n• Robust backend: RESTful API design with 25+ endpoints, Zod schema validation, and comprehensive error handling. Built with Next.js 16 App Router and React 19 Server Components.",
  },
  {
    id: "aerovista",
    name: "AeroVista",
    description: "Interactive 3D flight path visualizer that predicts sun exposure, optimal viewing sides, and comfort zones throughout your journey.",
    techStack: ["React", "TypeScript", "WebGL", "globe.gl", "shadcn/ui", "Tailwind CSS", "Vite"],
    bullets: [
      "Built 3D globe with Three.js rendering flight paths and dynamic day/night atmospheric effects",
      "Integrated Jean Meeus solar algorithms and Haversine calculations for precise sun exposure predictions",
      "Developed aircraft analysis with custom bearing logic showing which side receives direct sunlight",
      "Built recommendations engine analyzing sun data across 100+ airports for optimal viewing opportunities",
    ],
    githubUrl: "https://github.com/nityaanandshah/aerovista.github.io",
    demoUrl: "https://nityaanandshah.github.io/aerovista.github.io/",
    fullDescription: "A sophisticated 3D flight visualization platform that uses astronomical calculations to predict sun exposure, helping travelers choose the perfect seat for views, comfort, and photography.",
    problemStatement: "You're excited for your window seat, but hours into the flight, the sun is relentlessly burning through your window, forcing you to shut the shade. Or even more frustrating—you're staring at an empty sky while passengers on the opposite side witness an incredible sunset you'll never see. No airline or travel site warns you about sun exposure, tells you which side offers the best views, or helps you avoid hours of uncomfortable glare. Every flight is a coin flip, and when you lose, your journey is ruined.",
    approach: "My solution to these problems:\n\n• 3D flight visualization: Leveraged Three.js and globe.gl to create an interactive Earth model that renders your complete flight path with dynamic day/night atmospheric effects.\n\n• Astronomical precision: Integrated Jean Meeus solar position algorithms and Haversine geodesic calculations to predict exact sun angles, altitude, and exposure patterns throughout the entire journey.\n\n• Real-time aircraft analysis: Custom bearing logic determines which side (left/right) receives direct sunlight at every moment, displayed through an intuitive visual aircraft diagram with accurate directional indicators.\n\n• Interactive timeline interface: Users can scrub through the flight duration with playback controls and color-coded markers highlighting sunrise, sunset, and peak glare moments for complete journey preview.\n\n• Intelligent recommendations engine: Analytics dashboard processes sun exposure data across 60+ airports, delivering actionable insights for photography opportunities, optimal viewing windows, and maximum comfort during the flight.",
  },
];

/**
 * EDUCATION
 * Add or modify education entries as needed.
 */
export const education = [
  {
    id: "iit-jodhpur",
    degree: "B.Tech. in Computer Science and Engineering",
    institution: "IIT Jodhpur",
    location: "Jodhpur, India",
    period: "2020 - 2024",
    grade: "CGPA: 8.11/10",
    highlights: [
      "Data Structures and Algorithms",
      "Design and Analysis of Algorithms",
      "Software Engineering",
      "Operating Systems",
      "Database Systems",
      "Computer Networks",
    ],
    additionalCourses: [
      "Machine Learning",
      "Deep Learning",
      "Cybersecurity",
      "Introduction to Computer Science",
      "Probability and Statistics",
      "Linear Algebra and Calculus",
      "Maths for Computing",
      "Signals and Systems",
      "Computer Architecture",
      "Digital Design",
      "Embedded Systems",
    ],
  },
  {
    id: "kv-sac",
    degree: "Senior Secondary (Class 12)",
    institution: "Kendriya Vidyalaya S.A.C",
    location: "Ahmedabad, Gujarat",
    period: "2006 - 2020",
    grade: "94.4%",
    highlights: [],
  },
];

/**
 * PUBLICATIONS
 * Add research papers or publications here.
 */
export const publications = [
  {
    id: "thyroid-paper",
    title: "Deep Learning-Based Diagnosis of Thyroid Tumors Using Histopathology Images",
    venue: "SPIE Medical Imaging 2024",
    track: "Computer-Aided Diagnosis",
    year: "2024",
    url: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12927/129273D/Deep-learning-based-diagnosis-of-thyroid-tumors-using-histopathology-images/10.1117/12.3006242.short",
  },
];

/**
 * BLOG POSTS
 * Add blog posts here. Can be extended to load from markdown files.
 */
export const blogPosts = [
  {
    id: "microservices-scale",
    title: "Building Scalable Microservices: Lessons from Enterprise Development",
    excerpt: "Key insights from designing Spring Boot microservices for enterprise banking workflows. Learn practical approaches to API design, performance optimization, and handling high-volume transactions.",
    date: "2024-11-15",
    readTime: "5 min read",
    category: "System Design",
    tags: ["Microservices", "Spring Boot", "Enterprise Architecture"],
    // Future: contentMarkdown: "path/to/markdown/file.md"
  },
  {
    id: "webgl-flight-visualization",
    title: "Building 3D Flight Visualizations with WebGL and Astronomical Calculations",
    excerpt: "Creating AeroVista taught me how to combine WebGL rendering with astronomical algorithms. From implementing Jean Meeus solar position formulas to optimizing Three.js performance, here's what I learned.",
    date: "2024-10-28",
    readTime: "6 min read",
    category: "Web Development",
    tags: ["WebGL", "Three.js", "3D Visualization", "Algorithms"],
    // Future: contentMarkdown: "path/to/markdown/file.md"
  },
  {
    id: "early-career-swe",
    title: "First Year as a Software Engineer: What I Wish I Knew",
    excerpt: "Reflections on transitioning from IIT to industry. Code quality matters more than quantity, asking questions is a strength, and imposter syndrome is universal.",
    date: "2024-09-20",
    readTime: "4 min read",
    category: "Career",
    tags: ["Career Growth", "Software Engineering", "Learning"],
    // Future: contentMarkdown: "path/to/markdown/file.md"
  },
];

/**
 * NAVIGATION LINKS
 * Used for the sticky navigation bar.
 */
export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  // { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];
