import React from "react";
import style from "./mainContainer.module.css";

const MainContainer = (props) => {
	return (
		<div className="" style={{ ...props.styles }}>
			{props.children}
		</div>
	);
};

export default MainContainer;
