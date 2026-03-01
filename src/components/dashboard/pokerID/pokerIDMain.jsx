import React, { useContext } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardMain from "../../../layout/dashboardMain";
import PokerCardsContainer from "./pokerCard/PokerCardsContainer";
import { UserContext } from "../../../App";
import { PokerIcon } from "../../../utils/dashboardMainHeadersIcon";
import styles from "./pokerID.module.css";


const PokerIDMain = () => {
	const { walletData } = useContext(UserContext);

	return (
		<DashboardMainTopBottom>
			<DashboardHomeHeader data={walletData} title='My Earnings' icon={PokerIcon} />
			<DashboardMain>
				<div className={styles.MainPokerIdContainer}>
					<PokerCardsContainer />
				</div>
			</DashboardMain>
		</DashboardMainTopBottom>
	);
};

export default PokerIDMain;
