import { asset, steps } from "./sectionData";

export default function StepsSection() {
  return (
    <section className="steps-section section">
      <div className="container steps-layout">
        <div className="steps-copy">
          <span className="eyebrow">A FEW SIMPLE STEPS</span>
          <h2>Start where you are.</h2>
          <p>
            There is no perfect way to begin. Just one small moment, made for
            you.
          </p>
          <div className="steps-list">
            {steps.map(([number, title, text]) => (
              <article className="step-item" key={number}>
                <span className="step-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="steps-visual">
          <img
            src={`${asset}/steps.svg`}
            alt="A visual overview of setting up your Velora routine"
          />
        </div>
      </div>
    </section>
  );
}
