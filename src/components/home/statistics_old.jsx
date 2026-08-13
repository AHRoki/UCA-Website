import "./Statistics.css";

const stats = [
  {
    id: 1,
    number: "15+",
    title: "Years Experience",
  },
  {
    id: 2,
    number: "500+",
    title: "Completed Projects",
  },
  {
    id: 3,
    number: "350+",
    title: "Happy Clients",
  },
  {
    id: 4,
    number: "50+",
    title: "Professional Engineers",
  },
];

function Statistics() {
  return (
    <section className="statistics">
      <div className="container">
        <div className="statistics-grid">
          {stats.map((item) => (
            <div className="stat-card" key={item.id}>
              <h2>{item.number}</h2>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;