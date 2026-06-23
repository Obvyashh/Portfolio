export const portfolio = {
  name: "Yash Sen",
  role: "AI Engineer / Full Stack Developer",
  brandLabel: "AI Engineer / Full Stack Developer",
  availability: "Available for new opportunities",
  resumePath: "/Yash_Sen_Resume.pdf",
  avatarPath: "/avatar.png",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "AI Powered Portfolio",
    title: ["Building", "Intelligent", "Digital", "Experiences."],
    subtitle:
      "I craft AI-powered systems, scalable APIs, automation tools, and modern web applications that turn complex problems into seamless digital solutions.",
    actions: {
      primary: { label: "Explore My Work", href: "#projects" },
      resume: { label: "Download Resume", href: "/Yash_Sen_Resume.pdf" },
      assistant: { label: "Talk To AI", href: "#contact" },
      navCta: { label: "Let's Talk", href: "#contact" },
    },
    techCards: [
      {
        label: "React",
        detail: "UI Library",
        icon: "react",
        className: "left-0 top-12 xl:left-10",
      },
      {
        label: "TypeScript",
        detail: "Language",
        icon: "typescript",
        className: "left-0 top-40 xl:left-12",
      },
      {
        label: "Next.js",
        detail: "Framework",
        icon: "nextjs",
        className: "left-3 top-[17rem] xl:left-16",
      },
      {
        label: "Node.js",
        detail: "Runtime",
        icon: "nodejs",
        className: "right-0 top-16 xl:right-10",
      },
      {
        label: "Tailwind CSS",
        detail: "Styling",
        icon: "tailwind",
        className: "right-0 top-44 xl:right-8",
      },
      {
        label: "GitHub",
        detail: "Version Control",
        icon: "github",
        className: "right-2 top-[17rem] xl:right-12",
      },
    ],
  },
  assistant: {
    title: "YASH AI ASSISTANT",
    subtitle: "Your AI Development Partner",
    status: "ONLINE & READY TO HELP",
  },
  about: {
    eyebrow: "About",
    title: "Backend-focused full stack developer",
    description:
      "Yash Sen is an AI Engineer / Full Stack Developer focused on practical, scalable systems with clean interfaces and reliable backend architecture.",
    body:
      "Backend-focused Full Stack Developer skilled in building REST APIs, authentication systems, scalable backend logic, SQL databases, and modern AI-powered web applications.",
    highlights: ["REST APIs", "JWT Authentication", "SQL Databases", "AI Web Apps"],
  },
  skillsSection: {
    eyebrow: "My Expertise",
    title: "Skills & Technologies",
    description:
      "A comprehensive toolkit I use to build modern, scalable and efficient digital solutions.",
    cta: { label: "View All Skills", href: "#contact" },
    orbitCenterLabel: "</>",
    orbitSkills: [
      { label: "JavaScript", icon: "javascript", orbit: "outer", position: "top-[2%] left-[22%]" },
      { label: "TypeScript", icon: "typescript", orbit: "outer", position: "top-[1%] left-[47%]" },
      { label: "React", icon: "react", orbit: "outer", position: "top-[4%] right-[18%]" },
      { label: "HTML5", icon: "html5", orbit: "outer", position: "bottom-[17%] right-[14%]" },
      { label: "CSS3", icon: "css3", orbit: "outer", position: "bottom-[20%] right-[1%]" },
      { label: "Bootstrap", icon: "bootstrap", orbit: "mid", position: "bottom-[8%] left-[40%]" },
      { label: "Tailwind CSS", icon: "tailwind", orbit: "mid", position: "bottom-[13%] left-[12%]" },
      { label: "Python", icon: "python", orbit: "mid", position: "bottom-[30%] left-[25%]" },
      { label: "Node.js", icon: "nodejs", orbit: "mid", position: "top-[36%] left-[7%]" },
      { label: "Node.js", icon: "nodejs", orbit: "inner", position: "top-[20%] left-[12%]" },
      { label: "C#", icon: "csharp", orbit: "mid", position: "top-[34%] right-[12%]" },
      { label: "C#", icon: "csharp", orbit: "inner", position: "top-[25%] right-[24%]" },
      { label: "HTML", icon: "html5", orbit: "outer", position: "top-[10%] right-[2%]" },
    ],
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Python",
      "SQL",
      "MySQL",
      "Git",
      "GitHub",
      "Postman",
      "JWT Authentication",
      "REST APIs",
      "AI Automation",
    ],
  },
  projectsSection: {
    eyebrow: "My Work",
    title: "Featured Projects",
    cta: { label: "View All Projects", href: "#projects" },
    items: [
      {
        title: "Visit Tracking System",
        icon: "briefcase",
        description:
          "Visit management platform with multi-step approval workflow, JWT authentication, REST APIs, and SQL Server data pipelines.",
        tags: ["JWT", "REST APIs", "SQL"],
        accent: "cyan",
      },
      {
        title: "ERP Portal Chatbot",
        icon: "sparkles",
        description:
          "Professional ERP support chatbot focused on student workflows, guided responses, and clean frontend integration.",
        tags: ["Chatbot", "Rules Engine", "ERP"],
        accent: "green",
      },
      {
        title: "Website Security Tester",
        icon: "shield",
        description:
          "OWASP-oriented Python scanner for login systems and ERP routes with configurable credentials, route tests, and report generation.",
        tags: ["Python", "Security", "Testing"],
        accent: "blue",
      },
      {
        title: "AI Portfolio Assistant",
        icon: "terminal",
        description:
          "Interactive AI-themed portfolio assistant with cinematic UI direction, avatar presentation, and developer-first storytelling.",
        tags: ["AI UI", "Next.js", "Motion"],
        accent: "orange",
      },
    ],
  },
  experience: {
    eyebrow: "My Journey",
    title: "Experience Timeline",
    period: "Dec 2025 - Jun 2026",
    role: "Junior Full Stack Developer Intern",
    company: "Agnigate",
    body:
      "Worked on backend APIs, authentication, role-based access, SQL queries, frontend integration, testing, and ERP-related modules.",
    stack: ["React", "TypeScript", "JWT", "Postman", "GitHub"],
  },
  education: {
    eyebrow: "Education",
    title: "Computer science foundation",
    description:
      "Academic grounding paired with applied engineering work in full stack systems and AI-powered interfaces.",
    degree: "B.Tech Student",
    body: "Computer Science / Engineering background.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Ready to build intelligent systems",
    description:
      "Reach out for backend development, AI automation, full stack applications, and futuristic web experiences.",
    email: "yashsen6699@gmail.com",
    github: "https://github.com/y1xshh",
  },
} as const;

export type Portfolio = typeof portfolio;
