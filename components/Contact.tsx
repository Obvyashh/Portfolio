import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "yashsen6699@gmail.com", href: "mailto:yashsen6699@gmail.com" },
  { icon: Phone, label: "Phone", value: "8349621190", href: "tel:8349621190" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yashsen", href: "https://linkedin.com/in/yashsen" },
  { icon: Github, label: "GitHub", value: "github.com/y1xshh", href: "https://github.com/y1xshh" },
  { icon: MapPin, label: "Location", value: "Bhopal, India" },
];

export default function Contact() {
  return (
    <section className="contactSection" id="contact">
      <p className="sectionTag">CONTACT</p>
      <h2 className="contactTitle">Ready to build intelligent systems</h2>

      <div className="contactGrid">
        {contacts.map((c) => {
          const Icon = c.icon;
          return (
            <a
              className="contactCard"
              key={c.label}
              href={c.href ?? undefined}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel={c.href?.startsWith("http") ? "noreferrer" : undefined}
            >
              <Icon />
              <span>{c.label}</span>
              <h3>{c.value}</h3>
            </a>
          );
        })}
      </div>
    </section>
  );
}
