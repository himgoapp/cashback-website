import React from "react";
import style from "./dashboardMain.module.css";

const DashboardMain = (props) => {
	return (
		<div className={style.dashboard_container} style={{ ...props.styles }}>
			{props.children}
		</div>
	);
};

export default DashboardMain;
