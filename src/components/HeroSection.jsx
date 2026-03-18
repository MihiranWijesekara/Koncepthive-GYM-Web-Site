import coupleGym from "../img/couple-gym.jpg";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        color: "#C99B13",
        textAlign: "center",
        padding: "4rem 2rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image with opacity */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "110%",
          background: `url(${coupleGym}) center/cover no-repeat`,
          opacity: 0.9,
          zIndex: 0,
        }}
      />
      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        {/* Title Line 1 */}
        <h1
          style={{
            fontSize: "clamp(36px, 8vw, 96px)", // responsive
            fontWeight: 700,
            marginBottom: "10px",
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.1,
          }}
        >
          <span style={{ color: "#fff" }}>ELITE </span>
          <span style={{ color: "#C99B13" }}>FITNESS</span>
          <span style={{ color: "#fff" }}> FOR</span>
        </h1>

        {/* Title Line 2 */}
        <h1
          style={{
            fontSize: "clamp(36px, 8vw, 96px)", // responsive
            fontWeight: 700,
            marginBottom: "20px",
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.1,
          }}
        >
          <span style={{ color: "#fff" }}>EVERY BODY</span>
        </h1>

        <button
          style={{
            background: "#C99B13",
            color: "#111",
            fontSize: 24,
            fontWeight: 700,
            border: "none",
            borderRadius: 20,
            padding: "18px 48px",
            marginTop: "32px",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
            transition: "background 0.2s",
            marginBottom: -70,
          }}
        >
          Join Now
        </button>
      </div>
    </section>
  );
}
