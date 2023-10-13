import React from "react";
import styles from "./featured.module.css";
const Featured = () => {
  return (
    <div className={styles.featured_container}>
      {/* Featured Content */}
      <div className={styles.featured_content}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.head}>{/* Head Content */}</div>
          <div className={styles.subhead}>{/* Subhead Content */}</div>
        </div>

        {/* Row or Card Container */}
        <div className={styles.row}>{/* Cards go here */}</div>

        {/* Or use .card_container */}
        <div className={styles.card_container}>{/* Cards go here */}</div>
      </div>
    </div>
  );
};

export default Featured;
