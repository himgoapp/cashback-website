import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getUserInfo } from "../servicefile/authservice";
import { UserContext } from "../App";

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token")
		? localStorage.getItem("token")
		: false;
	const [loading, setLoading] = useState(false);
	const { setUserData } = useContext(UserContext);

	const validateToken = (currenttOken) => {
		let validate = false;
		if (currenttOken) {
			const decodedToken = jwtDecode(currenttOken);
			const currentTime = Date.now() / 1000;
			validate = decodedToken.exp > currentTime ? true : false;
		}
		return validate;
	};

	const validateUserInfo = async () => {
		setLoading(true);
		const res = await getUserInfo();

		if (res.success) {
			setUserData(res.userInfo.user);
			setLoading(false);
		} else {
			localStorage.clear();
			sessionStorage.clear();
			navigate("/");
		}
		setLoading(false);
	};

	let location = useLocation();

	useEffect(() => {
		if (!token) {
			localStorage.clear();
			sessionStorage.clear();
			navigate("/");
		}
		validateUserInfo();
	}, [navigate, location.pathname]);

	if (loading) return <div>Loading...</div>;

	return children;
};

export default ProtectedRoute;
