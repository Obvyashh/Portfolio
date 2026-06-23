import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsOrbit from "@/components/SkillsOrbit";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SkillsOrbit />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
