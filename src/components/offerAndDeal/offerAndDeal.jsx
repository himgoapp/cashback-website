import React, { useContext, useState } from "react";
import styles from "./offerAndDeal.module.css";
import OfferHeader from "./header/header";
import OfferCardContainer from "./cards/cardContainer";
import OfferSignup from "./signup/signup";
import { UserContext } from "../../App";

const OfferAndDeal = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const { userData } = useContext(UserContext);

	return (
		<div className={`${styles.offer_and_deals_wrapper_main}`}>
			<div className={`${styles.offer_and_deals_wrapper} container_max`}>
				<OfferHeader
					setSearchTerm={(searchTerm) => setSearchTerm(searchTerm)}
					searchTerm={searchTerm}
				/>

				<OfferCardContainer searchTerm={searchTerm} />
			</div>
			{!userData && <OfferSignup />}
		</div>
	);
};

export default OfferAndDeal;
