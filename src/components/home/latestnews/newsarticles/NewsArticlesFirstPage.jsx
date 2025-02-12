import React from "react";
import styles from "./NewArticlesFirstPage.module.css";

// Sample data for multiple articles
const articleData = {
  "1": {
    title: "Wyoming and Indiana plan to introduce laws to legalize online gambling in 2025",
    image: "https://cms.worldpokerdeals.com/assets/19cdbae1-455a-4e32-bd69-aa513ed20d44?width=600&height=355&format=webp&quality=75&fit=cover",
    author: "Vargoso",
    date: "31-01-2025",
    content: "Lawmakers in Wyoming and Indiana have been trying to pass laws to legalize online gambling for years...",
  },
  "2": {
    title: "New Jersey Prepares Law to Regulate Sweepstakes Gaming",
    image: "https://cms.worldpokerdeals.com/assets/05e86c50-4468-4600-8e2f-ba70a7799d7a?width=600&height=355&format=webp&quality=75&fit=cover",
    author: "John Doe",
    date: "15-02-2025",
    content: "New Jersey Assemblyman Clinton Calabrese proposes that sweepstakes sites be recognized as gamblin...",
  },
};

const NewsArticlesFirstPage = ({ articleId }) => {
  const article = articleData[articleId];

  if (!article) {
    return <div className={styles.page_container}>Article not found.</div>;
  }

  return (
    <div className={styles.page_container}>
      <div className={styles.breadcrumbs}>
        Home &gt; Latest News &gt; <a href="#">{article.title}</a>
      </div>

      <div className={styles.article_card}>
        <div className={styles.image_container}>
          <img src={article.image} className={styles.header_image} alt={article.title} />
          <div className={styles.article_title}>{article.title}</div>
        </div>

        <div className={styles.author_publish}>
          <span>Author: {article.author}</span> <span>Published: {article.date}</span>
        </div>
        <div className={styles.para}>{article.content}</div>
      </div>
    </div>
  );
};

export default NewsArticlesFirstPage;
