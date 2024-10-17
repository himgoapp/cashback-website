import React from "react";
import styles from "./offerAndDeal.module.css";
import OfferHeader from "./header/header";
import OfferCardContainer from "./cards/cardContainer";
import OfferSignup from "./signup/signup";

const OfferAndDeal = () => {
	const token = localStorage.getItem("token") ? true : false;
	return (
		<div className={`${styles.offer_and_deals_wrapper_main}`}>
			<div className={`${styles.offer_and_deals_wrapper} container_max`}>
				<OfferHeader />
				<OfferCardContainer />
			</div>
			{!token && <OfferSignup />}
		</div>
	);
};

export default OfferAndDeal;
