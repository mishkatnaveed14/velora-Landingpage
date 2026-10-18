import { useEffect, useRef, useState } from "react";
import "./App.css";

const asset = "/assets/softland";

const aboutItems = [
  [
    "✦",
    "A little more you",
    "Gentle rituals shaped around your needs, your pace, and your kind of day.",
  ],
  [
    "◌",
    "Room to reset",
    "Small, thoughtful moments that help you feel clear and grounded again.",
  ],
  [
    "⌁",
    "Made to flow",
    "A calm place for your routines, notes, and everyday intentions.",
  ],
  [
    "♡",
    "Progress, softly",
    "Celebrate consistency without pressure, streaks, or impossible standards.",
  ],
];

const showcaseItems = [
  {
    image: "cards-4.png",
    title: "Find your own rhythm",
    text: "Build routines that flex with real life, and make space for what feels good.",
  },
  {
    image: "cards-2.png",
    title: "Keep the good close",
    text: "Bring your daily rituals, reflections, and little wins into one lovely place.",
  },
  {
    image: "cards-6.png",
    title: "Grow at your pace",
    text: "A softer way to notice the progress you are making, one day at a time.",
  },
];

const steps = [
  [
    "01",
    "Make it yours",
    "Choose the habits and moments you want more of in your day.",
  ],
  [
    "02",
    "Set a gentle pace",
    "Create a routine that fits around your life, not the other way round.",
  ],
  [
    "03",
    "Enjoy the becoming",
    "Check in, notice your progress, and keep showing up for yourself.",
  ],
];

const featureRows = [
  {
    title: "A kinder start to every day",
    text: "Create a morning ritual that feels like an invitation, not another item on your to-do list.",
    bullets: [
      "Build a routine around your real mornings",
      "Keep your favorite rituals close at hand",
      "Make room for a slower start",
    ],
    image: "features-1.svg",
  },
  {
    title: "Your calm, collected corner",
    text: "A clear view of the habits you are nurturing, with the breathing room to change them whenever you need.",
    bullets: [
      "Shape your week with simple intentions",
      "See your progress at a glance",
      "Edit or pause a ritual at any time",
    ],
    image: "features-2.svg",
  },
  {
    title: "Little moments worth keeping",
    text: "Save a thought, a feeling, or a moment you want to remember. Your private space is always there for you.",
    bullets: [
      "Capture quick notes as they come",
      "Look back on the moments that mattered",
      "Keep your reflections in one place",
    ],
    image: "features-3.svg",
  },
  {
    title: "A routine that moves with you",
    text: "Velora meets you where you are, making it easier to find balance through busy weeks and fresh starts.",
    bullets: [
      "Gentle reminders on your schedule",
      "Small steps that add up over time",
      "A fresh page whenever you need one",
    ],
    image: "features-4.svg",
  },
];

const testimonials = [
  {
    name: "Amelia R.",
    role: "Velora member",
    photo: "testimonials-1.jpg",
    quote:
      "Velora made my routine feel like something I look forward to. It is the first app that has helped me slow down instead of asking me to do more.",
  },
  {
    name: "Sophie L.",
    role: "Velora member",
    photo: "testimonials-2.jpg",
    quote:
      "I love how thoughtful and uncluttered it feels. My little rituals finally fit into my day in a way that feels natural.",
  },
  {
    name: "Maya T.",
    role: "Velora member",
    photo: "testimonials-3.jpg",
    quote:
      "A small check-in has become my favorite part of the evening. Velora makes progress feel personal and kind.",
  },
  {
    name: "Claire D.",
    role: "Velora member",
    photo: "testimonials-4.jpg",
    quote:
      "It gives me a gentle nudge without the guilt. I have found a rhythm that actually belongs to me.",
  },
  {
    name: "Nina W.",
    role: "Velora member",
    photo: "testimonials-5.jpg",
    quote:
      "The space to reflect is lovely. I notice the good things more often now, and that has made a real difference.",
  },
];

const plans = [
  {
    name: "Essential",
    price: "0",
    icon: "♡",
    features: [
      "Daily rituals",
      "Gentle reminders",
      "Personal notes",
      "Weekly reflections",
      "Unlimited routines",
    ],
  },
  {
    name: "Bloom",
    price: "29",
    icon: "✿",
    featured: true,
    features: [
      "Daily rituals",
      "Gentle reminders",
      "Personal notes",
      "Weekly reflections",
      "Unlimited routines",
    ],
  },
  {
    name: "Daydream",
    price: "49",
    icon: "✧",
    features: [
      "Daily rituals",
      "Gentle reminders",
      "Personal notes",
      "Weekly reflections",
      "Unlimited routines",
    ],
  },
];

const questions = [
  [
    "What is Velora?",
    "Velora is a self-care companion for building thoughtful daily rituals, keeping personal reflections, and finding a rhythm that feels like yours.",
  ],
  [
    "Can I use Velora for free?",
    "Yes. The Essential plan includes daily rituals, reminders, notes, and weekly reflections at no cost.",
  ],
  [
    "Can I change my routines later?",
    "Of course. Your routines are yours to edit, pause, or begin again whenever life changes.",
  ],
  [
    "Is my journal private?",
    "Your reflections belong to you. We design Velora to keep personal moments personal.",
  ],
  [
    "Does Velora work on my phone?",
    "Velora is designed for mobile and desktop, so your rituals are close wherever your day takes you.",
  ],
  [
    "How do I get started?",
    "Choose the rituals you would like to make room for, set a pace that feels comfortable, and begin with one small moment.",
  ],
];

function PhoneMockup({ variant }) {
  return (
    <div className={`phone phone-${variant}`} aria-hidden="true">
      <div className="phone-screen">
        <div className="phone-status">
          <span>9:41</span>
          <span>● ● ▰</span>
        </div>
        <div className="phone-notch" />
        {variant === "back" ? (
          <div className="phone-back-content">
            <span className="screen-kicker">YOUR WEEK, YOUR WAY</span>
            <strong>
              A softer
              <br />
              kind of progress
            </strong>
            <div className="week-chart">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="screen-line">
              <b>Morning ritual</b>
              <small>Today, 8:30 AM</small>
            </div>
            <div className="screen-line">
              <b>Take a little pause</b>
              <small>Today, 2:00 PM</small>
            </div>
          </div>
        ) : (
          <div className="phone-front-content">
            <span className="screen-kicker">MONDAY, OCTOBER 19</span>
            <strong>Hello, lovely.</strong>
            <p>Make a little room for you.</p>
            <div className="ritual-orbit">
              <span>
                YOUR
                <br />
                MOMENT
              </span>
              <i>♡</i>
            </div>
            <div className="phone-ritual">
              <span>☼</span>
              <b>Morning pages</b>
              <small>5 min</small>
            </div>
            <div className="phone-ritual">
              <span>✿</span>
              <b>Unwind gently</b>
              <small>Tonight</small>
            </div>
            <div className="phone-tabs">
              <span>⌂</span>
              <span>◷</span>
              <span>♡</span>
              <span>○</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeGallery, setActiveGallery] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formMessage, setFormMessage] = useState("");
  const galleryRef = useRef(null);

  const goToGallerySlide = (index) => {
    setActiveGallery(index);
    galleryRef.current?.children[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.classList.toggle("drawer-visible", menuOpen);
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("drawer-visible");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const revealTargets = document.querySelectorAll(
      "main > section:not(.hero) > .container, .section-heading, .showcase-card, .feature-row, .pricing-card, .footer-main",
    );

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.12 },
    );

    revealTargets.forEach((target) => {
      target.classList.add("scroll-reveal");
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a
            className="brand"
            href="#hero"
            onClick={closeMenu}
            aria-label="Velora home"
          >
            <span className="brand-mark">v</span>
            <span>velora</span>
          </a>
          <button
            className={menuOpen ? "menu-toggle menu-open" : "menu-toggle"}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <button
            className={menuOpen ? "drawer-backdrop is-visible" : "drawer-backdrop"}
            type="button"
            aria-label="Close navigation"
            aria-hidden={!menuOpen}
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          />
          <nav
            className={menuOpen ? "main-nav nav-open" : "main-nav"}
            aria-label="Main navigation"
          >
            <a href="#hero" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#features" onClick={closeMenu}>
              Features
            </a>
            <a href="#pricing" onClick={closeMenu}>
              Pricing
            </a>
            <a href="#gallery" onClick={closeMenu}>
              Gallery
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-inner container">
            <div className="hero-copy">
              <span className="eyebrow hero-eyebrow">
                A LITTLE SPACE TO BLOOM
              </span>
              <h1>
                Make room for <em>you.</em>
              </h1>
              <p>
                Your everyday companion for softer routines, meaningful moments,
                and feeling more like yourself.
              </p>
              <div className="store-links">
                <a href="#pricing" className="store-button">
                  <span className="store-symbol">◈</span>
                  <span>
                    <small>Download on the</small>
                    <b>App Store</b>
                  </span>
                </a>
                <a href="#pricing" className="store-button">
                  <span className="store-symbol">▷</span>
                  <span>
                    <small>GET IT ON</small>
                    <b>Google Play</b>
                  </span>
                </a>
              </div>
            </div>
            <div className="hero-devices">
              <PhoneMockup variant="back" />
              <PhoneMockup variant="front" />
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to About">
            ⌄
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div className="about-copy">
              <span className="eyebrow">ABOUT VELORA</span>
              <h2>A gentler way to show up for yourself.</h2>
              <p>
                Some days ask a lot of us. Velora is a little space to pause,
                find your footing, and make time for the things that help you
                feel like you.
              </p>
              <p>
                Begin with one small ritual. Let it grow into something that
                feels entirely your own.
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

        <section className="section showcase-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">YOUR EVERYDAY, A LITTLE LIGHTER</span>
              <h2>More ease in the little things</h2>
              <p>
                Thoughtful tools that make your day feel more like your own.
              </p>
            </div>
            <div className="showcase-grid">
              {showcaseItems.map((item, index) => (
                <article className="showcase-card" key={item.title}>
                  <img
                    src={`${asset}/${item.image}`}
                    alt=""
                    className={`showcase-image image-${index + 1}`}
                  />
                  <div className="showcase-copy">
                    <span className="card-index">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="steps-section section">
          <div className="container steps-layout">
            <div className="steps-copy">
              <span className="eyebrow">A FEW SIMPLE STEPS</span>
              <h2>Start where you are.</h2>
              <p>
                There is no perfect way to begin. Just one small moment, made
                for you.
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

        <section className="section features-section" id="features">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">MADE FOR YOUR MOMENTS</span>
              <h2>Find your softer side</h2>
              <p>
                Everything you need to make a little more room for yourself.
              </p>
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

        <section className="section gallery-section" id="gallery">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">A PEEK INSIDE</span>
              <h2>Your space, your pace</h2>
              <p>A little look at the moments you can make your own.</p>
            </div>
            <div className="gallery-track" ref={galleryRef}>
              {Array.from({ length: 12 }, (_, index) => (
                <figure
                  className={`gallery-slide ${activeGallery === index ? "gallery-active" : ""}`}
                  key={index}
                >
                  <img
                    src={`${asset}/app-gallery/app-gallery-${index + 1}.png`}
                    alt={`Velora app screen ${index + 1}`}
                  />
                </figure>
              ))}
            </div>
            <div
              className="gallery-controls"
              aria-label="Choose a gallery image"
            >
              {Array.from({ length: 12 }, (_, index) => (
                <button
                  type="button"
                  key={index}
                  aria-label={`Go to gallery image ${index + 1}`}
                  aria-pressed={activeGallery === index}
                  className={activeGallery === index ? "active" : ""}
                  onClick={() => goToGallerySlide(index)}
                />
              ))}
            </div>
          </div>
        </section>

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
                    setActiveTestimonial(
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
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() =>
                    setActiveTestimonial(
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

        <section className="section pricing-section" id="pricing">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">A PLAN THAT FEELS RIGHT</span>
              <h2>Choose your kind of calm</h2>
              <p>
                Begin for free, and find the little extras that make your day.
              </p>
            </div>
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article
                  className={`pricing-card ${plan.featured ? "pricing-featured" : ""}`}
                  key={plan.name}
                >
                  {plan.featured && (
                    <span className="popular-label">A LITTLE EXTRA LOVE</span>
                  )}
                  <h3>{plan.name}</h3>
                  <span className="plan-icon">{plan.icon}</span>
                  <p className="plan-price">
                    <sup>$</sup>
                    {plan.price}
                    <span> / month</span>
                  </p>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li
                        className={
                          plan.price === "0" && index > 2 ? "muted-feature" : ""
                        }
                        key={feature}
                      >
                        <span>
                          {plan.price === "0" && index > 2 ? "−" : "✓"}
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a className="plan-button" href="#contact">
                    Choose {plan.name}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div className="faq-intro">
              <span className="eyebrow">HERE TO HELP</span>
              <h2>A few things you might be wondering</h2>
              <p>Still curious? Send us a note and we will be happy to help.</p>
              <a className="text-link" href="#contact">
                Talk to our team <span>→</span>
              </a>
            </div>
            <div className="faq-list">
              {questions.map(([question, answer], index) => (
                <article
                  className={`faq-item ${activeFaq === index ? "faq-open" : ""}`}
                  key={question}
                >
                  <button
                    type="button"
                    aria-expanded={activeFaq === index}
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? -1 : index)
                    }
                  >
                    <span>{question}</span>
                    <span className="faq-icon">
                      {activeFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {activeFaq === index && <p>{answer}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">LET'S CONNECT</span>
              <h2>We would love to hear from you</h2>
              <p>A question, a thought, or a little hello. Our door is open.</p>
            </div>
            <div className="contact-layout">
              <div className="contact-details">
                <article>
                  <span className="contact-icon">⌖</span>
                  <div>
                    <h3>Find us</h3>
                    <p>
                      New York, NY
                      <br />
                      United States
                    </p>
                  </div>
                </article>
                <article>
                  <span className="contact-icon">⌁</span>
                  <div>
                    <h3>Give us a call</h3>
                    <p>+1 212 555 0198</p>
                  </div>
                </article>
                <article>
                  <span className="contact-icon">✉</span>
                  <div>
                    <h3>Write to us</h3>
                    <p>hello@velora.app</p>
                  </div>
                </article>
              </div>
              <form
                className="contact-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  setFormMessage(
                    "Thank you for reaching out. We will be in touch soon.",
                  );
                }}
              >
                <div className="form-row">
                  <label>
                    Your name
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label>
                    Your email
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                    />
                  </label>
                </div>
                <label>
                  Subject
                  <input
                    type="text"
                    name="subject"
                    placeholder="What is on your mind?"
                    required
                  />
                </label>
                <label>
                  Your message
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write us a little note..."
                    required
                  />
                </label>
                <button className="send-button" type="submit">
                  Send a note <span>→</span>
                </button>
                {formMessage && (
                  <p className="form-message" role="status">
                    {formMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a className="brand" href="#hero">
              <span className="brand-mark">v</span>
              <span>velora</span>
            </a>
            <p>A little space to pause, reset, and bloom into yourself.</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © Copyright <strong>Velora</strong> All Rights Reserved
          </span>
          <span>
            Designed by{" "}
            <a
              href="https://bootstrapmade.com/"
              target="_blank"
              rel="noreferrer"
            >
              BootstrapMade
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
