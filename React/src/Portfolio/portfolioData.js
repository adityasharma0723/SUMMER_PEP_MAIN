// portfolioData.js
// This file acts as the single source of truth for all your portfolio details.
// Customized according to Aditya Sharma's CV.

export const portfolioData = {
  personalInfo: {
    name: "Aditya Sharma",
    title: "Software Developer",
    subtitle: "Building scalable applications and turning data into actionable insights.",
    bio: "Hi! I am Aditya Sharma, a passionate developer currently pursuing a Bachelor of Technology in Computer Science and Engineering. I have strong experience in full-stack development, database architecture, and data science. I enjoy solving algorithmic challenges and building performant systems.",
    avatarUrl: "", // Leave blank to use fallback CSS avatar or add a path
    location: "Phagwara, Punjab",
    email: "addi23sharma09@gmail.com",
    phone: "+91-6398184912",
  },
  skills: [
    // Languages
    { name: "C++", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "SQL", category: "Languages" },

    // Web Frameworks & Technologies
    { name: "React.js", category: "Web Frameworks" },
    { name: "Node.js", category: "Web Frameworks" },
    { name: "Express.js", category: "Web Frameworks" },
    { name: "REST APIs", category: "Web Frameworks" },
    { name: "JWT", category: "Web Frameworks" },
    { name: "Tailwind CSS", category: "Web Frameworks" },

    // Databases
    { name: "MongoDB", category: "Databases" },

    // ML Frameworks & Libraries
    { name: "NumPy", category: "ML & Data Science" },
    { name: "Pandas", category: "ML & Data Science" },
    { name: "Scikit-learn", category: "ML & Data Science" },
    { name: "Matplotlib", category: "ML & Data Science" },
    { name: "Seaborn", category: "ML & Data Science" },
    { name: "Power BI", category: "ML & Data Science" },
    { name: "Tableau", category: "ML & Data Science" },
    { name: "EDA", category: "ML & Data Science" },

    // Tools/Platforms
    { name: "Git", category: "Tools/Platforms" },
    { name: "GitHub", category: "Tools/Platforms" },
    { name: "Postman", category: "Tools/Platforms" },
    { name: "VS Code", category: "Tools/Platforms" },
    { name: "Jupyter Notebook", category: "Tools/Platforms" },

    // Soft Skills
    { name: "Problem-Solving", category: "Soft Skills" },
    { name: "Analytical Thinking", category: "Soft Skills" },
    { name: "Communication", category: "Soft Skills" },
    { name: "Team Collaboration", category: "Soft Skills" }
  ],
  projects: [
    {
      id: 1,
      title: "Operational KPI Automation & Self-Serve Analytics Platform",
      duration: "May '26",
      description: "Designed an end-to-end analytics platform to automate KPI reporting and reduce manual effort. Executed data extraction, cleaning, validation, and ETL workflows. Engineered interactive Power BI dashboards with KPI tracking, drill-down analysis, and dynamic filters. Generated actionable insights to support data-driven decision-making.",
      techStack: ["SQL", "Python", "Pandas", "Power BI", "Excel", "Data Visualization", "ETL"],
      githubLink: "https://github.com/adityasharma0723",
    },
    {
      id: 2,
      title: "EstateX - Real Estate Platform",
      duration: "Mar '26",
      description: "Implemented JWT authentication and RBAC for secure user authentication. Constructed property management with CRUD operations, image uploads, chat, payments, and maps. Built REST APIs and analytics dashboards using MongoDB, Redux Toolkit, and Recharts. Integrated frontend and backend to deliver a scalable and responsive MERN application.",
      techStack: ["MongoDB", "React.js", "Node.js", "Express.js", "JWT", "Socket.io", "Stripe", "Cloudinary", "Tailwind CSS", "Redux Toolkit", "Recharts", "REST APIs"],
      githubLink: "https://github.com/adityasharma0723",
    },
    {
      id: 3,
      title: "Hospital Readmission Data Analysis with EDA & Insights",
      duration: "Mar '25",
      description: "Cleaned and preprocessed 10,000+ patient records by handling missing values and inconsistencies. Performed EDA to identify key factors influencing hospital readmission rates. Visualized trends and correlations using Matplotlib and Seaborn. Applied feature engineering and basic ML techniques to generate actionable insights.",
      techStack: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "EDA", "Jupyter Notebook"],
      githubLink: "https://github.com/adityasharma0723",
    }
  ],
  education: [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology – Computer Science and Engineering",
      duration: "Aug '23 – Present",
      grade: "CGPA: 7.10",
      location: "Phagwara, Punjab"
    },
    {
      institution: "Gurukul International Academy",
      degree: "Intermediate",
      duration: "Apr '21 – Mar '23",
      grade: "Percentage: 72%",
      location: "Najibabad, Uttar Pradesh"
    },
    {
      institution: "Gurukul International Academy",
      degree: "Matriculation",
      duration: "Apr '20 – Mar '21",
      grade: "Percentage: 85%",
      location: "Najibabad, Uttar Pradesh"
    }
  ],
  certifications: [
    {
      title: "Oracle Data Platform",
      issuer: "Oracle",
      date: "Mar '26",
      link: "https://oracle.com"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Feb '26",
      link: ""
    },
    {
      title: "Data Analyst Certification",
      issuer: "OneRoadMap",
      date: "Jun '25",
      link: ""
    },
    {
      title: "From Data to Insights Center for Professional Enhancement",
      issuer: "Training & Certification",
      date: "Jul '25",
      link: ""
    }
  ],
  achievements: [
    {
      title: "Solved 70+ DSA problems on LeetCode & GeeksforGeeks",
      description: "Improved problem-solving and algorithmic efficiency by regularly solving complex data structure challenges."
    },
    {
      title: "Top 5 Finalist – CodeStorm Hackathon",
      description: "Secured a top 5 position among multiple competing teams at CodeStorm Hackathon (LPU)."
    }
  ],
  socials: {
    github: "https://github.com/adityasharma0723",
    linkedin: "https://linkedin.com/in/aditya-sharma23",
    twitter: "", 
  }
};
