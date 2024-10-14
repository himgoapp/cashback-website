import React from "react";
import style from "./descriptionContentWrapper.module.css";
const DescriptionContentWrapper = (props) => {
	return (
		<div
			className={`${style.description_content_wrapper} container_max`}
			style={{ ...props.styles }}
		>
			{props.children}
		</div>
	);
};

export default DescriptionContentWrapper;
