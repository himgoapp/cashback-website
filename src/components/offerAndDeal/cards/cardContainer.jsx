import React from "react";
import styles from "./cardContainer.module.css";
import OfferCard from "./card";
import { Link } from "react-router-dom";
import { generateArray } from "../../../utils/generateArray";
const OfferCardContainer = () => {
  return (
    <div className={styles.offer_cards_container}>
      {generateArray(6).map((c, index) => {
        return (
          <Link to="/description" style={{ textDecoration: "none" }}>
            <OfferCard fillBtn={(index + 1) % 2 === 0 ? false : true} />
          </Link>
        );
      })}
    </div>
  );
};

export default OfferCardContainer;
