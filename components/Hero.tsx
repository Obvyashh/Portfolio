"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import {
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

const techCards = [
  { name: "React", subtitle: "UI Library", icon: SiReact, color: "#61DAFB", className: "tech-react" },
  { name: "TypeScript", subtitle: "Language", icon: SiTypescript, color: "#3178C6", className: "tech-typescript" },
  { name: "Next.js", subtitle: "Framework", icon: SiNextdotjs, color: "#FFFFFF", className: "tech-next" },
  { name: "Node.js", subtitle: "Runtime", icon: SiNodedotjs, color: "#83CD29", className: "tech-node" },
  { name: "GitHub", subtitle: "Version Control", icon: SiGithub, color: "#FFFFFF", className: "tech-github" },
  { name: "Tailwind CSS", subtitle: "Styling", icon: SiTailwindcss, color: "#38BDF8", className: "tech-tailwind" },
];

function TechCard({
  name,
  subtitle,
  icon: Icon,
  color,
  className,
}: {
  name: string;
  subtitle: string;
  icon: IconType;
  color: string;
  className: string;
}) {
  return (
    <motion.div
      className={`tech-card ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ y: -10, scale: 1.04, rotateX: 4, rotateY: -4 }}
    >
      <div className="techIconWrap">
        <Icon size={36} color={color} />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 18, mass: 0.35 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 18, mass: 0.35 });
  const avatarX = useTransform(springX, [-1, 1], [-18, 18]);
  const avatarY = useTransform(springY, [-1, 1], [-12, 12]);
  const cardsX = useTransform(springX, [-1, 1], [-10, 10]);
  const cardsY = useTransform(springY, [-1, 1], [-8, 8]);

  return (
    <section className="hero premiumHero" id="about">
      <div className="heroBackdrop">
        <div className="heroGrid" />
        <div className="heroGlow" />
        <div className="heroParticles" />
        <div className="heroConnections" />
      </div>

      <div className="heroContent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="availabilityPill"
        >
          <span className="statusDot" />
          Available for new opportunities
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          Building <br />
          Intelligent <br />
          <span>Digital</span> <br />
          <span>Experiences.</span>
        </motion.h2>

        <p>
          I craft AI-powered systems, scalable APIs, automation tools, and modern web
          applications that turn complex problems into seamless digital solutions.
        </p>

        <div className="heroBtns">
          <button className="primary">
            Explore My Work <ArrowRight size={18} />
          </button>
          <button className="secondary">
            <Download size={17} /> Download Resume
          </button>
          <button className="secondary">
            <MessageCircle size={17} /> Talk To AI
          </button>
        </div>
      </div>

      <div
        className="heroVisual premiumVisual"
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          mouseX.set((x - 0.5) * 2);
          mouseY.set((y - 0.5) * 2);
        }}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
      >
        <div className="networkBg premiumNetworkBg" />
        <div className="avatarAura" />
        <motion.div className="techCardLayer" style={{ x: cardsX, y: cardsY }}>
          {techCards.map((card) => (
            <TechCard key={card.name} {...card} />
          ))}
        </motion.div>

        <motion.div className="avatarWrap avatarWrapper" style={{ x: avatarX, y: avatarY }}>
          <motion.img
            src="/avatar.png"
            alt="Yash Sen Avatar"
            className="avatarImage"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        <motion.div
          className="assistantCard premiumAssistantCard"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="assistantMeta">
            <div className="assistantThumb">
              <img src="/avatar.png" alt="Yash AI Assistant" />
            </div>
            <div>
              <h4>YASH AI ASSISTANT</h4>
              <h3>Your AI Development Partner</h3>
              <p>ONLINE & READY TO HELP</p>
            </div>
          </div>
          <div className="wave premiumWave">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </motion.div>

        <div className="hologram premiumHologram" />
      </div>
    </section>
  );
}
