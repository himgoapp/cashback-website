import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserInfo } from "../servicefile/authservice";
import { UserContext } from "../App";
import Loading from "../components/common/Loading/Loading";

const NotProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token")
		? localStorage.getItem("token")
		: false;
	const [loading, setLoading] = useState(false);
	const { setUserData, setWalletData, setUserKyc } = useContext(UserContext);

	const setDefaultContext = () => {
		setUserData(null);
		setWalletData(null);
		setUserKyc(null);
		setLoading(false);
	}

	const validateUserInfo = async () => {
		setLoading(true);
		const res = await getUserInfo();

		if (res.success) {
			setUserData(res.userInfo.user);
			setWalletData(res.userInfo.userWallet);
			setUserKyc(res.userInfo.userKyc);
			setLoading(false);
		} else {
			setDefaultContext();
		}
	};

	let location = useLocation();

	useEffect(() => {
		if (!token) {
			localStorage.clear();
			setDefaultContext();
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

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token")
		? localStorage.getItem("token")
		: false;
	const [loading, setLoading] = useState(false);
	const { setUserData, setWalletData, setUserKyc } = useContext(UserContext);

	const validateUserInfo = async () => {
		setLoading(true);
		const res = await getUserInfo();

		if (res.success) {
			let userData = res.userInfo.user;

			if (userData && userData.email && userData.userName) {
				setUserData(res.userInfo.user);
				setWalletData(res.userInfo.userWallet);
				setUserKyc(res.userInfo.userKyc);
				setLoading(false);
			} else {
				navigate("/welcome")
			}
		} else {
			localStorage.clear();
			navigate("/login", { replace: true });
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

export { ProtectedRoute, NotProtectedRoute };
