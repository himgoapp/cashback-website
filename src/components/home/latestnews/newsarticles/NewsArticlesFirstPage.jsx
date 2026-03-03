import React from "react";
import styles from "./NewArticlesFirstPage.module.css";

// Sample data for multiple articles
const articleData = {
  "1": {
    title: "Wyoming and Indiana plan to introduce laws to legalize online gambling in 2025",
    image: "https://cms.worldshoppingdeals.com/assets/19cdbae1-455a-4e32-bd69-aa513ed20d44?width=600&height=355&format=webp&quality=75&fit=cover",
    author: "Vargoso",
    date: "31-01-2025",
    category: "Online Gambling",
    content: "Lawmakers in Wyoming and Indiana have been trying to pass laws to legalize online gambling for years. In 2025, the authors of these laws made significant changes to gain support from state legislators this year. This article will tell you about the proposed laws and how likely Wyoming and Indiana will have legal sites operating in the coming years.",
  },
  "2": {
    title: "New Jersey Prepares Law to Regulate Sweepstakes Gaming",
    image: "https://cms.worldshoppingdeals.com/assets/05e86c50-4468-4600-8e2f-ba70a7799d7a?width=600&height=355&format=webp&quality=75&fit=cover",
    author: "John Doe",
    date: "15-02-2025",
    category: "Sweepstakes Gaming",
    content: "New Jersey Assemblyman Clinton Calabrese proposes that sweepstakes sites be recognized as gambling...",
  },
};

const NewsArticlesFirstPage = ({ articleId }) => {
  const article = articleData[articleId];

  if (!article) {
    return <div className={styles.page_container}>Article not found.</div>;
  }

  return (
    <div className={styles.page_container}>
      {/* Banner with overlay */}
      <div className={styles.banner_container}>
        <img src={article.image} alt={article.title} className={styles.banner_image} />
        <div className={styles.banner_overlay}></div>
      </div>

      {/* Meta Info */}
      <div className={styles.meta_info}>
        <div className={styles.author_section}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt={article.author}
            className={styles.author_avatar}
          />
          <span>{article.author}</span>
        </div>
        <div className={styles.date_category}>
          <span className={styles.date_icon}>📅 {article.date}</span>
          <span className={styles.category_icon}>📌 {article.category}</span>
        </div>
      </div>

      {/* Title */}
      <h1 className={styles.article_title}>{article.title}</h1>

      {/* Content */}
      <p className={styles.article_content}>{article.content}</p>
    </div>
  );
};

export default NewsArticlesFirstPage;
