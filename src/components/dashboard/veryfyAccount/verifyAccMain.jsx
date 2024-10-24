import React, { useState, useEffect, useContext } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import VerifyInfoContainer from "./verifyInfoContainer";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardMain from "../../../layout/dashboardMain";
import { userInfoFxn } from "../../../servicefile/dashboardservice";
import WelcomePopup from "../popup/welcome";
import { UserContext } from "../../../App";

const VerifyAccMain = () => {
	const { showWelcomePopup, userData, setUserData, walletData } =
		useContext(UserContext);

	return (
		<div style={{ width: "100%" }}>
			<DashboardMainTopBottom>
				<DashboardHomeHeader title='Verify Account' data={walletData} />
				<DashboardMain>
					{" "}
					{showWelcomePopup && <WelcomePopup />}
					<VerifyInfoContainer />
				</DashboardMain>
			</DashboardMainTopBottom>{" "}
		</div>
	);
};

export default VerifyAccMain;
