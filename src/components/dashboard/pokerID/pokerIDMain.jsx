import React, { useState, useEffect, useContext } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardMain from "../../../layout/dashboardMain";
import NewPoker from "./newPoker";
import PokerCardsContainer from "./pokerCard/PokerCardsContainer";
import { userInfoFxn } from "../../../servicefile/dashboardservice";
import { UserContext } from "../../../App";
import { PokerIcon } from "../../../utils/dashboardMainHeadersIcon";
const PokerIDMain = () => {
	const [getInfos, setGetInfos] = useState(false);
	const { walletData } = useContext(UserContext);

	return (
		<DashboardMainTopBottom>
			<DashboardHomeHeader data={walletData} title='Poker ID' icon={PokerIcon} />
			<DashboardMain>
				<NewPoker setGetInfos={setGetInfos} />
				<PokerCardsContainer getInfos={getInfos} setGetInfos={setGetInfos}  />
			</DashboardMain>
		</DashboardMainTopBottom>
	);
};

export default PokerIDMain;
