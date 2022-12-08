import Home from "./pages/Home";
import NewsPage from "../src/pages/NewsPage";
import NewsArticle from "../src/pages/NewsArticle";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "../src/Components/ErrorPage";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  if (loading) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newspage" element={<NewsPage />} />
          <Route path="/newsarticle" element={<NewsArticle />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    )
  );
}

export default App;
