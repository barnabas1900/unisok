import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/NewsPageHeader";
import NewsCards from "../Components/NewsCards";
import NewsHeader from "../Components/NewsHeader";

const NewsPage = () => {
  return (
    <div>
      <Header />
      <NewsHeader />
      <NewsCards />
      <Footer />
    </div>
  );
};

export default NewsPage;
