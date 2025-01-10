import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import StepsPage from "./pages/EventAnalysis";
import WatchTimePage from "./pages/CategoryAnalysis";
import CombinedPage from "./pages/Trends";
import ConclusionPage from "./pages/Conclusion";

const App = () => {
  const styles = {
    app: {
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
    },
  };

  return (
    <Router>
      <div style={styles.app}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event-analysis" element={<StepsPage />} />
          <Route path="/category-analysis" element={<WatchTimePage />} />
          <Route path="/trends" element={<CombinedPage />} />
          <Route path="/conclusion" element={<ConclusionPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
