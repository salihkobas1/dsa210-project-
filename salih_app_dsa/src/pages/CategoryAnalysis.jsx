import React, { useState } from "react";

// Import chart images
import MonthlySpendingByCategory from "../assets/monthly-spending-by-category.png";
import SpendingByCategory from "../assets/avarage-spending-per-transaction-by-category.png";
import CorrelationBetweenCategories from "../assets/corelation-between-spending-categories.png"; // New chart added

const CategoryAnalysis = () => {
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
        <h1 style={styles.heading}>Category Spending Analysis</h1>
        <p style={styles.paragraph}>
          This report provides a comprehensive breakdown of spending patterns
          across primary expense categories: Food and Beverage, Entertainment,
          and Transportation. By analyzing spending patterns across months,
          transactions, and correlations between categories, valuable insights
          are revealed into the underlying financial behaviors.
        </p>
      </div>

      <div
        style={hoverStyles(0)}
        onMouseEnter={() => setHoveredSection(0)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h2 style={styles.subheading}>
          Correlation Between Spending Categories
        </h2>
        <p style={styles.paragraph}>
          This heatmap highlights the relationships between spending categories.
          The data reveals a positive correlation between Food and Beverage and
          Entertainment spending, indicating that higher spending in one often
          corresponds with higher spending in the other.
        </p>
        <img
          src={CorrelationBetweenCategories}
          alt="Correlation Between Spending Categories"
          style={{
            ...styles.chart,
            transform: hoveredSection === 0 ? "scale(1.03)" : "scale(1)",
          }}
        />
        <p style={styles.paragraph}>
          Transportation spending shows minimal correlation with other
          categories, reflecting its independent and consistent nature.
          Understanding these correlations can help prioritize budgeting for
          interrelated categories.
        </p>
      </div>

      <div
        style={hoverStyles(1)}
        onMouseEnter={() => setHoveredSection(1)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h2 style={styles.subheading}>Monthly Category Spending Trends</h2>
        <p style={styles.paragraph}>
          In this bar chart I analyzed monthly spending patterns and it revealed peaks in specific months, driven by
          increased Food and Beverage spending. Serious rises occured during
          December and January, indicating the influence of holiday celebrations
          and year-end festivities. Entertainment spending also sees substantial
          increases during peak months, suggesting leisure and social activities
          are prioritized by me during these periods.
        </p>
        <img
          src={MonthlySpendingByCategory}
          alt="Monthly Spending by Category"
          style={{
            ...styles.chart,
            transform: hoveredSection === 1 ? "scale(1.03)" : "scale(1)",
          }}
        />
        <p style={styles.paragraph}>
          Transportation spending remains relatively stable throughout the year,
          with marginal increases during holiday months, likely due to
          travel-related expenses. This visualization helps identify seasonal
          spending priorities across categories.
        </p>
      </div>

      <div
        style={hoverStyles(2)}
        onMouseEnter={() => setHoveredSection(2)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h2 style={styles.subheading}>Transaction Patterns by Category</h2>
        <p style={styles.paragraph}>
          This chart visualizes the average spending per transaction across the
          three categories. Food and Beverage leads with the highest
          per-transaction expenditure, highlighting its recurring and
          significant role in daily spending.
        </p>
        <img
          src={SpendingByCategory}
          alt="Average Spending Per Transaction by Category"
          style={{
            ...styles.chart,
            transform: hoveredSection === 2 ? "scale(1.03)" : "scale(1)",
          }}
        />
        <p style={styles.paragraph}>
          Entertainment transactions also show a high average spending per
          transaction, reflecting less frequent but larger discretionary
          purchases. Transportation expenses, while lower per transaction,
          exhibit consistent spending patterns, suggesting frequent but smaller
          payments such as public transportation fares.
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
        <h2 style={{ ...styles.subheading, color: "white" }}>Key Insights</h2>
        <p style={{ ...styles.paragraph, color: "white", fontSize: "1.3rem" }}>
          The analysis highlights key spending patterns across categories:
          <ul>
            <li>
              Food and Beverage consistently represents the highest expenditure
              across all analyses.
            </li>
            <li>
              Entertainment spending spikes during events, suggesting its
              discretionary nature is tied to social or celebratory occasions.
            </li>
            <li>
              Transportation, while consistently low, shows stability with
              occasional increases tied to holiday travel.
            </li>
          </ul>
          These insights underline the importance of strategic budget planning,
          particularly during high-spending months and event periods.
        </p>
      </div>
    </div>
  );
};

export default CategoryAnalysis;
