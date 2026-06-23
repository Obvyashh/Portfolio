const experienceTech = [
  { name: "React", image: "/logos/react.jpg" },
  { name: "TypeScript", image: "/logos/ts.png" },
  { name: ".NET", image: "/logos/dotnet.jpg" },
  { name: "MySQL", image: "/logos/mysql.jpg" },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <p className="sectionTag">MY JOURNEY</p>
      <h2 className="sectionTitle">Experience Timeline</h2>

      <div className="timelineShell">
        <div className="timelineRail">
          <span className="timelineDot" />
        </div>

        <div className="timelineCard premiumTimelineCard">
          <div className="timelineMeta">
            <span>Dec 2025 - Jun 2026</span>
            <h3>Junior Full Stack Developer Intern</h3>
            <h4>Agnigate</h4>
            <p>
              Worked on backend APIs, authentication, role-based access, SQL queries,
              frontend integration, testing, bug fixing, and ERP-related modules.
            </p>
          </div>

          <div className="timelineTechPanel experienceTechBox">
            {experienceTech.map((tech) => (
              <div className="experienceLogo" key={tech.name}>
                <img src={tech.image} alt={tech.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
