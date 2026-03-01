import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Loading from "../components/common/Loading/Loading";
import { getStoredOrMockData, userData, walletData, userKyc } from "../data/mockUserData";

const NotProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	// Check localStorage for isAuth flag or use hardcoded true for static app
	const isAuth = localStorage.getItem("isAuth") === "true" || true;
	const [loading, setLoading] = useState(false);
	const { setUserData, setWalletData, setUserKyc } = useContext(UserContext);

	const setMockContext = () => {
		// Use mock data from localStorage or default mock data
		const storedUserData = getStoredOrMockData('mockUserData', userData);
		const storedWalletData = getStoredOrMockData('mockWalletData', walletData);
		const storedUserKyc = getStoredOrMockData('mockUserKyc', userKyc);
		
		setUserData(storedUserData);
		setWalletData(storedWalletData);
		setUserKyc(storedUserKyc);
		setLoading(false);
	};

	let location = useLocation();

	useEffect(() => {
		// For static app, always set mock context
		if (isAuth) {
			setMockContext();
		} else {
			setUserData(null);
			setWalletData(null);
			setUserKyc(null);
		}
	}, [isAuth]);

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
	// Check localStorage for isAuth flag or use hardcoded true for static app
	const isAuth = localStorage.getItem("isAuth") === "true" || true;
	const [loading, setLoading] = useState(false);
	const { setUserData, setWalletData, setUserKyc } = useContext(UserContext);

	const setMockContext = () => {
		// Use mock data from localStorage or default mock data
		const storedUserData = getStoredOrMockData('mockUserData', userData);
		const storedWalletData = getStoredOrMockData('mockWalletData', walletData);
		const storedUserKyc = getStoredOrMockData('mockUserKyc', userKyc);
		
		setUserData(storedUserData);
		setWalletData(storedWalletData);
		setUserKyc(storedUserKyc);
		setLoading(false);
	};

	let location = useLocation();

	useEffect(() => {
		// For static app, always set mock context and allow access
		if (isAuth) {
			setMockContext();
		} else {
			// Not authenticated - redirect to home
			navigate("/", { replace: true });
		}
	}, [isAuth, navigate]);

	if (loading)
		return (
			<div className='loader_container loader_full_screen'>
				<Loading />
			</div>
		);

	return children;
};

export { ProtectedRoute, NotProtectedRoute };
