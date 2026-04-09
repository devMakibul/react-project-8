import "./Education.css";

function Education() {
  return (
    <div>
      <section>
        <h1 className="page-title">Education</h1>

        <div className="edu-list">

          <div className="edu-card">
            <div className="edu-left">
              <h2>Dhemaji Engineering College, Dhemaji</h2>
              <p>B.Tech — Computer Science & Engineering</p>
            </div>
            <div className="edu-right">
              <span className="edu-period">2024 – 2028</span>
              <span className="edu-score">SGPA: 6.9</span>
            </div>
          </div>

          <div className="edu-card">
            <div className="edu-left">
              <h2>Ajmal Super 40, Hojai, Assam</h2>
              <p>Higher Secondary Education</p>
            </div>
            <div className="edu-right">
              <span className="edu-period">2020 – 2022</span>
              <span className="edu-score">Score: 72%</span>
            </div>
          </div>

          <div className="edu-card">
            <div className="edu-left">
              <h2>Red Rose Model School</h2>
              <p>HSLC</p>
            </div>
            <div className="edu-right">
              <span className="edu-period">2020</span>
              <span className="edu-score">Score: 91%</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Education;