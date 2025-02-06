import React from 'react';
import styles from './NewArticlesFirstPage.module.css'

const NewArticlesFirstPage = () => {
  return (
    <div className={styles.page_container}>
      <div className={styles.article_card}>
        <div className={styles.header_flex_container}>
          <div className={styles.image_container}>
            <img 
              src="https://cms.worldpokerdeals.com/assets/20c0567f-ce1c-4981-a6ce-3ad9e9493a46?format=webp&quality=75" 
              alt="Best Online Poker Sites In Texas 2025" 
              className={styles.header_image}
            />
          </div>
          <div className={styles.header_content}>
            <h1 className={styles.header_title}>
              Best Online Poker Sites In Texas 2025
            </h1>
            <div className={styles.meta_info}>
              <span>📅 February 6, 2025</span>
              <span>🏷 Poker Basics</span>
            </div>
          </div>
        </div>
        <div >
          <p className={styles.content_section}>
            "Poker is one of the most popular games among gambling enthusiasts in the USA. However, those who decide 
            to play online poker in Texas for real money may face challenges..."
          </p>
        </div>
      </div>
   
    
    </div>
  );
};

export default NewArticlesFirstPage;
