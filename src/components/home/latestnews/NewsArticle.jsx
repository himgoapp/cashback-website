import React from "react";
import styles from "./news_article.module.css";
import NewsArticlesFirstPage from "./newsarticles/NewsArticlesFirstPage";
import NewsArticlesSecondPage from "./newsarticles/NewArticlesSecondPage"; // Correct the import

import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";

const NewArticle = () => {
  return (
    <>
      <Navbar page="home" />
      <div className={styles.header_container}>Online Poker News</div>
      
      <NewsArticlesFirstPage /> {/* This will render the first page */}
      <NewsArticlesSecondPage /> {/* This will render the second page */}
    </>
  );
};

export default NewArticle;
