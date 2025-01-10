import React, { useState } from "react";

// Import chart images
import SpendingByCategoryPeriods from "../assets/spending-by-category-during-different-periods.png";
import AvgDailySpendingPeriods from "../assets/avarage-daily-speding-for-holidays-match-days-and-exam-periods.png";
import AvgDailySpendingCategoryPeriods from "../assets/avarage-daily-spending-by-category-during-different-periods.png";

const EventAnalysis = () => {
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
    },
    paragraph: {
      fontSize: "1.2rem",
      color: "#475569",
      lineHeight: "1.9",
      marginBottom: "1.5rem",
      letterSpacing: "0.3px",
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
        <h1 style={styles.heading}>Event-Based Spending Analysis</h1>
        <p style={styles.paragraph}>
          This section explores how spending behavior shifts during key periods
          such as holidays, match days, and exam periods. These visualizations
          and analyses provide a comprehensive understanding of financial
          adjustments and category-wise spending trends across different event
          types.
        </p>
      </div>

      <div
        style={hoverStyles(0)}
        onMouseEnter={() => setHoveredSection(0)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h2 style={styles.subheading}>
          Spending by Category During Different Periods
        </h2>
        <p style={styles.paragraph}>
          In this bar chart I highlighted total spending across the categories of
          Entertainment, Food and Beverage, and Transportation during holidays,
          match days, and exam periods. Food and Beverage consistently show the
          highest spending across all periods, particularly during match days,
          reflecting social gatherings and dining out. Entertainment spending
          also peaks during holidays, while Transportation remains the lowest
          contributor across all categories.
        </p>
        <img
          src={SpendingByCategoryPeriods}
          alt="Spending by Category During Different Periods"
          style={{
            ...styles.chart,
            transform: hoveredSection === 0 ? "scale(1.03)" : "scale(1)",
          }}
        />
      </div>

      <div
        style={hoverStyles(1)}
        onMouseEnter={() => setHoveredSection(1)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h2 style={styles.subheading}>
          Average Daily Spending Across Event Types
        </h2>
        <p style={styles.paragraph}>
          This visualization compares average daily spending during holidays,
          match days, and exam periods. Holidays lead with the highest average
          daily expenditure, followed closely by match days. Exam periods show
          reduced spending, likely due to less discretionary spending and
          increased academic commitments.
        </p>
        <img
          src={AvgDailySpendingPeriods}
          alt="Average Daily Spending for Holidays, Match Days, and Exam Periods"
          style={{
            ...styles.chart,
            transform: hoveredSection === 1 ? "scale(1.03)" : "scale(1)",
          }}
        />
      </div>

      <div
        style={hoverStyles(2)}
        onMouseEnter={() => setHoveredSection(2)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h2 style={styles.subheading}>
          Average Daily Spending by Category During Different Periods
        </h2>
        <p style={styles.paragraph}>
          This bar chart visualizes percentage spending into specific
          categories across holidays, match days, and exam periods. Food and
          Beverage dominate across all periods, with match days showing the
          highest category average. Entertainment spending peaks during
          holidays, while Transportation remains consistent and comparatively
          lower across all periods.
        </p>
        <img
          src={AvgDailySpendingCategoryPeriods}
          alt="Average Daily Spending by Category During Different Periods"
          style={{
            ...styles.chart,
            transform: hoveredSection === 2 ? "scale(1.03)" : "scale(1)",
          }}
        />
      </div>

      <div
        style={{
          ...styles.section,
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
          color: "white",
          marginBottom: 0,
        }}
      >
        <h2 style={{ ...styles.subheading, color: "white" }}>Key Insights</h2>
        <p style={{ ...styles.paragraph, color: "white", fontSize: "1.3rem" }}>
          This analysis demonstrates the significant influence of event types on
          spending behavior. Holidays drive the highest expenditures, especially
          in Entertainment and Food and Beverage categories. Match days also see
          elevated spending, reflecting social and celebratory activities. Exam
          periods show restrained financial activity, with lower spending across
          all categories except essentials like food. These insights can guide
          more efficient financial planning for future events.
        </p>
      </div>
    </div>
  );
};

export default EventAnalysis;
