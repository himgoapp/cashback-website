import React from "react";
import styles from "./dashboardDealCards.module.css";
import OfferCard from "../../offerAndDeal/cards/card";
import { generateArray } from "../../../utils/generateArray";
const DashboardDealCards = () => {
  return (
    <div className={styles.DashboardDealCardsContainer}>
      <div className={styles.deal_head}>Offers and Deals</div>
      <div className={styles.cardsContent}>
        {generateArray(3).map((c, index) => {
          return <OfferCard fillBtn={(index + 1) % 2 === 0 ? false : true} />;
        })}
      </div>
    </div>
  );
};

export default DashboardDealCards;
