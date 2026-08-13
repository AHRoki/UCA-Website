import { useState,  useEffect } from "react";
import "./navbar.css";
import ThemeToggle from "../ThemeToggle";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "navbar navbar-scrolled" : "navbar"}>
      <div className="container">

        {/* Logo */}
        <a href="#home" className="logo">
  UCA
</a>

        {/* Navigation */}
        <nav>
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
<li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
<li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
<li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
<li><a href="#team" onClick={() => setMenuOpen(false)}>Team</a></li>
<li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        {/* Right Side */}
        <div className="navbar-right">

          <ThemeToggle />

          <button
  type="button"
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation menu"
  aria-expanded={menuOpen}
>
  ☰
</button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;
