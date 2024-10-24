import React, { useState, useEffect, useContext } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import KycProgress from "./kycProgress";
import PanCard from "./panCard";
import AddressDetail from "./address";
import BankAccDetails from "./bankDetails";
import KycStatus from "./kycStatus";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardMain from "../../../layout/dashboardMain";
import KycStatusPage from "./kycStatusPage";
import { userInfoFxn } from "../../../servicefile/dashboardservice";
import { Steps } from "primereact/steps";
import { UserContext } from "../../../App";

const KycMain = () => {
	const [setReload, setStepReload] = useState(false);
	const {
		userData,
		walletData,
		userKyc,
		setUserKyc,
		setTransactionInfo,
		setUserData,
	} = useContext(UserContext);

	const getAllUserInfo = async () => {
		if (!userData || !userData._id) return;
		const res = await userInfoFxn(userData._id);
		if (res.success) {
			setUserData(res.userInfo.user);
			setUserKyc(res.userInfo.userKyc);
			setTransactionInfo(res.userInfo.userTransactions);
		}
		setStepReload(false);
	};

	useEffect(() => {
		if (setReload) {
			getAllUserInfo();
		}
	}, [setReload]);

	if (!userData || !walletData || !userKyc) return null;

	return (
		<DashboardMainTopBottom styles={{ width: "100%" }}>
			<DashboardHomeHeader title='KYC' data={walletData} />
			<DashboardMain>
				{userKyc.level !== "4" && (
					<KycProgress
						activeIndex={userKyc.level ? parseInt(userKyc.level) : 1}
					/>
				)}
				{userKyc.level === "4" && userKyc.statusValue === "Pending" && (
					<KycStatus
						status='Pending'
						message='Your KYC verification is currently in progress; thank you for your patience.'
						color='#B54708'
						colorBg='#FFFAEB'
						borderColor='#F79009'
					/>
				)}
				{userKyc.level === "4" && userKyc.statusValue === "Approved" && (
					<KycStatus
						status='Successful'
						message='Your KYC verification has been successfully completed; you now have full access to all features.'
						color='#027A48'
						colorBg='#ECFDF3'
						borderColor='#11C15B'
						retry={true}
					/>
				)}
				{userKyc.level === "4" && userKyc.statusValue === "Failed" && (
					<KycStatus
						status='Failed'
						message='Your KYC verification was unsuccessful; please retry or contact customer support for further assistance'
						color='#B42318'
						colorBg='#FEF3F2'
						borderColor='#FF5252'
					/>
				)}
				{userKyc && userKyc.level === "1" ? (
					<PanCard setStepReload={setStepReload} userKyc={userKyc} />
				) : userKyc && userKyc.level === "2" ? (
					<AddressDetail setStepReload={setStepReload} userKyc={userKyc} />
				) : userKyc && userKyc.level === "3" ? (
					<BankAccDetails setStepReload={setStepReload} userKyc={userKyc} />
				) : null}

				{userKyc.level === "4" && userKyc.statusValue === "Approved" && (
					<KycStatusPage
						isSuccess={true}
						label='Your KYC verification was Successful'
						btnText='Go to Home'
						setData={() => {}}
					/>
				)}

				{userKyc.level === "4" && userKyc.statusValue === "Failed" && (
					<KycStatusPage
						isSuccess={false}
						label='Your KYC verification was unsuccessful'
						btnText='Retry KYC Form'
						setData={() => {
							setUserKyc({ ...userKyc, level: "1" });
						}}
					/>
				)}
			</DashboardMain>
		</DashboardMainTopBottom>
	);
};

export default KycMain;
