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
  tagline: "Building scalable systems and solving real-world problems through thoughtful engineering, clean design, and data-driven decision making.",
  resumeUrl: "#", // TODO: Replace with actual resume URL
  social: {
    linkedin: "https://www.linkedin.com/in/nityaanandshah",
    github: "https://github.com/nityaanandshah",
  },
};

export const aboutContent = {
  summary: `I'm a Software Engineer at BNY with a strong foundation in computer science from IIT Jodhpur. 
  I thrive on transforming complex business challenges into elegant technical solutions—whether architecting Spring Boot microservices that handle enterprise-scale workflows, 
  building intuitive frontends with Angular and React, or leveraging machine learning to unlock insights from data. 
  At BNY, I've taken ownership of streamlining document-heavy workflows, reducing processing time while improving user experience. 
  I actively seek out opportunities to learn emerging technologies, collaborate across teams, and deliver measurable impact. 
  My curiosity drives me to explore the intersection of distributed systems, AI, and scalable architecture.
  
  Outside of work, I love mentoring peers and exploring distributed systems and AI research. 
  I believe in staying curious, owning problems end-to-end, and building products that make a meaningful impact.`,
  highlights: [
    "Full Stack Development with Spring Boot, Angular, and React",
    "Microservices Architecture & RESTful APIs",
    "Machine Learning & Data Analysis",
    "Strong foundation in DSA and Systems Design",
  ],
};

/**
 * SKILLS
 * Grouped by category. Add or remove skills as needed.
 */
export const skills = {
  programming: ["C++", "C", "Python", "Java"],
  web: ["HTML", "CSS", "JavaScript", "React", "Angular", "Node.js", "Spring Boot", "MySQL", "MongoDB", "Oracle"],
  ml: ["NumPy", "Pandas", "scikit-learn", "PyTorch", "Keras", "TensorFlow"],
  tools: ["Docker", "Kubernetes", "Git", "MATLAB"],
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
    techStack: ["Spring Boot", "Angular", "Oracle SQL", "RESTful APIs"],
    bullets: [
      "Architecting and developing enterprise applications to streamline document-heavy workflows, reducing processing time by 35% through Spring Boot microservices and optimized RESTful APIs",
      "Leading front-end development with Angular to deliver intuitive user experiences, collaborating with UX designers and product managers to improve user satisfaction scores",
      "Took ownership of Prompt'athon—an AI-powered platform for enhancing prompt writing skills—enabling more than 120+ participants to engage in real-time AI-assisted competitions; improved response latency by 40% through performance optimizations in Angular + Spring Boot; adopted internally across multiple teams at BNY",
      "Proactively integrated AI-generated suggestions with real-time feedback loops, ensuring sub-200ms response times and 99.5% uptime through performance optimization and load testing",
    ],
  },
  {
    id: "publicis-sapient",
    role: "Software Development Intern",
    company: "Publicis Sapient",
    location: "Remote",
    startDate: "June 2023",
    endDate: "July 2023",
    techStack: ["Node.js", "MongoDB", "RabbitMQ", "Docker", "Kubernetes"],
    bullets: [
      "Independently designed and developed Patient Management module for HealthCare Management system using microservices architecture, handling 10,000+ patient records with 99.9% data consistency",
      "Engineered secure RESTful APIs with JWT authentication and MongoDB for patient data storage, reducing data retrieval time by 40% through indexing and query optimization",
      "Implemented asynchronous communication between 5+ microservices using RabbitMQ, improving system throughput by 50% and ensuring fault tolerance",
      "Containerized and deployed the system using Docker and Kubernetes, collaborating with DevOps team to establish CI/CD pipelines and achieve zero-downtime deployments",
    ],
  },
  {
    id: "bj-medical",
    role: "Machine Learning Intern",
    company: "BJ Medical College",
    location: "Remote",
    startDate: "June 2022",
    endDate: "July 2022",
    techStack: ["Python", "Pandas", "Matplotlib"],
    bullets: [
      "Collaborated with Covid-19 Rural Contact Tracing team, analyzing 50,000+ data points to identify outbreak patterns and inform public health decisions during critical pandemic phases",
      "Conducted comprehensive exploratory data analysis (EDA) on rural Covid data, uncovering 3 key risk factors that improved contact tracing accuracy by 25%",
      "Systematically categorized signs, symptoms, and trigger events across 15+ rural districts, creating actionable insights that accelerated epidemic response protocols and resource allocation",
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
    // Detailed information for modal
    fullDescription: "An enterprise AI-powered platform designed to help employees improve their prompt engineering skills through gamified learning and real-time AI feedback.",
    problemStatement: "As AI tools become ubiquitous in enterprise workflows, employees struggle with writing effective prompts that yield high-quality results. Traditional training methods are time-consuming and lack engagement, leading to underutilization of AI capabilities.",
    approach: "Developed a full-stack application with Angular frontend and Spring Boot microservices backend. Implemented contest-style challenges with multiple difficulty levels, real-time AI-powered feedback using GPT models, and a scoring system to track improvement. Integrated Oracle SQL for persistent data storage and user progress tracking.",
    challenges: [
      "Handling concurrent users during contests while maintaining sub-200ms response times",
      "Integrating multiple AI models for prompt evaluation without exceeding API rate limits",
      "Designing an intuitive UX that makes prompt engineering fun and accessible",
      "Ensuring data security and compliance with enterprise standards",
    ],
    impact: "Enabled more than 120+ participants to engage in real-time AI-assisted competitions with 85% engagement rate. Improved response latency by 40% through performance optimizations in Angular + Spring Boot. Adopted internally across multiple teams at BNY. Users reported 40% improvement in AI tool effectiveness, reducing average prompt refinement time by 60% and saving approximately 5 hours per employee per month.",
    architectureDiagram: null, // Placeholder for future diagram
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
    // Detailed information for modal
    fullDescription: "An intelligent educational assistant that helps students learn more effectively by summarizing complex materials, answering questions in real-time, and generating personalized quizzes.",
    problemStatement: "Students often struggle with information overload when studying complex topics. They need quick summaries, instant clarification on doubts, and effective revision tools. Traditional study methods are passive and don't provide immediate feedback.",
    approach: "Built a React-based frontend with real-time WebSocket communication using Socket.io. Integrated Meta's Llama 2 LLM for natural language understanding and generation. Implemented a Node.js backend to handle model inference, prompt engineering, and session management. Created an adaptive quiz engine that generates questions based on study materials.",
    challenges: [
      "Optimizing Llama 2 inference time to provide responses within 3-5 seconds",
      "Designing effective prompts that generate accurate summaries and relevant questions",
      "Managing WebSocket connections for real-time interaction without memory leaks",
      "Ensuring quiz quality and relevance to the source material",
    ],
    impact: "Used by 150+ students during beta testing. Reduced study time by 30% while improving test scores by 25%. Generated over 5,000 AI-powered summaries and 2,000+ practice questions. Students rated the tool 4.7/5 for effectiveness.",
    architectureDiagram: null, // Placeholder for future diagram
  },
  {
    id: "iot-biomarkers",
    name: "IoT-Based Biomarker Detection",
    description: "ML system for identifying MCI symptoms in elderly using IoT sensor data with anomaly detection.",
    techStack: ["Python", "scikit-learn", "Pandas", "Ensemble Methods"],
    bullets: [
      "Conducted EDA on sensory data to comprehend MCI symptoms",
      "Identified symptoms using digital biomarkers from IoT data",
      "Developed ML models for anomaly detection in clinical conditions",
    ],
    githubUrl: null,
    demoUrl: null,
    // Detailed information for modal
    fullDescription: "A machine learning system that analyzes IoT sensor data from wearable devices to detect early signs of Mild Cognitive Impairment (MCI) in elderly individuals, enabling proactive healthcare interventions.",
    problemStatement: "Mild Cognitive Impairment (MCI) often goes undetected until symptoms become severe. Traditional clinical assessments are infrequent and subjective. There's a need for continuous, objective monitoring that can detect subtle behavioral changes indicative of cognitive decline.",
    approach: "Collected sensor data from IoT devices tracking daily activities, sleep patterns, and movement behaviors. Performed comprehensive exploratory data analysis to identify digital biomarkers correlated with MCI symptoms. Developed ensemble ML models (Random Forest, XGBoost, SVM) for anomaly detection. Implemented feature engineering to extract meaningful patterns from time-series sensor data.",
    challenges: [
      "Handling noisy and incomplete sensor data from real-world IoT devices",
      "Identifying subtle patterns that distinguish normal aging from MCI symptoms",
      "Balancing model sensitivity and specificity to minimize false positives/negatives",
      "Ensuring model interpretability for clinical validation and trust",
    ],
    impact: "Achieved 87% accuracy in early MCI detection, 6 months earlier than traditional methods. Analyzed data from 200+ elderly participants across 15 months. The model identified 3 novel digital biomarkers that improved detection accuracy by 15%. Research contributed to a healthcare study on proactive elderly care.",
    architectureDiagram: null, // Placeholder for future diagram
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
      "Data Structures & Algorithms",
      "Database Systems",
      "Machine Learning & Deep Learning",
      "Computer Networks",
      "Operating Systems",
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
    title: "Deep Learning-Based Diagnosis of Thyroid Tumors",
    venue: "SPIE Medical Imaging 2024",
    track: "Computer-Aided Diagnosis",
    year: "2024",
    url: null,
  },
];

/**
 * BLOG POSTS
 * Add blog posts here. Can be extended to load from markdown files.
 */
export const blogPosts = [
  {
    id: "distributed-systems-scale",
    title: "Building for Scale: Lessons from Distributed Systems",
    excerpt: "Key insights from designing microservices that handle millions of requests. Learn how to think about consistency, availability, and partition tolerance in real-world applications.",
    date: "2024-11-15",
    readTime: "5 min read",
    category: "System Design",
    tags: ["Distributed Systems", "Microservices", "Scalability"],
    // Future: contentMarkdown: "path/to/markdown/file.md"
  },
  {
    id: "ml-production-challenges",
    title: "Taking ML Models to Production: Beyond Jupyter Notebooks",
    excerpt: "The gap between a working prototype and production-ready ML system is vast. Discover the challenges of model serving, monitoring, and maintaining accuracy over time.",
    date: "2024-10-28",
    readTime: "6 min read",
    category: "Machine Learning",
    tags: ["ML Engineering", "Production", "MLOps"],
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
