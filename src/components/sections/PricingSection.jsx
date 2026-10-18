import { plans } from "./sectionData";

export default function PricingSection() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">A PLAN THAT FEELS RIGHT</span><h2>Choose your kind of calm</h2><p>Begin for free, and find the little extras that make your day.</p></div>
        <div className="pricing-grid">
          {plans.map((plan) => <article className={`pricing-card ${plan.featured ? "pricing-featured" : ""}`} key={plan.name}>
            {plan.featured && <span className="popular-label">A LITTLE EXTRA LOVE</span>}
            <h3>{plan.name}</h3><span className="plan-icon">{plan.icon}</span>
            <p className="plan-price"><sup>$</sup>{plan.price}<span> / month</span></p>
            <ul>{plan.features.map((feature, index) => <li className={plan.price === "0" && index > 2 ? "muted-feature" : ""} key={feature}><span>{plan.price === "0" && index > 2 ? "−" : "✓"}</span>{feature}</li>)}</ul>
            <a className="plan-button" href="#contact">Choose {plan.name}</a>
          </article>)}
        </div>
      </div>
    </section>
  );
}