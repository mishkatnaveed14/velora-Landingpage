import { useEffect, useRef, useState } from "react";
import {
  AboutSection,
  ContactSection,
  FaqSection,
  FeaturesSection,
  FooterSection,
  GallerySection,
  HeroSection,
  PricingSection,
  ShowcaseSection,
  StepsSection,
  TestimonialsSection,
} from "./components/LandingSections";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeGallery, setActiveGallery] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formMessage, setFormMessage] = useState("");
  const galleryRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  const selectGallerySlide = (index) => {
    setActiveGallery(index);
    galleryRef.current?.children[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const submitContactForm = (event) => {
    event.preventDefault();
    setFormMessage("Thank you for reaching out. We will be in touch soon.");
  };

  useEffect(() => {
    document.body.classList.toggle("drawer-visible", menuOpen);
    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeMenu();
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
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <button
            className={
              menuOpen ? "drawer-backdrop is-visible" : "drawer-backdrop"
            }
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
        <HeroSection />
        <AboutSection />
        <ShowcaseSection />
        <StepsSection />
        <FeaturesSection />
        <GallerySection
          activeGallery={activeGallery}
          galleryRef={galleryRef}
          onSelectSlide={selectGallerySlide}
        />
        <TestimonialsSection
          activeTestimonial={activeTestimonial}
          onSelectTestimonial={setActiveTestimonial}
        />
        <PricingSection />
        <FaqSection activeFaq={activeFaq} onToggleFaq={setActiveFaq} />
        <ContactSection
          formMessage={formMessage}
          onSubmit={submitContactForm}
        />
      </main>

      <FooterSection />
    </>
  );
}

export default App;
