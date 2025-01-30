import React from 'react';
import styles from './featured_card.module.css';

const FeaturedCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <img src={data.image} alt={data.heading} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h5>{data.heading}</h5>
        <p>{data.content}</p>
        <div className={styles.cardMeta}>
          <span>{data.writer}</span> | <span>{data.date}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
