const Loading = ({ size }) => {
	return (
		<div className={`loader ${size === "sm" ? "loader-small" : size === "md" ? "loader-medium" : ""}`}></div>
	);
};

export default Loading;
