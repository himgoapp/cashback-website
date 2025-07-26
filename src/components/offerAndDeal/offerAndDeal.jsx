import React, { useContext, useState } from "react";
import styles from "./offerAndDeal.module.css";
import OfferHeader from "./header/header";
import OfferCardContainer from "./cards/cardContainer";
import OfferSignup from "./signup/signup";
import { UserContext } from "../../App";
import clientTable from './tableOffer'

const OfferAndDeal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { userData } = useContext(UserContext);

  return (
    <div className="col-lg-12">
    <div className={`${styles.offer_and_deals_wrapper_main}`}>
      <div className={`${styles.offer_and_deals_wrapper} container_max`}>
        
        <OfferHeader
          setSearchTerm={(searchTerm) => setSearchTerm(searchTerm)}
          searchTerm={searchTerm}
        />

        <OfferCardContainer searchTerm={searchTerm} />

        {/* <ClientTable></ClientTable> */}
      </div>
      {!userData && <OfferSignup />}
    </div>
    </div>
  );
};

export default OfferAndDeal;
