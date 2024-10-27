import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getUserInfo } from "../servicefile/authservice";
import { UserContext } from "../App";
import Loading from "../components/common/Loading/Loading";

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token")
		? localStorage.getItem("token")
		: false;
	const [loading, setLoading] = useState(false);
	const { setUserData, setWalletData, setUserKyc } = useContext(UserContext);

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
			setWalletData(res.userInfo.userWallet);
			setUserKyc(res.userInfo.userKyc);
			setLoading(false);
		} else {
			localStorage.clear();
			navigate("/", { replace: true });
		}
		setLoading(false);
	};

	let location = useLocation();

	useEffect(() => {
		if (!token) {
			localStorage.clear();
			navigate("/", { replace: true });
		} else {
			validateUserInfo();
		}
	}, [navigate, location.pathname]);

	if (loading)
		return (
			<div className='loader_container loader_full_screen'>
				<Loading />
			</div>
		);

	return children;
};

export default ProtectedRoute;
