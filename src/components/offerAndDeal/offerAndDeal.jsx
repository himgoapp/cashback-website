import React from "react";
import styles from "./offerAndDeal.module.css";
import OfferHeader from "./header/header";
import OfferCardContainer from "./cards/cardContainer";
import OfferSignup from "./signup/signup";
const OfferAndDeal = () => {
  return (
    <div className={styles.offer_and_deals_wrapper}>
      <OfferHeader />
      <OfferCardContainer />
      <div style={{ position: "absolute", left: 0, bottom: 0 }}>
        <OfferSignup />
      </div>
    </div>
  );
};

export default OfferAndDeal;
