# DSA210 Project

This repository contains the implementation of the DSA210 Project, which I focused on analyzing my personal spending habits over two years using categorized transaction data which I took from my bank account. The goal of this project is to identify meaningful trends, evaluate the impact of events on expenditures, and provide actionable insights for  future financial planning and budget optimization.

---

## Installation

To run the project locally, you can follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Git](https://git-scm.com/) installed

### Steps

1. Clone the repository:
    bash
    git clone https://github.com/salihkobas1/dsa210-project.git
    
2. Navigate to the project folder:
    bash
    cd dsa210-project
    
3. Install dependencies:
    bash
    npm install
    
4. Start the development server:
    bash
    npm start
    

---

## Deployment

Please visit my webpage for presentation:) : 

[View Live Application](https://dsa210-project-rg7s.vercel.app)

---

## Features of my project

- Comprehensive Analysis: Detailed insights into spending habits over two years.
- Categorization of Expenses: I categorized transactions into Food and Beverage, Entertainment, and Transportation.
- Visualizations: Charts and graphs representing spending trends, patterns, and anomalies.
- Event-Based Insights: Analysis of spending behavior during key periods, including exam weeks, holidays, and sports events.
- Budgeting Recommendations: Insights for financial planning and future budget optimization.
- Analysis File: Includes a Jupyter Notebook file (DataAnalysis.ipynb) under the utils folder. This file contains Python-based data analysis scripts used to preprocess the data and generate insights.

---

## Hypothesis

The hypothesis for this project was:

"Spending habits are influenced by temporal (e.g., seasonal changes, weekly schedules) and event-driven factors (e.g., exams, holidays, sports matches)."

The primary objective was to validate whether key events and time periods significantly impact spending patterns across categories like Food and Beverage, Entertainment, and Transportation.

### Results

Since the financial situation of our country has experienced high volatility in the last 2 years, I decided to focus on spending habit as I stated in the proposal, instead of focusing on spending amounts.
Our analysis confirmed the hypothesis with the following key findings:

1. Event-Driven Spending:
   - During exams, discretionary spending, especially in Entertainment, decreased significantly. This reflects a shift in focus toward academics and essential needs.
   - Sports matches and holidays triggered spikes in spending across Food and Beverage and Entertainment categories. We can clearly see that in graphs.

2. Temporal Trends:
   - Seasonal trends revealed increased spending during winter (holidays) and steady spending during fall and spring. Summer months showed a notable decline in expenses, likely due to reduced personal responsibilities.
   - Weekly patterns showed higher expenditures on Thursdays, Fridays, and weekends, correlating with leisure activities and social engagements.

3. Category Insights:
   - Food and Beverage consistently represented the highest expenditure across all periods.
   - Transportation spending remained stable, with occasional increases during holidays due to travel-related expenses.

### Conclusion

Findings validated my hypothesis, highlighting that spending habits are indeed driven by temporal and event-specific factors. These insights provide a structured understanding of financial behavior and offer opportunities for better resource allocation and budgeting.

---

## Technologies Used

- Frontend: React.js for building the user interface.
- Data Analysis and Visualization: Python and Chart.js for preprocessing and creating insightful visualizations.
- Deployment: Vercel for hosting the application and ensuring seamless access.

---

## Visualizations

Key visualizations included in the application:
- Category Spending Trends: Breakdown of spending percentages for Food and Beverage, Entertainment, and Transportation before, during, and after events.
- Weekly Spending Patterns: Spending trends during weeks with exam periods and event highlights.
- Seasonal and Monthly Trends: Analysis of how spending varies across seasons and months.
- Spending Anomalies: Detection of outliers and unusual spending behaviors.
- Correlation Heatmap: Relationships between categories to identify overlaps or distinctions in spending patterns.

---

## File Structure

- *src/*: Contains the React components for the application.
- *public/*: Static files for the project.
- *utils/*: Contains the DataAnalysis.ipynb file, which provides Python-based analysis scripts for preprocessing data and generating insights. This file can be executed using Jupyter Notebook to reproduce the data analysis.

---

## Future Scope

- Granular Analysis: Extend the data to include subcategories for more detailed insights.
- Automation: Integrate automated tracking tools for real-time spending analysis.
- Scalability: Apply the methodology to larger datasets for broader applicability.
- User Personalization: Allow users to input their own spending data to generate tailored insights.

---
