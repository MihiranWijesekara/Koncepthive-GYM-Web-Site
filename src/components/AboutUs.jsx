import gymLogo from "../img/ful-gym.jpg";

export default function AboutUs() {
  return (
    <div>
      <p
        style={{
          color: "#C99B13",
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: 18,
          marginTop: 100,
          marginLeft: 100,
        }}
      >
        Our Story
      </p>
      <h1
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: 48,
          marginLeft: 100,
        }}
      >
        <span style={{ color: "#fff" }}>Crafting Apex</span>
        <br />
        <span style={{ color: "#fff" }}>Results</span>
      </h1>
      <p
        style={{
          color: "#C99B13",
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: 32,
          marginLeft: 100,
        }}
      >
        Since 2023
      </p>
      <div
        style={{
          color: "#ffffff",
          fontFamily: "Inter, sans-serif",
          fontSize: 18,
          marginLeft: 100,
          maxWidth: 600,
          textAlign: "left",
        }}
      >
        <span style={{ fontWeight: 700 }}>
          Fitness Sport Center VIP was born from a simple vision:
          <br />
          to create a sanctuary where elite-level training and
          <br />
          luxury wellness converge. What started as a boutique
          <br />
          training studio has evolved into one of the city's most
          <br />
          exclusive destinations for physical optimization.
        </span>
        <br />
        <br />
        <span style={{ fontWeight: 700 }}>
          Our philosophy is rooted in the belief that training is a ritual,
          <br />
          every session is an investment in self-mastery, and every member
          <br />
          is treated like an athlete in peak season
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: 80,
          width: "100%",
        }}
      >
        {/* Left content ... (your existing code) */}

        {/* Right content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: -540,
            marginLeft: 700,
          }}
        >
          <div
            style={{
              position: "relative",
              marginBottom: 40,
            }}
          >
            {/* Badge */}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: -60,
                background: "#C99B13",
                color: "#111",
                fontWeight: 700,
                fontFamily: "Inter, sans-serif",
                fontSize: 20,
                borderRadius: 16,
                padding: "18px 28px",
                zIndex: 2,
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1 }}>
                100 +
              </div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>
                CLIENTS
                <br />
                TRANSFORMED
              </div>
            </div>
            {/* Image */}
            <img
              src={gymLogo}
              alt="Gym"
              style={{
                width: 320,
                height: 380,
                objectFit: "cover",
                borderRadius: 20,
                border: "3px solid #C99B13",
                boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
              }}
            />
          </div>
          {/* Advantage Section */}
          <div
            style={{
              background: "transparent",
              borderLeft: "3px solid #C99B13",
              padding: "32px 0 32px 32px",
              maxWidth: 420,
              color: "#fff",
            }}
          >
            <div
              style={{
                color: "#C99B13",
                fontWeight: 700,
                fontSize: 24,
                fontFamily: "Inter, sans-serif",
                marginBottom: 12,
              }}
            >
              Fitness Sport Center&nbsp;
              <span style={{ color: "#C99B13" }}>Advantage</span>
            </div>
            <div
              style={{
                fontWeight: 400,
                fontSize: 16,
                marginBottom: 18,
                color: "#fff",
              }}
            >
              From our science-backed programs to our high-tech recovery lounge,
              every element is designed to accelerate your transformation.
              Whether your goal is a complete body composition change or
              competitive-level performance, we provide the perfect platform
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 10,
                    height: 10,
                    background: "#C99B13",
                    borderRadius: "50%",
                    marginRight: 12,
                  }}
                ></span>
                Fully private, personalized training sanctuaries
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 10,
                    height: 10,
                    background: "#C99B13",
                    borderRadius: "50%",
                    marginRight: 12,
                  }}
                ></span>
                Expert coaching by internationally certified, results-proven
                trainers
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: 10,
                    height: 10,
                    background: "#C99B13",
                    borderRadius: "50%",
                    marginRight: 12,
                  }}
                ></span>
                State-of-the-art diagnostic and biometrics testing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
