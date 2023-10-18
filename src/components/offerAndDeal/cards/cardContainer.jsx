import React from "react";
import styles from "./cardContainer.module.css";
import OfferCard from "./card";
import { Link } from "react-router-dom";
const OfferCardContainer = () => {
  return (
    <div className={styles.offer_cards_container}>
      <Link to="/description" style={{ textDecoration: "none" }}>
        <OfferCard />
      </Link>
      <Link to="/description" style={{ textDecoration: "none" }}>
        <OfferCard />
      </Link>
      <Link to="/description" style={{ textDecoration: "none" }}>
        <OfferCard />
      </Link>

      <OfferCard />
      <OfferCard />
      <OfferCard />
    </div>
  );
};

export default OfferCardContainer;
