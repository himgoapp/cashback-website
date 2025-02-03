import React from "react";
import styles from "./pokerCard.module.css"; // Import your CSS module
import pokerCardimg from "../../../../assets/pokercard.png";
import moment from "moment";
import { statusBaseColor } from "../../../../helperFxns/colorCode";
import jungleepokerlogo from "../../../../assets/jungleepokerlogo.svg";
import pokerbaazi from "../../../../assets/pokerbaazi.png";
import logompl from "../../../../assets/mpllogo.svg"
const PokerCard = ({ status, color, item }) => {

  return (
    <div className={styles.PokerCard}>
      <div className={styles.CardContent}>
        <div className={styles.HeaderAndId}>
          <div className={styles.HeaderAndIdContent}>
          <img
							src={
								item.productId && item.productId.name && item.productId.name === "Poker Baazi"
									? pokerbaazi
									: item.productId && item.productId.name && item.productId.name === "Junglee Poker"
									? jungleepokerlogo
									: logompl
							}
						style={{height:"95px",width:"95px"}}
						/>{" "}
            <div className={styles.HeaderId}>
              <div className={styles.Head}>
                {item && item.productId ? item.productId.name : ""}
              </div>
              <div className={styles.Id}>
                Account ID: {item && item.referenceId ? item.referenceId : ""}
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className={styles.CardFooter}>
        <div className={styles.Divider}></div>
        <div className={styles.FooterContent}>
          <div className={styles.PokerStatus}>
            <div className={styles.Badge}>
              <div className={styles.Text} style={statusBaseColor(status)}>
                {status}
              </div>
            </div>
          </div>
          <div className={styles.PokerDate}>
            {item && item.createdAt
              ? `${moment(item.createdAt).format("DD MMM YYYY")} || ${moment(
                  item.createdAt
                ).format("LT")} `
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokerCard;
