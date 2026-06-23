import { profile } from "./profile";

export type PortfolioPersonal = {
  name: string;
  role: string;
  subtitle: string;
  availabilityLabel?: string;
  footerTagline?: string;
};

export const personal: PortfolioPersonal = {
  name: profile.name,
  role: profile.title,
  subtitle:
    "I build scalable backend systems, REST APIs, and modern full stack applications with clean architecture, secure authentication, and optimized database design.",

  availabilityLabel: profile.available
    ? "Open to Backend & Full Stack Opportunities"
    : "Currently unavailable",

  footerTagline:
    "Focused on building scalable systems, clean APIs, and production-ready applications.",
};

export type AboutCard = {
  title: string;
  description: string;
};

export const aboutCards: AboutCard[] = [
  {
    title: "Backend Engineering",
    description:
      "Building scalable REST APIs, authentication systems, and secure backend architectures using Node.js and Express.",
  },
  {
    title: "Full Stack Development",
    description:
      "Creating responsive web applications with modern frontend frameworks and efficient backend integration.",
  },
  {
    title: "System Design",
    description:
      "Designing maintainable architectures with optimized databases, modular structure, and scalable workflows.",
  },
];

export type AboutMetaCard = {
  label: string;
  value: string;
};

export const aboutMetaCards: AboutMetaCard[] = [
  {
    label: "Languages",
    value: "JavaScript, TypeScript, Python, C++",
  },
  {
    label: "Frontend",
    value: "React, Next.js, Tailwind CSS",
  },
  {
    label: "Backend",
    value: "Node.js, Express.js, REST APIs , Dotnet Core ",
  },
  {
    label: "Database",
    value: "MySQL, MongoDB, SQL",
  },
  {
    label: "Core Skills",
    value: "DSA, OOP, DBMS, System Design",
  },
];
