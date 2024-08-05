import React from "react";
import styles from "./textInput.module.css";
const TextInput = ({
	placeholder,
	children,
	width = "100%",
	setValue,
	disabled,
	value,
}) => {
	return (
		<div
			className={styles.text_input_wrapper}
			style={{ position: "relative", width: width }}
		>
			<input
				type='text'
				placeholder={placeholder}
				className={styles.text_input_container}
				onChange={(e) => setValue(e.target.value)}
				style={{ width: "100%" }}
				disabled={disabled ? disabled : false}
				value={value}
			/>

			{children}
		</div>
	);
};

export default TextInput;
