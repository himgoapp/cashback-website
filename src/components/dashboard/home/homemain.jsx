import React, { useState, useEffect, useContext } from "react";
import DashboardHomeHeader from "./dashHomeHeader";
import HomeQuickStart from "./quickStart";
import Withdraw from "./withdraw";
import DashboardMain from "../../../layout/dashboardMain";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardDealCards from "./dashboardDealCards";
import { getProducts } from "../../../servicefile/productservice";
import { UserContext } from "../../../App";

const HomeMain = ({ data }) => {
	const { userData, walletData, userKyc } = useContext(UserContext);
	const [products, setProducts] = useState([]);

	const getdata = async () => {
		let data = await getProducts();
		if (data && data.length > 0) {
			let result = [...data];
			setProducts(result);
		}
	};
	useEffect(() => {
		if (!userData || !userData._id) return;
		getdata();
	}, []);

	return (
		<DashboardMainTopBottom>
			<DashboardHomeHeader title='Dashboard' data={walletData} />
			<DashboardMain>
				<HomeQuickStart data={data} />
				<Withdraw data={walletData} userKyc={userKyc} />
				<DashboardDealCards products={products} />
			</DashboardMain>
		</DashboardMainTopBottom>
	);
};

export default HomeMain;
