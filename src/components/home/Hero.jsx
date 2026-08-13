import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <div className="hero-overlay">

        <div className="hero-glow"></div>

        <div className="container hero-content">

          <span className="hero-badge">
            PREMIUM CORPORATE CONSULTING
          </span>

          <div className="hero-brand">

            <h1 className="hero-uca">
              UCA
            </h1>

            <h2 className="hero-universal">
              UNIVERSAL
            </h2>

            <h3 className="hero-agency">
              CONSULTING AGENCY
            </h3>

          </div>

          <h2 className="hero-title">
            Building the Future
            <br />
            with Excellence
          </h2>

          <p className="hero-text">
            Engineering • Architecture • Construction •
            Project Management • Business Consulting •
            Professional Engineering Solutions
          </p>

          <div className="hero-buttons">

            <button className="btn btn-primary">
              Get Free Consultation
            </button>

            <button className="btn btn-outline">
              View Our Projects
            </button>

          </div>

          <div className="hero-scroll">

            <span>Scroll Down</span>

            <div className="scroll-mouse">
              <span></span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;