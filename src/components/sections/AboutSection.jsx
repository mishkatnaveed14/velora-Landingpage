import { aboutItems } from "./sectionData";

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <div className="about-copy">
          <span className="eyebrow">ABOUT VELORA</span>
          <h2>A gentler way to show up for yourself.</h2>
          <p>
            Some days ask a lot of us. Velora is a little space to pause, find
            your footing, and make time for the things that help you feel like
            you.
          </p>
          <p>
            Begin with one small ritual. Let it grow into something that feels
            entirely your own.
          </p>
          <a className="text-link" href="#features">
            Get to know Velora <span>→</span>
          </a>
        </div>
        <div className="about-grid">
          {aboutItems.map(([icon, title, text]) => (
            <article className="about-item" key={title}>
              <span className="about-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
