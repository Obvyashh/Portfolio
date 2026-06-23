export type Experience = {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
  location?: string;
  highlights?: string[];
};

export const experience: Experience[] = [
  {
    id: 1,
    company: "Angnigate",
    role: " Full Stack Developer Intern ",
    duration: "2025 - Present",
    description:
      "Working on university ERP systems, SIS modules, Razorpay integration, and CMS platforms.",
  },
];
