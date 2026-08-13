import Navbar from "../components/layout/Navbar";

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Stats from "../components/home/Stats";
import WhyChoose from "../components/home/WhyChoose";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Team from "../components/home/Team";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Contact from "../components/home/Contact";

import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Services />
      <Stats />
      <WhyChoose />
      <FeaturedProjects />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Home;