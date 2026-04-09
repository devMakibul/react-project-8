import "./Contact.css";

function Contact() {
  return (
      <section>
        <h1 className="page-title">Contact</h1>

        <div className="contact-grid">
          <a href="mailto:makibul34ew4t34f@exampasfd4le.com" className="contact-card">
            <span className="contact-label">Email</span>
            <span className="contact-value">makibul@exa34fmple.com</span>
          </a>
          <a href="https://github.com/makibul34ewwff34" target="_blank" rel="noreferrer" className="contact-card">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/makibul43r324t</span>
          </a>
          <a href="https://linkedin.com/in/makibul324rff34" target="_blank" rel="noreferrer" className="contact-card">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com/in/makibul9834u</span>
          </a>
          <a href="https://twitter.com/makibul83745783yh" target="_blank" rel="noreferrer" className="contact-card">
            <span className="contact-label">Twitter / X</span>
            <span className="contact-value">@makibul234r23</span>
          </a>
        </div>
      </section>
  );
}

export default Contact;