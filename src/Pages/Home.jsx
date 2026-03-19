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
      <HeroSection />
      <AboutUs />
      <Service />
      <ContactUS />
      <br></br>
      <Footer />
    </section>
  );
}

export default Home;
