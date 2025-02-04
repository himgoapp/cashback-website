import React from "react";
import styles from "./pokerCard.module.css"; // Import your CSS module
import pokerCardimg from "../../../../assets/pokercard.png";
import moment from "moment";
import { statusBaseColor, imagePicker } from "../../../../helperFxns/colorCode";



const PokerCard = ({ status, color, item }) => {
  return (
    <div className={styles.PokerCard}>
      <div className={styles.CardContent}>
        <div className={styles.HeaderAndId}>
          <div className={styles.HeaderAndIdContent}>
            <img
              src={
                item && item.productId && item.productId.name
                  ? imagePicker(item.productId.name)
                  : pokerCardimg
              }
              style={{ height: "50px", width: "50px" }}
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
            <div>
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
