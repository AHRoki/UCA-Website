import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div className="footer-about">
          <h2>UCA</h2>
          <p>
            Universal Consulting Agency provides professional engineering,
            consulting and project management services with quality,
            integrity and excellence.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📍 Dhaka, Bangladesh</p>
          <p>📞 +880 1XXXXXXXXX</p>
          <p>📧 info@uca.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Universal Consulting Agency. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;