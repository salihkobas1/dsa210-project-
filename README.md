# Analysis of Personal Expenses and Understanding of the Periodical Relationship Between These Expenses

## Project Overview
In this project, I will analyze my personal spending habits over the last two years using data extracted from my bank statements. The goal is to uncover insights into my spending patterns by categorizing transactions, analyzing trends, and identifying correlations if there any. Moreover, I will focus to specific periods, such as exam times, holiday periods and sports events, to explore the impact of these events or terms on my spending behavior.

---

## Motivation
I have been interested in finance from my childhood and I have always tried to analyze my spendings and savings by periods. So I thought it is an oppurtunity to do it professionally. Understanding my personal spending habits can lead to better financial management and decision-making in my future. By analyzing my data, I aim to:
- Identify how spending varies across categories like food, entertainment, clothes and transportation.
- Observe weekly, monthly and yearly trends to identify spending peaks.
- Discover correlations between specific events (e.g., exams, sports matches, vacations) and changes in my spending patterns if there any.
- Uncover repetitive spending behaviors and try to optimize financial habits.

---

## Data Source
The data for this project comes from:
1. **Bank Statements**: Provided as PDF files, containing detailed transaction information.
2. **External Data**: Contextual data like exam schedules (e.g., from MySu), vacation dates and sports events (e.g., Fenerbahçe matches).

---

## Data Analysis Workflow

### 1. Data Preparation
- **PDF to CSV Conversion**: Extracting bank statement data from PDFs using Python libraries like `tabula` or `camelot`.
- **Data Cleaning**: Formatting, cleaneaning, and preprocessing data for analysis. Remove irrelevant entries.
- **Categorization**: Assigning transactions to categories (e.g., Food, Entertainment, Sports) using keyword-based classification.

### 2. Exploratory Data Analysis (EDA)
- **Category Analysis**: Analyzing spending across different categories.
- **Trend Analysis**: Exploring spending patterns over time (e.g., monthly, yearly).
- **Periodic Analysis**: I will focus on specific periods (e.g., exam periods, sports events).

### 3. Correlation Analysis
  - Identifying relationships between spending categories and events:
  - Do sports events correlate with higher spending on entertainment?
  - Do exam periods correlate with increased food ordering or study-related expenses?

### 4. Visualization
- **Category-Based Visualizations**: Bar and pie charts for spending distribution across categories.
- **Trend Analysis**: Line charts for monthly or yearly spending trends.
- **Event Correlations**: I will highlight spending patterns tied to events (e.g., exam periods, sports matches).

---

## Aims
- **Category-Based Spending Insights**: Understanding which categories consume the largest portion of my budget.
- **Time-Based Trends**: Identifying spending peaks and troughs over weeks, months and years.
- **Event-Based Correlations**: Insights into how specific events influence my spending habits.
- **Optimization Opportunities**: Uncovering my unnecessary repetitive spendings to improve financial habits.

---

## Tools

- [Python](https://www.python.org/): Core programming language for data analysis and visualization.
- [Pandas](https://pandas.pydata.org/): For data manipulation and preprocessing.
- [Matplotlib](https://matplotlib.org/): For creating visualizations.
- [Seaborn](https://seaborn.pydata.org/): For advanced statistical visualizations.
- [Tabula](https://tabula.technology/): For extracting tabular data from PDF files.
- [Camelot](https://camelot-py.readthedocs.io/): For high-accuracy PDF table extraction.
- [Numpy](https://numpy.org/): For numerical computations.
- [Regex (Python re module)](https://docs.python.org/3/library/re.html): For parsing and categorizing transaction descriptions.
- [Jupyter Notebook](https://jupyter.org/): For interactive data exploration and analysis.


---


