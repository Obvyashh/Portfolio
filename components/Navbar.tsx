"use client";

import { ArrowRight, Bot } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <div className="brandIcon">
          <Bot size={20} />
        </div>
        <div>
          <h1>YASH SEN</h1>
          <p>AI Engineer / Full Stack Developer</p>
        </div>
      </div>

      <nav>
        {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>

      <a className="navTalkBtn" href="#contact">
        Let&apos;s Talk <ArrowRight size={16} />
      </a>
    </header>
  );
}
