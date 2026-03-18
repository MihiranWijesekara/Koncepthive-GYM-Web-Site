import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import gymLogo from "../img/bodybuilding-logo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Service", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <nav
      style={{
        background: "#111",
        color: "#C99B13",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.5rem 2rem",
        position: "relative",
        zIndex: 10,
        minHeight: "60px",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <img
          src={gymLogo}
          alt="Gym Logo"
          style={{
            height: 70,
            width: 70,
            borderRadius: 10,
            background: "#fff",
            marginRight: 10,
          }}
        />
      </a>

      {/* Desktop Nav Links */}
      <div
        className="nav-links"
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          fontWeight: 500,
          fontSize: 16,
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{
              color: "#C99B13",
              textDecoration: "none",
              padding: "0.25rem 0.75rem",
              borderRadius: 4,
              background: "transparent",
              transition: "background 0.2s",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="mobile-menu-icon"
        style={{ display: "none", cursor: "pointer" }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <X color="#C99B13" size={32} />
        ) : (
          <MenuIcon color="#C99B13" size={32} />
        )}
      </div>

      {/* Mobile Menu (animated) */}
      {menuOpen && (
        <div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "70vw",
            height: "100vh",
            background: "#111",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "2rem 1.5rem",
            zIndex: 100,
            boxShadow: "-2px 0 8px rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{ alignSelf: "flex-end", marginBottom: 32 }}
            onClick={() => setMenuOpen(false)}
          >
            <X color="#C99B13" size={32} />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#C99B13",
                textDecoration: "none",
                padding: "1rem 0",
                fontSize: 20,
                width: "100%",
                borderRadius: 4,
                background: "transparent",
                transition: "background 0.2s",
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
				@media (max-width: 900px) {
					.nav-links {
						display: none !important;
					}
					.mobile-menu-icon {
						display: block !important;
					}
				}
			`}</style>
    </nav>
  );
}
