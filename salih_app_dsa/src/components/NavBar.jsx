import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { path: "/", label: "Home" },
    { path: "/trends", label: "Trends" },
    { path: "/event-analysis", label: "Event Analysis" },
    { path: "/category-analysis", label: "Category Analysis" },
    { path: "/conclusion", label: "Conclusion" },
  ];

  const styles = {
    nav: {
      background: scrolled
        ? "linear-gradient(135deg, rgba(26,26,46,0.95) 0%, rgba(22,33,62,0.95) 100%)"
        : "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      padding: "1rem",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: "all 0.3s ease-in-out",
      boxShadow: scrolled ? "0 4px 15px rgba(0,0,0,0.2)" : "none",
    },
    container: {
      maxWidth: "1400px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 2rem",
    },
    logo: {
      fontSize: "1.5rem", // Reduced from "2rem" to "1.5rem"
      fontWeight: "800",
      color: "#e94560",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem", // Reduced the gap between elements
      cursor: "pointer",
      textTransform: "uppercase",
      letterSpacing: "1.5px", // Reduced spacing between letters
      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
      transition: "all 0.4s ease",
    },    
    links: {
      display: "flex",
      gap: "1.5rem",
      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      color: "#8d99ae",
      fontSize: "1.1rem",
      fontWeight: "600",
      padding: "0.8rem 1.5rem",
      borderRadius: "25px",
      transition: "all 0.3s ease",
      border: "2px solid transparent",
      letterSpacing: "1px",
    },
    activeLink: {
      color: "#ffffff",
      backgroundColor: "#e94560",
      border: "2px solid #ff2e63",
      boxShadow: "0 0 15px rgba(233,69,96,0.4)",
    },
    mobileMenuButton: {
      display: "none",
      background: "none",
      border: "none",
      color: "#8d99ae",
      fontSize: "1.5rem",
      cursor: "pointer",
    },
    mobileMenu: {
      display: "none",
      flexDirection: "column",
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      backgroundColor: "rgba(26,26,46,0.95)",
      padding: "1rem",
    },
    mobileLink: {
      textDecoration: "none",
      color: "#8d99ae",
      fontSize: "1.1rem",
      fontWeight: "600",
      padding: "0.8rem 1.5rem",
      borderRadius: "25px",
      transition: "all 0.3s ease",
      border: "2px solid transparent",
      letterSpacing: "1px",
      marginBottom: "0.5rem",
    },
    "@media (max-width: 768px)": {
      links: {
        display: "none",
      },
      mobileMenuButton: {
        display: "block",
      },
      mobileMenu: {
        display: isOpen ? "flex" : "none",
      },
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link
          to="/"
          style={styles.logo}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#ff2e63";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.textShadow = "3px 3px 6px rgba(0,0,0,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#e94560";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.textShadow = "2px 2px 4px rgba(0,0,0,0.3)";
          }}
        >
          Spending Analysis by Salih Kobaş
        </Link>
        <div style={styles.links}>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                ...styles.link,
                ...(location.pathname === link.path ? styles.activeLink : {}),
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          style={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      <div
        style={{
          ...styles.mobileMenu,
          ...styles["@media (max-width: 768px)"].mobileMenu,
        }}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              ...styles.mobileLink,
              ...(location.pathname === link.path ? styles.activeLink : {}),
            }}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
