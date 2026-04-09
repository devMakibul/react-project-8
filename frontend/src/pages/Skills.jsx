import "./Skills.css";
import Users from "../components/Users";

function Skills() {
  return (
    <div>
      <section>
        <h1 className="page-title">Skills</h1>

        <div className="skills-grid">
          <div className="skills-card">
            <h2>Languages</h2>
            <div className="skills-tags">
              <span className="skill-tag">C</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>

          <div className="skills-card">
            <h2>Frontend</h2>
            <div className="skills-tags">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Vite</span>
            </div>
          </div>

          <div className="skills-card">
            <h2>Backend</h2>
            <div className="skills-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
            </div>
          </div>

          <div className="skills-card">
            <h2>Database</h2>
            <div className="skills-tags">
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Firebase</span>
            </div>
          </div>

          <div className="skills-card">
            <h2>Tools</h2>
            <div className="skills-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">GitLab</span>
              <span className="skill-tag">VS Code</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Users/>
      </section>
    </div>
  );
}

export default Skills;
