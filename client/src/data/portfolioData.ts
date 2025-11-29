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
  tagline: "Building scalable systems and crafting elegant solutions. IIT Jodhpur graduate with expertise in full-stack development, distributed systems, and machine learning applications.",
  resumeUrl: "#", // TODO: Replace with actual resume URL
  social: {
    linkedin: "https://www.linkedin.com/in/nityaanandshah",
    github: "https://github.com/nityaanandshah",
  },
};

export const aboutContent = {
  summary: `I'm a Software Engineer at BNY with a strong foundation in computer science from IIT Jodhpur. 
  My experience spans building enterprise-scale applications using Spring Boot microservices, 
  crafting intuitive frontends with Angular and React, and applying machine learning to solve real-world problems. 
  I'm passionate about designing scalable distributed systems and creating impactful software solutions.`,
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
      "Developing applications to streamline document-heavy workflows using Spring Boot microservices and RESTful APIs",
      "Building Angular-based front end for intuitive user experience with Oracle SQL for data storage",
      "Developed Prompt'athon, an AI-powered platform to enhance prompt writing skills with contest-style participation",
      "Integrated AI-generated suggestions for real-time user feedback, ensuring scalability and responsiveness",
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
      "Developed Patient Management module for HealthCare Management system following Microservices architecture",
      "Utilized MongoDB for patient data storage with RESTful APIs and JWT authentication for secure handling",
      "Employed RabbitMQ for communication between microservices",
      "Deployed the system using Docker and Kubernetes",
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
      "Assisted Covid-19 Rural Contact Tracing team Coordinator",
      "Conducted EDA to analyze rural Covid data patterns",
      "Categorized signs, symptoms, and trigger events for rural epidemic response",
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
      "Designed and built a responsive dashboard for the client",
      "Leveraged HTML, CSS, and JavaScript skills for modern UI development",
      "Implemented React components for interactive user experience",
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
 * NAVIGATION LINKS
 * Used for the sticky navigation bar.
 */
export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
