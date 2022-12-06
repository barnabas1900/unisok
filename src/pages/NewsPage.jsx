import React from "react";
import Footer from "../Components/Footer";
import NewsPageHeader from "../Components/NewsPageHeader";
import NewsCards from "../Components/NewsCards";
import NewsHeader from "../Components/NewsHeader";

const NewsPage = () => {
  return (
    <div>
      <NewsPageHeader />
      <NewsHeader />
      <NewsCards />
      <Footer />
    </div>
  );
};

export default NewsPage;
