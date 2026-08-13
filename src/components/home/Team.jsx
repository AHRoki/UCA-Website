import "./Team.css";
import team from "../../data/team";

function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="section-title">
          <h2>Our Team</h2>
          <p>
            Meet our experienced professionals who are committed to delivering
            excellence in every project.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.id}>
              <img
  src={member.image}
  alt={member.name}
  className="team-image"
  loading="lazy"
  decoding="async"
/>

              <div className="team-content">
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;