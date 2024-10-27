const Loading = ({ size }) => {
	return (
		<div className={`loader ${size === "sm" ? "loader-small" : ""}`}></div>
	);
};

export default Loading;
