export type Education = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
  details: string;
};

export const education: Education[] = [
  {
    id: 1,
    degree: "B.Tech in Computer Science Engineering with Aiml Specialization",
    institution: "Oriental Institute of Science and Technology, Bhopal",
    location: "Bhopal, India",
    duration: "2023 - Present",
    cgpa: "6.91",
    details:
      "Focused on core computer science fundamentals, data structures, algorithms, and database management while building full stack applications.",
  },
];
