"use client";

import { motion } from "framer-motion";
import { Briefcase, Factory, Presentation, Users } from "lucide-react";

const projects = [
  {
    icon: Briefcase,
    title: "Visit Tracking System",
    desc: "Visit management platform with multi-step approval workflow, JWT authentication, REST APIs, SQL Server pipelines, scheduling, status updates, and reporting.",
    tech: ["ASP.NET Core", "React", "SQL Server", "JWT"],
  },
  {
    icon: Factory,
    title: "Production Management System",
    desc: "Workflow automation and inventory management system with real-time updates, reports, and backend services.",
    tech: ["ASP.NET Core", "React", "SQL Server"],
  },
  {
    icon: Users,
    title: "CRM System",
    desc: "Customer management platform with CRUD operations, role-based access, customer profiling, interaction history, and search.",
    tech: ["React", "REST APIs", "SQL"],
  },
  {
    icon: Presentation,
    title: "PPT Maker Web Application",
    desc: "Full-stack web app to create, manage, and export presentations with dynamic frontend and powerful backend.",
    tech: ["React", "ASP.NET Core", "Export"],
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <p className="sectionTag">MY WORK</p>
      <h2 className="sectionTitle">Featured Projects</h2>

      <div className="projectGrid">
        {projects.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              className="projectCard"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, rotateX: 6, rotateY: -6 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="projectIcon">
                <Icon size={25} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="techList">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
