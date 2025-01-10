import React from "react";

const ConclusionPage = () => {
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
      padding: "2.5rem",
      borderRadius: "16px",
      background: "white",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      position: "relative",
      overflow: "hidden",
      marginBottom: "3rem",
    },
    heading: {
      fontSize: "4rem",
      fontWeight: "800",
      textAlign: "center",
      marginBottom: "1.5rem",
      background: "linear-gradient(45deg, #1e40af, #3b82f6)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
    },
    subheading: {
      fontSize: "2.2rem",
      fontWeight: "700",
      color: "#2563eb",
      marginBottom: "1.5rem",
      textAlign: "center",
    },
    paragraph: {
      fontSize: "1.2rem",
      color: "#475569",
      lineHeight: "1.9",
      marginBottom: "1.5rem",
      letterSpacing: "0.3px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <h1 style={styles.heading}>Conclusion</h1>
        <h2 style={styles.subheading}>Summary of Findings</h2>
        <p style={styles.paragraph}>
          The analysis of my personal spending habits over the past two years
          has provided valuable insights into my financial behavior. By
          categorizing transactions into Food and Beverage, Entertainment, and
          Transportation, I identified meaningful trends and correlations
          between specific periods and spending patterns.
        </p>
        <p style={styles.paragraph}>
          Seasonal trends indicated that spending peaks during the winter
          holidays due to increased social and celebratory activities. In
          contrast, summer months show significantly reduced my expenses.
          I thought that reason behind is I spend less for my basic spends when I am at home. Weekly trends
          showed  there is spending peaks on Thursdays, Fridays, and
          weekends, which I correlated with social outings. 
        </p>
        <h2 style={styles.subheading}>Event Impact</h2>
        <p style={styles.paragraph}>
          In analysis I confirmed that, such as exams and sports
          matches, significantly influence my spending habits categorically. During exam periods,
          discretionary spending, especially in Entertainment, decreased
          , while Food and Beverage expenses remained stable and
          focused on essentials. Conversely, match days and holidays triggered
          spikes in my spending across Food and Beverage and Entertainment
          categories, driven by social and celebratory activities.
        </p>
        <h2 style={styles.subheading}>Conclusion and Hypothesis Validation</h2>
        <p style={styles.paragraph}>
          The findings validate the hypothesis that temporal and event-driven
          factors heavily influence my categorical spending habits. The structured approach
          of analyzing categories and specific periods allowed for a deeper
          understanding of my financial behavior. These insights not only
          confirm the initial hypothesis but also highlight actionable steps for my 
          improved budget management and financial planning which I can take it into account later.
        </p>
        <h2 style={styles.subheading}>Future Considerations</h2>
        <p style={styles.paragraph}>
          Moving forward, I plan to use these insights to anticipate periods of
          increased expenditure and allocate resources more effectively. By
          incorporating automated expense tracking tools and conducting more
          granular analyses, I aim to enhance the accuracy and relevance of
          future financial strategies.
        </p>
      </div>
    </div>
  );
};

export default ConclusionPage;
