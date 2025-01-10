import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      padding: "1rem 0", // Reduced padding
      color: "#94a3b8",
      marginTop: "auto",
      width: "100%",
      position: "fixed",
      bottom: 0,
      left: 0,
      zIndex: 1000,
      boxShadow: "0 -5px 15px rgba(0,0,0,0.15)", // Reduced shadow
    },
    container: {
      maxWidth: "1200px", // Reduced max width
      margin: "0 auto",
      padding: "0 1.5rem", // Reduced padding
      display: "flex",
      justifyContent: "center",
      gap: "2rem", // Reduced gap
    },
    link: {
      color: "#94a3b8",
      textDecoration: "none",
      fontSize: "1rem", // Reduced font size
      fontWeight: "500",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "0.4rem", // Reduced gap
      padding: "0.4rem 0.8rem", // Reduced padding
      borderRadius: "6px", // Reduced border radius
      background: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.1)",
      "&:hover": {
        transform: "translateY(-2px)",
        background: "rgba(255,255,255,0.1)",
        color: "#ffffff",
        boxShadow: "0 3px 10px rgba(0,0,0,0.2)", // Reduced shadow
      },
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <a
          href="https://github.com/salihkobas1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.link, "&:hover": { color: "#6ee7b7" } }}
          onMouseEnter={(e) => (e.target.style.color = "#6ee7b7")}
          onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/salih-koba%C5%9F-5bb26521a/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.link, "&:hover": { color: "#60a5fa" } }}
          onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
          onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
