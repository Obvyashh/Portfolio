"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import {
  SiBootstrap,
  SiCss,
  SiDotnet,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript, className: "skill-js" },
  { name: "TypeScript", icon: SiTypescript, className: "skill-ts" },
  { name: "React", icon: SiReact, className: "skill-react" },
  { name: "Node.js", icon: SiNodedotjs, className: "skill-node" },
  { name: "Next.js", icon: SiNextdotjs, className: "skill-next" },
  { name: "Python", icon: SiPython, className: "skill-python" },
  { name: "Tailwind CSS", icon: SiTailwindcss, className: "skill-tailwind" },
  { name: "Bootstrap", icon: SiBootstrap, className: "skill-bootstrap" },
  { name: "HTML5", icon: SiHtml5, className: "skill-html" },
  { name: "CSS3", icon: SiCss, className: "skill-css" },
  { name: "GitHub", icon: SiGithub, className: "skill-github" },
  { name: ".NET", icon: SiDotnet, className: "skill-dotnet" },
];

export default function SkillsOrbit() {
  return (
    <section className="skillsSection" id="skills">
      <div className="skillsContent">
        <p className="skillsLabel">MY EXPERTISE</p>
        <h2>
          Skills &
          <br />
          Technologies
        </h2>
        <p className="skillsDesc">
          A comprehensive toolkit I use to build modern, scalable and efficient solutions.
        </p>
        <button>View All Skills -&gt;</button>
      </div>

      <div className="skillsOrbit">
        <div className="orbitGlow" />
        <div className="orbitRing ringA" />
        <div className="orbitRing ringB" />
        <div className="orbitRing ringC" />
        <div className="orbitRing ringD" />

        <div className="codeCore">
          <div className="codeCoreFace">
            <Code2 size={38} />
          </div>
          <div className="codeCoreEdge codeCoreTop" />
          <div className="codeCoreEdge codeCoreSide" />
        </div>

        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className={`orbitCard ${skill.className}`}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3 + (i % 4), repeat: Infinity }}
              whileHover={{ scale: 1.08 }}
            >
              <Icon />
              <span>{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
