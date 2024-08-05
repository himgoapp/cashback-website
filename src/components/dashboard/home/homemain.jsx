import React, { useState, useEffect } from "react";
import DashboardHomeHeader from "./dashHomeHeader";
import HomeQuickStart from "./quickStart";
import Withdraw from "./withdraw";
import DashboardMain from "../../../layout/dashboardMain";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardDealCards from "./dashboardDealCards";
import { getProducts } from "../../../servicefile/productservice";

const HomeMain = ({ data }) => {
	const [infoPop, setInfoPop] = useState(false);
	const [products, setProducts] = useState([]);

	const getdata = async () => {
		let data = await getProducts();
		if (data && data.length > 0) {
			let result = [...data];
			setProducts(result);
		}
	};
	useEffect(() => {
		let info = sessionStorage.getItem("allInfo")
			? JSON.parse(sessionStorage.getItem("allInfo"))
			: {};
		if (info && info.user && !info.user.userName) {
			setInfoPop(true);
		}
		getdata();
	}, [infoPop]);
	return (
		<DashboardMainTopBottom>
			<DashboardHomeHeader title='Dashboard' data={data.userWallet} />
			<DashboardMain>
				<HomeQuickStart data={data} />
				<Withdraw data={data.userWallet} userKyc={data.userKyc} />
			</DashboardMain>
			<DashboardDealCards products={products} />
		</DashboardMainTopBottom>
	);
};

export default HomeMain;
