import React from "react";
import styles from "./cardContainer.module.css";
import OfferCard from "./card";
const OfferCardContainer = () => {
  return (
    <div className={styles.offer_cards_container}>
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
    </div>
  );
};

export default OfferCardContainer;
