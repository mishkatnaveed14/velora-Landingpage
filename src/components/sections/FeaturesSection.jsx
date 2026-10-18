import { asset, featureRows } from "./sectionData";

export default function FeaturesSection() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">MADE FOR YOUR MOMENTS</span>
          <h2>Find your softer side</h2>
          <p>Everything you need to make a little more room for yourself.</p>
        </div>
        <div className="feature-list">
          {featureRows.map((feature, index) => (
            <article
              className={`feature-row ${index % 2 ? "feature-reverse" : ""}`}
              key={feature.title}
            >
              <div className="feature-copy">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <ul>
                  {feature.bullets.map((bullet) => (
                    <li key={bullet}>
                      <span>✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feature-art">
                <img src={`${asset}/${feature.image}`} alt="" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
