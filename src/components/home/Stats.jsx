import "./Stats.css";

function Stats() {
  const stats = [
    { number: "250+", title: "Completed Projects" },
    { number: "120+", title: "Happy Clients" },
    { number: "15+", title: "Years Experience" },
    { number: "50+", title: "Expert Engineers" },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h2>{item.number}</h2>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;