import "./Services.css";

function Services() {
  const services = [
    {
      title: "Architectural Design",
      desc: "Modern architectural planning and innovative building designs."
    },
    {
      title: "Structural Engineering",
      desc: "Safe and durable structural solutions for every project."
    },
    {
      title: "Project Management",
      desc: "Complete supervision from planning to project completion."
    },
    {
      title: "Consultancy",
      desc: "Professional engineering and construction consultancy services."
    },
    {
      title: "Interior Design",
      desc: "Creative interior solutions for residential and commercial spaces."
    },
    {
      title: "Construction",
      desc: "High-quality construction services with experienced professionals."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="subtitle">
          We provide complete engineering and consulting solutions.
        </p>

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;