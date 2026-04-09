import { useState } from "react";
import "./Home.css";
import myPFP from "../assets/p.webp";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section className="hero">
        <div className="hero-left">
          <h2>Hey there</h2>
          <h1>Meet Makibul</h1>
          <p>
            I'm a Computer Science &amp; Engineering student at Dhemaji
            Engineering College, passionate about building web applications and
            solving real-world problems through code. I enjoy learning new
            technologies and turning ideas into reality.
          </p>
          <button onClick={() => setCount(count + 1)}>
            Click to count {count ? <span className="count">{count}</span> : ""}
          </button>
        </div>
        <div className="hero-right">
          <img src={myPFP} alt="Makibul's pfp" />
        </div>
      </section>
      <section className="quick-facts">
        <div>
          <h2>Quick facts about me</h2>
          <ul>
            <li>
              <strong>Age:</strong> 22
            </li>
            <li>
              <strong>Nationality:</strong> Indian
            </li>
            <li>
              <strong>Languages:</strong> English, Hindi, Assamese, Bengali
            </li>
            <li>
              I prefer <strong>coffee</strong> to <strong>tea</strong>.
            </li>
          </ul>
        </div>
        <div>
          <h2>Hobbies</h2>
          <ul>
            <li>🎬 Watching movies</li>
            <li>🎧 Listening to music</li>
            <li>🚴‍♂️ Cycling</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="quote">
          "Talk is cheap. Show me the code."
          <span>- Linus Torvalds -</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
