export { projects } from "./projects";
export { skills } from "./skills";
export { experience } from "./experience";
export { education } from "./education";
export { socials } from "./socials";
export { profile } from "./profile";

// Back-compat exports (existing components still import from `portfolioData`)
export { personal as portfolioProfile, aboutCards, aboutMetaCards } from "./personal";

// Back-compat `contact` used by ContactSection
export { contact } from "./contacts";



export const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;


