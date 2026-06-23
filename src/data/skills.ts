export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "HTML5",
      "CSS3",
    ],
  },

  {
    category: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      ".NET",
      "REST APIs",
      "JWT Authentication",
      "API Integration",
    ],
  },

  {
    category: "Database & Storage",
    items: [
      "MongoDB",
      "MySQL",
      "SQL Server",
      "Database Optimization",
    ],
  },

  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vercel",
      "Netlify",
    ],
  },

  {
    category: "Core Concepts",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "System Design",
      "Agile Workflow",
    ],
  },

  {
    category: "Currently Learning",
    items: [
      "Three.js",
      "AI Integration",
      "Prompt Engineering",
      "Cinematic Web Animation",
      "Scalable Architecture",
    ],
  },
];