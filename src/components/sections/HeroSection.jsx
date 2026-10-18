import { asset } from "./sectionData";

function PhoneMockup({ variant }) {
  return (
    <div className={`phone phone-${variant}`} aria-hidden="true">
      <div className="phone-screen">
        <div className="phone-status"><span>9:41</span><span>● ● ▰</span></div>
        <div className="phone-notch" />
        {variant === "back" ? (
          <div className="phone-back-content">
            <span className="screen-kicker">YOUR WEEK, YOUR WAY</span>
            <strong>A softer<br />kind of progress</strong>
            <div className="week-chart"><span /><span /><span /><span /><span /><span /><span /></div>
            <div className="screen-line"><b>Morning ritual</b><small>Today, 8:30 AM</small></div>
            <div className="screen-line"><b>Take a little pause</b><small>Today, 2:00 PM</small></div>
          </div>
        ) : (
          <div className="phone-front-content">
            <span className="screen-kicker">MONDAY, OCTOBER 19</span>
            <strong>Hello, lovely.</strong>
            <p>Make a little room for you.</p>
            <div className="ritual-orbit"><span>YOUR<br />MOMENT</span><i>♡</i></div>
            <div className="phone-ritual"><span>☼</span><b>Morning pages</b><small>5 min</small></div>
            <div className="phone-ritual"><span>✿</span><b>Unwind gently</b><small>Tonight</small></div>
            <div className="phone-tabs"><span>⌂</span><span>◷</span><span>♡</span><span>○</span></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner container">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow">A LITTLE SPACE TO BLOOM</span>
          <h1>Make room for <em>you.</em></h1>
          <p>Your everyday companion for softer routines, meaningful moments, and feeling more like yourself.</p>
          <div className="store-links">
            <a href="#pricing" className="store-button"><span className="store-symbol">◈</span><span><small>Download on the</small><b>App Store</b></span></a>
            <a href="#pricing" className="store-button"><span className="store-symbol">▷</span><span><small>GET IT ON</small><b>Google Play</b></span></a>
          </div>
        </div>
        <div className="hero-devices"><PhoneMockup variant="back" /><PhoneMockup variant="front" /></div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About">⌄</a>
    </section>
  );
}