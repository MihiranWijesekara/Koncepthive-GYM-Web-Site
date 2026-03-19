import AboutUs from "../components/AboutUs";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import ContactUS from "../components/ContactUs";

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
      <div style={{ textAlign: "center", padding: "4rem 2rem" }}></div>
      {/* <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h1>Welcome to the Home Page</h1>
        <p>This is a simple UI built with React.</p>
        <button
          style={{
            padding: "10px 24px",
            fontSize: "16px",
            borderRadius: "6px",
            background: "#646cff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Get Started
        </button>
      </div> */}
    </section>
  );
}

export default Home;
