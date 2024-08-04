import React from "react";
import styles from "./dashboardDealCards.module.css";
import OfferCard from "../../offerAndDeal/cards/card";
const DashboardDealCards = ({ products }) => {
  return (
    <div className={styles.DashboardDealCardsContainer}>
      <div className={styles.deal_head}>Offers and Deals</div>
      <div className={styles.cardsContent}>
        {products &&
          products.length > 0 &&
          products.map((item, index) => {
            return (
              <OfferCard
                fillBtn={(index + 1) % 2 === 0 ? false : true}
                product={item}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default DashboardDealCards;
