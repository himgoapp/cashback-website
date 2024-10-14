import React from "react";
import Sidebar from "../sidebar/sidebar";
import VerifyAccMain from "./verifyAccMain";
const VerifyAccount = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				width: "100%",
				position: "relative",
			}}
		>
			<Sidebar active={2} />
			<VerifyAccMain />
		</div>
	);
};

export default VerifyAccount;
