import AboutUs from "../components/AboutUs";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import ContactUS from "../components/ContactUs";
import Footer from "../components/Footer";

function Home() {
  return (
    <section
      style={{
        background: "#000000",
      }}
    >
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="contact">
        <ContactUS />
      </div>
      <br />
      <Footer />
    </section>
  );
}

export default Home;
