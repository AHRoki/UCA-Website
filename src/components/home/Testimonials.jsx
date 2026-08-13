import "./Testimonials.css";
import testimonials from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>
            We are proud to have earned the trust of our clients through quality
            service and professional consultancy.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <img
  src={item.image}
  alt={item.name}
  className="testimonial-image"
  loading="lazy"
  decoding="async"
/>

              <p className="testimonial-review">
                "{item.review}"
              </p>

              <h3>{item.name}</h3>

              <span>{item.company}</span>

              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;