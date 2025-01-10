import React, { useState } from "react";

// Import chart images
import MonthlySpendingChart from "../assets/monthly-spending-trends.png";
import WeeklySpendingChart from "../assets/avarage-spending-by-day-of-the-week.png";
import CorrelationHeatmapChart from "../assets/corelation-between-spending-categories.png";
import CumulativeSpendingChart from "../assets/cumulative-spending-over-time.png";
import SpendingByCategoryPeriods from "../assets/spending-by-category-during-different-periods.png";
import MonthlySpendingByCategory from "../assets/monthly-spending-by-category.png";

const HomePage = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "3rem auto 6rem auto",
      padding: "3rem",
      backgroundColor: "#ffffff",
      borderRadius: "24px",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
      fontFamily: "'Poppins', sans-serif",
      background: "linear-gradient(135deg, #ffffff, #f0f9ff)",
    },
    section: {
      marginBottom: "4rem",
      padding: "2.5rem",
      borderRadius: "16px",
      background: "white",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      transform: "scale(1)",
      position: "relative",
      overflow: "hidden",
    },
    heading: {
      fontSize: "4rem",
      fontWeight: "800",
      background: "linear-gradient(45deg, #1e40af, #3b82f6)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textAlign: "center",
      marginBottom: "2rem",
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
      color: "#334155",
      lineHeight: "1.9",
      marginBottom: "2rem",
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
        <h1 style={styles.heading}>Analysis of Personal Expenses</h1>
        <p style={styles.paragraph}>
          <strong>Project Overview:</strong> In this project I examined my personal
          spending habits over the past two years, using categorized transaction
          data to identify trends and correlations in my spending. I tried to aim
          uncover insights into how specific periods, such as exam times,
          holidays, and sports events, influence my financial behavior. Instead of focusing on spending amounts I focused on
          categorical spendings.The reason behind is in these 2 year there were high volatility in our economy so 
          focusing only on spending amount wouldn't be effective. By
          analyzing these periods, I aim to understand the relationship between
          recurring events and changes in expenditure patterns, ultimately
          identifying opportunities for my budget optimization and informing my
          financial decision-making.
        </p>
      </div>

      <div
        style={hoverStyles(0)}
        onMouseEnter={() => setHoveredSection(0)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h2 style={styles.subheading}>Monthly Patterns</h2>
        <p style={styles.paragraph}>
          I tried to highlight peaks during the end of the year,
          likely due to holiday-related expenses. Conversely, summer months
          demonstrate a notable decrease in spending, aligning with periods of
          decreased individual financial responsibility. The chart below
          illustrates these fluctuations, providing a comprehensive view of
          expenditure over time.
        </p>
        <img
          src={MonthlySpendingChart}
          alt="Monthly Spending Trends"
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
            transform: hoveredSection === 2 ? "scale(1.03)" : "scale(1)",
          }}
        />
      </div>

      <div
        style={hoverStyles(3)}
        onMouseEnter={() => setHoveredSection(3)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h2 style={styles.subheading}>
          Correlation Between Spending Categories
        </h2>
        <p style={styles.paragraph}>
          This heatmap visualizes the correlation between spending categories,
          providing insights into how closely related certain types of expenses
          are. For example, a strong positive correlation between food and
          transportation suggests a relationship in spending habits. This
          information helps identify areas where expenses might be connected and
          managed more effectively.
        </p>
        <img
          src={CorrelationHeatmapChart}
          alt="Correlation Between Spending Categories"
          style={{
            ...styles.chart,
            transform: hoveredSection === 3 ? "scale(1.03)" : "scale(1)",
          }}
        />
      </div>

      <div
        style={hoverStyles(4)}
        onMouseEnter={() => setHoveredSection(4)}
        onMouseLeave={() => setHoveredSection(null)}
      >
        <h2 style={styles.subheading}>Cumulative Spending Over Time</h2>
        <p style={styles.paragraph}>
          The cumulative spending chart illustrates how total expenses have
          grown over the two-year period. This visualization helps in tracking
          long-term spending patterns and identifying months or periods where
          spending significantly increased or decreased.
        </p>
        <img
          src={CumulativeSpendingChart}
          alt="Cumulative Spending Over Time"
          style={{
            ...styles.chart,
            transform: hoveredSection === 4 ? "scale(1.03)" : "scale(1)",
          }}
        />
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
          This analysis identifies clear trends in spending behavior, including
          peak periods during holidays and reduced expenses during summer
          months. Weekly patterns demonstrate elevated spending toward the
          weekend, while the correlation heatmap reveals spending relationships
          between categories. These findings provide actionable insights for
          improved budget management and financial planning.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
