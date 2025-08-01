import React from "react";
import styles from "./pokerCard.module.css";
import pokerCardimg from "../../../../assets/pokercard.png";
import moment from "moment";
import {
  statusBaseColor,
  imagePicker,
  getStatusIcon,
  productBorderColor,
} from "../../../../helperFxns/colorCode";

const PokerCard = ({ status, color, item }) => {
  return (
    <div
      className={styles.PokerCard}
    // style={{ borderTop: `4px solid ${borderColor}` }}
    >
        <div className={styles.StatusContainer}>
              <div
                className={styles.StatusBadge}
                style={statusBaseColor(status)}
              >
                <div className={styles.StatusIndicator}>
                  {" "}
                  {getStatusIcon(status)}
                </div>
                <span className={styles.StatusText}>
                  {status === "Aborted" ? "Rejected" : status}
                </span>
              </div>
            </div>
            
      <div className={styles.CardContent}>
        <div className={styles.HeaderAndId}>
          <div className={styles.HeaderAndIdContent}>
            <div className={styles.ImageWrapper}>
              <img
                src={
                  item && item.productId && item.productId.name
                    ? imagePicker(item.productId.name)
                    : pokerCardimg
                }
                className={styles.ProductImage}
                alt={item?.productId?.name || "Product"}
              />
            </div>
            
            <div className={styles.HeaderId}>
              <div className={styles.Head}>
                {item && item.productId ? item.productId.name : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.CardFooter}>
        <div className={styles.Divider}></div>
        <div className={styles.FooterContent}>
          <div className={styles.Id}>
            Account ID: <br />{" "}
            <strong>{item && item.referenceId ? item.referenceId : ""}</strong>
          </div>
          {item && item.retag && <p className="retagName">RETAG</p>}
          <div className={styles.DateContainer}>
            {item && item.createdAt && (
              <>
                <div className={styles.DateValue}>
                  {moment(item.createdAt).format("DD MMM YYYY")}
                </div>
                <div className={styles.TimeValue}>
                  {moment(item.createdAt).format("LT")}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokerCard;
