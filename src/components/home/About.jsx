import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">

        <div className="about-image">
          <img
  src="/images/uca-building.jpg"
  alt="UCA Building"
/>
        </div>

        <div className="about-content">

          <span className="about-subtitle">
            ABOUT UCA
          </span>

          <h2>
            Building Excellence with Innovation
          </h2>

          <p>
            Universal Consulting Agency (UCA) is committed to providing
            world-class engineering, architecture, construction and
            consultancy services with professionalism, integrity and
            innovation.
          </p>

          <p>
            Our experienced team delivers sustainable and high-quality
            solutions that meet international standards while ensuring
            client satisfaction.
          </p>

          <button className="btn btn-primary">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}

export default About;