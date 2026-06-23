export type SocialLink = {
  name: string;
  href: string;

  icon?: string;

  label?: string;

  accent?: "cyan" | "purple" | "white";

  featured?: boolean;
};