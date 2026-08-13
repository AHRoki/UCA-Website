import "./WhyChoose.css";
import { FaUserTie, FaHandshake, FaGlobeAsia, FaAward } from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaUserTie />,
      title: "Experienced Consultants",
      text: "Professional experts providing reliable consultancy services."
    },
    {
      icon: <FaHandshake />,
      title: "Trusted Service",
      text: "Building long-term relationships through transparency and trust."
    },
    {
      icon: <FaGlobeAsia />,
      title: "Global Standards",
      text: "Delivering solutions aligned with international best practices."
    },
    {
      icon: <FaAward />,
      title: "Quality Commitment",
      text: "Committed to excellence in every project we undertake."
    }
  ];

  return (
    <section className="why-choose" id="why">
      <div className="container">

        <div className="section-title">
          <h2>Why Choose UCA</h2>
          <p>
            Universal Consulting Agency delivers innovative consulting
            solutions with professionalism, integrity and excellence.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;