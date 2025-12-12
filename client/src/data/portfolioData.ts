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
  
  At BNY, I've designed systems that slash manual processing time by 40% and built Prompt'athon, an AI-powered platform supporting 1,000+ concurrent users with real-time LLM feedback. 
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
 */
export const skills = {
  programming: ["Java", "Python", "JavaScript", "TypeScript", "C++", "C"],
  web: ["React", "Angular", "Node.js", "Express.js", "Spring Boot", "HTML", "CSS", "Tailwind CSS", "RESTful APIs"],
  databases: ["Oracle SQL", "MySQL", "MongoDB"],
  ml: ["NumPy", "Pandas", "scikit-learn", "PyTorch", "Keras", "TensorFlow", "Matplotlib"],
  tools: ["Docker", "Kubernetes", "Git", "GitHub Actions", "Vite", "RabbitMQ", "JWT", "SonarQube", "Swagger UI", "MATLAB"],
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
    id: "promptathon",
    name: "Prompt'athon",
    description: "AI-powered platform to enhance prompt writing skills with contest-style participation and multiple engagement modes.",
    techStack: ["Angular", "Spring Boot", "Oracle SQL"],
    bullets: [
      "Built contest-style flows with multiple engagement modes",
      "Integrated AI-generated suggestions for real-time feedback",
      "Ensured scalability and responsiveness for enterprise use",
    ],
    githubUrl: null,
    demoUrl: null,
    fullDescription: "An enterprise AI-powered platform designed to help employees improve their prompt engineering skills through gamified learning and real-time AI feedback.",
    problemStatement: "As AI tools become ubiquitous in enterprise workflows, employees struggle with writing effective prompts that yield high-quality results. Traditional training methods are time-consuming and lack engagement, leading to underutilization of AI capabilities.",
    approach: "Developed a full-stack application with Angular frontend and Spring Boot microservices backend. Implemented contest-style challenges with multiple difficulty levels, real-time AI-powered feedback using GPT models, and a scoring system to track improvement. Integrated Oracle SQL for persistent data storage and user progress tracking.",
  },
  {
    id: "teaching-copilot",
    name: "Teaching Copilot",
    description: "Educational tool using Meta's Llama 2 for text summarization, Q&A assistance, and revision support with quizzes.",
    techStack: ["React", "Node.js", "Socket.io", "Llama 2"],
    bullets: [
      "Leveraged Llama 2 for intelligent text summarization",
      "Built real-time Q&A assistance with prompt engineering",
      "Implemented quiz-based revision for enhanced learning",
    ],
    githubUrl: "https://github.com/nityaanandshah",
    demoUrl: null,
    fullDescription: "An intelligent educational assistant that helps students learn more effectively by summarizing complex materials, answering questions in real-time, and generating personalized quizzes.",
    problemStatement: "Students often struggle with information overload when studying complex topics. They need quick summaries, instant clarification on doubts, and effective revision tools. Traditional study methods are passive and don't provide immediate feedback.",
    approach: "Built a React-based frontend with real-time WebSocket communication using Socket.io. Integrated Meta's Llama 2 LLM for natural language understanding and generation. Implemented a Node.js backend to handle model inference, prompt engineering, and session management. Created an adaptive quiz engine that generates questions based on study materials.",
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
    problemStatement: "Ever wanted to explore the world but couldn't find the right travel buddy? Solo travelers face the challenge of finding companions who match their vibe, budget, and adventure style. Traditional social platforms weren't built for travelers—they lack the tools to discover compatible travel mates, coordinate plans, and stay connected in real-time while planning epic adventures together.",
    approach: "Built a dynamic full-stack platform that brings travelers together instantly. Leveraged Next.js 16 and React 19 for a lightning-fast, server-rendered experience that feels native on any device. Integrated Socket.io for real-time group chats where travelers can coordinate plans, see who's online, and get instant responses. Created an intelligent matching system with advanced filtering to help users discover perfect travel companions based on destination, dates, budget, and travel style. Implemented secure authentication with NextAuth.js and a robust PostgreSQL database via Prisma for managing complex relationships between users, trips, and conversations. Added Cloudinary for seamless image uploads so travelers can share inspiring destination photos. Designed a sleek, mobile-first UI with Tailwind CSS that makes trip planning feel effortless and fun.",
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
    id: "llm-integration-production",
    title: "Integrating LLMs in Production: Real-time Feedback at Scale",
    excerpt: "Building Prompt'athon taught me the challenges of integrating LLMs in enterprise applications. From managing API costs to achieving sub-second response times, here's what worked.",
    date: "2024-10-28",
    readTime: "6 min read",
    category: "AI/ML",
    tags: ["LLM", "AI Integration", "Performance Optimization"],
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
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];
