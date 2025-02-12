import React from "react";
import { useParams } from "react-router-dom"; 
import styles from "./news_article.module.css";
import NewsArticlesFirstPage from "./newsarticles/NewsArticlesFirstPage";
import NewsArticlesSecondPage from "./newsarticles/NewArticlesSecondPage"; 
import Navbar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";

const NewArticle = () => {
  const { id } = useParams(); 

  return (
    <>
      <Navbar page="home" />
      <div className={styles.header_container}>Online Poker News</div>
      
      <NewsArticlesFirstPage articleId={id} />
      <NewsArticlesSecondPage articleId={id} />
      
      <div
        style={{
          width: "100%",
          backgroundColor: "#3968eb",
        }}
        className="flex_center"
      >
        <Footer />
      </div>
    </>
  );
};

export default NewArticle;
