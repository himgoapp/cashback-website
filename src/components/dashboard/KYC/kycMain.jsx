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
	const [data, setData] = useState({});
	const [setReload, setStepReload] = useState(false);
	const { userData } = useContext(UserContext);

	const getAllUserInfo = async () => {
		if (!userData || !userData._id) return;
		const res = await userInfoFxn(userData._id);
		setData(res.userInfo);
		localStorage.setItem("transactionInfo", "false");
		sessionStorage.setItem("allInfo", JSON.stringify(res.userInfo));
		setStepReload(false);
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

	useEffect(() => {
		if (setReload && setReload === true) {
			getAllUserInfo();
		}
		// eslint-disable-next-line
	}, [setReload]);

	const items = [
		{
			icon: "pi pi-user",
			label: "Pan Card",
		},
		{
			icon: "pi pi-calendar",
			label: "Address Proof",
		},
		{
			icon: "pi pi-check",
			label: "Bank Details",
		},
	];

	return (
		<DashboardMainTopBottom styles={{ width: "100%" }}>
			<DashboardHomeHeader title='KYC' data={data.userWallet} />
			<DashboardMain>
				{data?.userKyc?.level !== "4" && (
					<KycProgress
						activeIndex={
							data?.userKyc?.level ? parseInt(data.userKyc.level) : 1
						}
					/>
				)}
				{data?.userKyc?.level === "4" &&
					data?.userKyc?.statusValue === "Pending" && (
						<KycStatus
							status='Pending'
							message='Your KYC verification is currently in progress; thank you for your patience.'
							color='#B54708'
							colorBg='#FFFAEB'
							borderColor='#F79009'
						/>
					)}
				{data?.userKyc?.level === "4" &&
					data?.userKyc?.statusValue === "Approved" && (
						<KycStatus
							status='Successful'
							message='Your KYC verification has been successfully completed; you now have full access to all features.'
							color='#027A48'
							colorBg='#ECFDF3'
							borderColor='#11C15B'
							retry={true}
						/>
					)}
				{data?.userKyc?.level === "4" &&
					data?.userKyc?.statusValue === "Failed" && (
						<KycStatus
							status='Failed'
							message='Your KYC verification was unsuccessful; please retry or contact customer support for further assistance'
							color='#B42318'
							colorBg='#FEF3F2'
							borderColor='#FF5252'
						/>
					)}
				{data && data.userKyc && data.userKyc.level === "1" ? (
					<PanCard setStepReload={setStepReload} userKyc={data.userKyc} />
				) : data && data.userKyc && data.userKyc.level === "2" ? (
					<AddressDetail setStepReload={setStepReload} userKyc={data.userKyc} />
				) : data && data.userKyc && data.userKyc.level === "3" ? (
					<BankAccDetails
						setStepReload={setStepReload}
						userKyc={data.userKyc}
					/>
				) : null}

				{data?.userKyc?.level === "4" &&
					data?.userKyc?.statusValue === "Approved" && (
						<KycStatusPage
							isSuccess={true}
							label='Your KYC verification was Successful'
							btnText='Go to Home'
							setData={() => {}}
						/>
					)}

				{data?.userKyc?.level === "4" &&
					data?.userKyc?.statusValue === "Failed" && (
						<KycStatusPage
							isSuccess={false}
							label='Your KYC verification was unsuccessful'
							btnText='Retry KYC Form'
							setData={() => {
								setData({ ...data, userKyc: { ...data.userKyc, level: "1" } });
							}}
						/>
					)}
			</DashboardMain>
		</DashboardMainTopBottom>
	);
};

export default KycMain;
