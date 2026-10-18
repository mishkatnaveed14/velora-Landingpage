import { questions } from "./sectionData";

export default function FaqSection({ activeFaq, onToggleFaq }) {
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro"><span className="eyebrow">HERE TO HELP</span><h2>A few things you might be wondering</h2><p>Still curious? Send us a note and we will be happy to help.</p><a className="text-link" href="#contact">Talk to our team <span>→</span></a></div>
        <div className="faq-list">
          {questions.map(([question, answer], index) => <article className={`faq-item ${activeFaq === index ? "faq-open" : ""}`} key={question}>
            <button type="button" aria-expanded={activeFaq === index} onClick={() => onToggleFaq(activeFaq === index ? -1 : index)}><span>{question}</span><span className="faq-icon">{activeFaq === index ? "−" : "+"}</span></button>
            <div className="faq-answer" aria-hidden={activeFaq !== index}><p>{answer}</p></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}