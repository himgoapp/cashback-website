import React, { useState, useEffect, useContext } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardMain from "../../../layout/dashboardMain";
import NewPoker from "./newPoker";
import PokerCardsContainer from "./pokerCard/PokerCardsContainer";
import { userInfoFxn } from "../../../servicefile/dashboardservice";
import { UserContext } from "../../../App";
// import { ToastContainer, toast } from "react-toastify";

const PokerIDMain = () => {
	const [data, setData] = useState({});
	const [getInfos, setGetInfos] = useState(false);
	const { userData } = useContext(UserContext);

	const getAllUserInfo = async () => {
		if (!userData || !userData._id) return;

		const res = await userInfoFxn(userData._id);
		setData(res.userInfo);
		localStorage.setItem("transactionInfo", "false");
		sessionStorage.setItem("allInfo", JSON.stringify(res.userInfo));
	};

	useEffect(() => {
		let sessionInfo = sessionStorage.getItem("allInfo")
			? JSON.parse(sessionStorage.getItem("allInfo"))
			: {};

		let transactionInfo = localStorage.getItem("transactionInfo");
		if (
			sessionInfo.user &&
			sessionInfo.userWallet &&
			sessionInfo.userKyc &&
			transactionInfo === "false"
		) {
			setData(sessionInfo);
		} else {
			getAllUserInfo();
		}
		// eslint-disable-next-line
	}, []);

	return (
		<DashboardMainTopBottom>
			<DashboardHomeHeader data={data.userWallet} title='Poker ID' />
			<DashboardMain>
				<NewPoker setGetInfos={setGetInfos} />
				<PokerCardsContainer getInfos={getInfos} setGetInfos={setGetInfos} />
			</DashboardMain>
		</DashboardMainTopBottom>
	);
};

export default PokerIDMain;
