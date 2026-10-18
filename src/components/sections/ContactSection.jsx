export default function ContactSection({ formMessage, onSubmit }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">LET'S CONNECT</span><h2>We would love to hear from you</h2><p>A question, a thought, or a little hello. Our door is open.</p></div>
        <div className="contact-layout">
          <div className="contact-details">
            <article><span className="contact-icon">⌖</span><div><h3>Find us</h3><p>New York, NY<br />United States</p></div></article>
            <article><span className="contact-icon">⌁</span><div><h3>Give us a call</h3><p>+1 212 555 0198</p></div></article>
            <article><span className="contact-icon">✉</span><div><h3>Write to us</h3><p>hello@velora.app</p></div></article>
          </div>
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row"><label>Your name<input type="text" name="name" placeholder="Your name" required /></label><label>Your email<input type="email" name="email" placeholder="Your email" required /></label></div>
            <label>Subject<input type="text" name="subject" placeholder="What is on your mind?" required /></label>
            <label>Your message<textarea name="message" rows="5" placeholder="Write us a little note..." required /></label>
            <button className="send-button" type="submit">Send a note <span>→</span></button>
            {formMessage && <p className="form-message" role="status">{formMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}