import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../sidebar/sidebar";
import HomeMain from "./homemain";
import { userInfoFxn } from "../../../servicefile/dashboardservice";
import { UserContext } from "../../../App";

const DashboardHome = () => {
	const { userData } = useContext(UserContext);
	// const [data, setData] = useState({});

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				width: "100%",
				position: "relative",
			}}
		>
			<Sidebar active={0} />
			<HomeMain data={userData} />
		</div>
	);
};

export default DashboardHome;
