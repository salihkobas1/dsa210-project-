import React, { useState } from "react";

// Import chart images
import WeeklySpendingChart from "../assets/clenaed-weekly-spending-trends.png";
import MonthlySpendingChart from "../assets/monthly-spending-trends.png";
import SeasonalSpendingChart from "../assets/seasonal-spending-trends.png";

const Trends = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "3rem auto",
      padding: "3rem",
      backgroundColor: "#ffffff",
      borderRadius: "24px",
      boxShadow: "0 20px 80px rgba(0, 0, 0, 0.15)",
      fontFamily: "'Poppins', sans-serif",
      background: "linear-gradient(135deg, #ffffff, #f0f9ff)",
    },
    section: {
      marginBottom: "3.5rem",
      padding: "2.5rem",
      borderRadius: "16px",
      background: "white",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      transform: "scale(1)",
      position: "relative",
      overflow: "hidden",
    },
    heading: {
      fontSize: "4rem",
      fontWeight: "800",
      marginBottom: "1.5rem",
      background: "linear-gradient(45deg, #1e40af, #3b82f6)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textAlign: "center",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    subheading: {
      fontSize: "2.2rem",
      fontWeight: "700",
      color: "#2563eb",
      marginBottom: "1.5rem",
      position: "relative",
      transition: "color 0.3s ease",
    },
    paragraph: {
      fontSize: "1.2rem",
      color: "#475569",
      lineHeight: "1.9",
      marginBottom: "1.5rem",
      letterSpacing: "0.3px",
      transition: "color 0.3s ease",
    },
    chart: {
      width: "100%",
      height: "auto",
      borderRadius: "16px",
      marginTop: "2rem",
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
    },
  };

  const hoverStyles = (index) => ({
    ...styles.section,
    transform: hoveredSection === index ? "scale(1.02)" : "scale(1)",
    boxShadow:
      hoveredSection === index
        ? "0 20px 40px rgba(0, 0, 0, 0.2)"
        : styles.section.boxShadow,
  });

  return (
    <div style={styles.container}>
      <div style={{ ...styles.section, textAlign: "center" }}>
        <h1 style={styles.heading}>Spending Trends Analysis</h1>
        <p style={styles.paragraph}>
          In this section, I analyzed spending patterns across different
          time frames, focusing on weekly, monthly, and seasonal trends. By
          examining these patterns, significant insights into my financial
          behavior are uncovered, highlighting the influence of academic
          schedules, events, and other time-based factors on expenditure.
        </p>
      </div>

      <div
        style={hoverStyles(0)}
        onMouseEnter={() => setHoveredSection(0)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h2 style={styles.subheading}>Weekly Spending Trends</h2>
        <p style={styles.paragraph}>
          The updated weekly spending chart showcases the fluctuations in my
          weekly expenses, with specific highlights for important periods. The
          yellow bands indicate exam periods, where a decrease in spending is
          observed, reflecting a focus on academic commitments. On the other
          hand, green bands represent match days, which correlate with spikes in
          spending due to increased social and entertainment-related activities.
        </p>
        <img
          src={WeeklySpendingChart}
          alt="Weekly Spending Trends"
          style={{
            ...styles.chart,
            transform: hoveredSection === 0 ? "scale(1.03)" : "scale(1)",
          }}
        />
        <p style={styles.paragraph}>
          The chart also highlights the overall average weekly spending as a red
          dashed line, helping to contextualize periods of above-average and
          below-average expenses. This visualization provides a clear picture of
          how specific events and academic schedules influence weekly spending
          behavior.
        </p>
      </div>

      <div
        style={hoverStyles(1)}
        onMouseEnter={() => setHoveredSection(1)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h2 style={styles.subheading}>Monthly Spending Trends</h2>
        <p style={styles.paragraph}>
          Monthly analysis shows a marked decrease in spending during summer
          months (June to August). This is due to the reduced need to cover
          expenses as most necessities during this period are externally
          supported. Peaks in spending are observed in September and December,
          which align with semester beginnings and holiday activities,
          respectively. This indicates increased financial obligations at the
          start of academic periods and during festive seasons.
        </p>
        <img
          src={MonthlySpendingChart}
          alt="Monthly Spending Trends"
          style={{
            ...styles.chart,
            transform: hoveredSection === 1 ? "scale(1.03)" : "scale(1)",
          }}
        />
        <p style={styles.paragraph}>
          This visualization captures the cyclical nature of monthly spending,
          reflecting both academic and personal priorities during specific
          months.
        </p>
      </div>

      <div
        style={hoverStyles(2)}
        onMouseEnter={() => setHoveredSection(2)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h2 style={styles.subheading}>Seasonal Spending Patterns</h2>
        <p style={styles.paragraph}>
          Seasonal trends highlight significant variations in spending. Spring
          emerges as the season with the highest expenditures, driven by
          academic requirements and social engagements. Summer shows the lowest
          spending due to minimal personal expenses during this period. Winter
          spending peaks during the festive season, and Fall remains steady as
          academic and lifestyle routines stabilize.
        </p>
        <img
          src={SeasonalSpendingChart}
          alt="Seasonal Spending Trends"
          style={{
            ...styles.chart,
            transform: hoveredSection === 2 ? "scale(1.03)" : "scale(1)",
          }}
        />
        <p style={styles.paragraph}>
          The seasonal breakdown highlights how time-based factors such as
          academic demands and social commitments influence overall expenditure.
        </p>
      </div>

      <div
        style={{
          ...styles.section,
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
          color: "white",
          marginBottom: 0,
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 style={{ ...styles.subheading, color: "white" }}>Key Takeaways</h2>
        <p style={{ ...styles.paragraph, color: "white", fontSize: "1.3rem" }}>
          This analysis reveals distinct spending trends influenced by academic
          schedules, significant events, and seasonal factors. Weekly
          expenditures decrease during exam periods, while specific events lead
          to spending spikes. Monthly data reflects increased obligations during
          semester starts and holidays, while seasonal spending trends align
          with academic and social patterns. These findings provide a detailed
          understanding of spending behaviors and opportunities for future
          financial planning.
        </p>
      </div>
    </div>
  );
};

export default Trends;
