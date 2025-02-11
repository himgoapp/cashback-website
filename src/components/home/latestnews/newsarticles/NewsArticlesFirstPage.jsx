import React from 'react';
import styles from './NewArticlesFirstPage.module.css';

const NewArticlesFirstPage = () => {
  return (
    <div className={styles.page_container}>
      {/* Breadcrumb Navigation */}
      <div className={styles.breadcrumbs}>
        Home &gt; Latest News &gt; <a href="#">Wyoming and Indiana plan to introduce laws to legalize online gambling in 2025</a>
      </div>

      {/* Article Image and Title */}
      <div className={styles.article_card}>
        <div className={styles.image_container}>
          <img 
            src="https://cms.worldpokerdeals.com/assets/19cdbae1-455a-4e32-bd69-aa513ed20d44?width=600&height=355&format=webp&quality=75&fit=cover" 
            className={styles.header_image}
            alt="Wyoming and Indiana gambling news"
          />
          <div className={styles.article_title}>
            Wyoming and Indiana plan to introduce laws to legalize online gambling in 2025
          </div>
        </div>

        <div className={styles.author_publish}>
          <span>Author: Vargoso</span><span>Published: 31-01-2025</span>
        </div>
        <div className={styles.para}>
          Lawmakers in Wyoming and Indiana have been trying to pass laws to legalize online gambling for years. In 2025, the authors of these laws made significant changes to gain support from state legislators this year. This article will tell you about the proposed laws and how likely Wyoming and Indiana will have legal sites operating in the coming years.
        </div>
      </div>
    </div>
  );
};

export default NewArticlesFirstPage;
