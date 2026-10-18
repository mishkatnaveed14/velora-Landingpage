import { asset, testimonials } from "./sectionData";

export default function TestimonialsSection({
  activeTestimonial,
  onSelectTestimonial,
}) {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">KIND WORDS</span>
          <h2>A little love from our community</h2>
          <p>Small changes can make a lovely difference.</p>
        </div>
        <article className="testimonial-card">
          <div className="quote-mark">“</div>
          <p className="testimonial-quote">
            {testimonials[activeTestimonial].quote}
          </p>
          <div className="testimonial-person">
            <img
              src={`${asset}/testimonials/${testimonials[activeTestimonial].photo}`}
              alt=""
            />
            <div>
              <h3>{testimonials[activeTestimonial].name}</h3>
              <span>{testimonials[activeTestimonial].role}</span>
            </div>
          </div>
          <div className="testimonial-controls">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() =>
                onSelectTestimonial(
                  (activeTestimonial + testimonials.length - 1) %
                    testimonials.length,
                )
              }
            >
              ←
            </button>
            {testimonials.map((person, index) => (
              <button
                type="button"
                aria-label={`Show testimonial from ${person.name}`}
                aria-pressed={index === activeTestimonial}
                className={index === activeTestimonial ? "active" : ""}
                key={person.name}
                onClick={() => onSelectTestimonial(index)}
              />
            ))}
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() =>
                onSelectTestimonial(
                  (activeTestimonial + 1) % testimonials.length,
                )
              }
            >
              →
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
