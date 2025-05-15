import React from "react";
import styles from "./pokerCard.module.css";
import pokerCardimg from "../../../../assets/pokercard.png";
import moment from "moment";
import { statusBaseColor, imagePicker,getStatusIcon,productBorderColor  } from "../../../../helperFxns/colorCode";

const PokerCard = ({ status, color, item }) => {

  // const productColorMap = {
  //   "poker baazi": "#061058",
  //   "junglee poker": "#ed1c24",
  //   "mpl": "#c40000",
  //   "a23poker": "#021a38",
  //   "pokercircle": "#b04540",
  //   "pokerdangal": "#cd3232",
  //   "natural8": "#2f114b",
  //   "pocket52": "#04b688",
  //   "adda52": "#e41919",
  // "acrpoker": "black",
  // "wptglobal":"black",
  // "coinpoker":"#C0180C",

  // };
  // const productName = item?.productId?.name?.toLowerCase();
  // const borderColor = productColorMap[productName] || "#0052cc";
  return (
    <div className={styles.PokerCard}
    // style={{ borderTop: `4px solid ${borderColor}` }}
    >
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
          <div className={styles.StatusContainer}>
            <div className={styles.StatusBadge} style={statusBaseColor(status)}>
              <div className={styles.StatusIndicator}> {getStatusIcon(status)}</div>
              <span className={styles.StatusText}>
    {status === "Aborted" ? "Rejected" : status}
  </span>
            </div>
          </div>
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