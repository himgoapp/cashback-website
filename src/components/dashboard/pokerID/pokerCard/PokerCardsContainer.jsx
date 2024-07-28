import React from "react";
import styles from "./PokerCardsContainer.module.css"; // Make sure to import your CSS file
import PokerCard from "./pokerCard";

const PokerCardsContainer = () => {
  return (
    <div className={styles.PokerCardsContainer}>
      <div className={styles.TabContent}>
        <div className={styles.TabFilters}>
          <div
            className={styles.TabButton}
            style={{ borderBottom: "0.125rem #3968eb solid" }}
          >
            <div className={styles.TabText} style={{ color: "#3968EB" }}>
              View all
            </div>
          </div>
          <div className={styles.TabButton}>
            <div className={styles.TabText}>Successful</div>
          </div>
          <div className={styles.TabButton}>
            <div className={styles.TabText}>Pending</div>
          </div>
          <div className={styles.TabButton}>
            <div className={styles.TabText}>Aborted</div>
          </div>
        </div>
      </div>
      <div className={styles.CardsContent}>
        {/* Add your PokerCard components or content here */}
        {[
          ["Aborted", "#B42318"],
          ["Successful", "#027A48"],
          ["Successful", "#027A48"],
          ["Successful", "#027A48"],
          ["Aborted", "#B42318"],
          ["Pending", "#B54708"],
        ].map((status, index) => (
          <PokerCard status={status[0]} color={status[1]} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PokerCardsContainer;
