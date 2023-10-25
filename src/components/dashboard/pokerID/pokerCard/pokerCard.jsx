import React from "react";
import styles from "./pokerCard.module.css"; // Import your CSS module
import pokerCardimg from "../../../../assets/pokercard.png";
const PokerCard = ({ status, color }) => {
  return (
    <div className={styles.PokerCard}>
      <div className={styles.CardContent}>
        <div className={styles.HeaderAndId}>
          <div className={styles.HeaderAndIdContent}>
            <img
              className={styles.Image152}
              src={pokerCardimg}
              alt="Poker Logo"
            />
            <div className={styles.HeaderId}>
              <div className={styles.Head}>Redstar</div>
              <div className={styles.Id}>Account ID: 6677</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.CardFooter}>
        <div className={styles.Divider}></div>
        <div className={styles.FooterContent}>
          <div className={styles.PokerStatus}>
            <div className={styles.Badge}>
              <div className={styles.Text} style={{ color }}>
                {status}
              </div>
            </div>
          </div>
          <div className={styles.PokerDate}>5th Nov | 12:02 PM</div>
        </div>
      </div>
    </div>
  );
};

export default PokerCard;
