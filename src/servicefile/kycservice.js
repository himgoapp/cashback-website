import { baseUrlconfig } from "../config";
import axios from "axios";

// INFO: Not used yet
export const getKYCDetails = async () => {
	let data = await axios
		.get(`${baseUrlconfig.baseUrl}/products/products`)
		.then((res) => res.data);

	return data.products;
};

export const getProductsSimple = async () => {
	let data = await axios
		.get(`${baseUrlconfig.baseUrl}/products/productsimple`)
		.then((res) => res.data);

	return data.products;
};

export const addPanCard = async (panCardNo) => {
	let user = localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))
		: "";

	let body = {
		user_id: user._id,
		panCardNo,
	};

	let headers = {
		"Content-Type": "application/json",
	};

	try {
		let data = await axios
			.post(
				`${baseUrlconfig.baseUrl}/users/panadd`,
				{ ...body },
				{ ...headers }
			)
			.then((res) => res.data);
		return data;
	} catch (error) {
		console.log(error.response);
		if (error.response) {
			return error.response.data.errors;
		} else {
			return { message: "Something Went Wrong!" };
		}
	}
};

export const addAddressProof = async (
	file,
	firstName,
	lastName,
	addressProofType,
	documentNumber,
	proofState
) => {
	let user = localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))
		: "";
	const formData = new FormData();
	formData.append("image", file);
	formData.append("id", user._id);
	formData.append("firstName", firstName);
	formData.append("lastName", lastName);
	formData.append("addressProofType", addressProofType);
	formData.append("documentNumber", documentNumber);
	formData.append("proofState", proofState);

	let body = formData;

	let headers = { "Content-Type": "multipart/form-data" };

	try {
		let data = await axios
			.post(`${baseUrlconfig.baseUrl}/auth/imageupload`, body, { ...headers })
			.then((res) => res.data);
		return data;
	} catch (error) {
		console.log(error.response);
		if (error.response) {
			return error.response.data.errors;
		} else {
			return { message: "Something Went Wrong!" };
		}
	}
};

export const addBankDetails = async (account_number, bank_name, ifsc_code) => {
	let user = localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))
		: "";

	let body = {
		user_id: user._id,
		account_number,
		bank_name,
		ifsc_code,
	};

	let headers = {
		"Content-Type": "application/json",
	};

	try {
		let data = await axios
			.post(
				`${baseUrlconfig.baseUrl}/banks/create`,
				{ ...body },
				{ ...headers }
			)
			.then((res) => res.data);
		return data;
	} catch (error) {
		console.log(error.response);
		if (error.response) {
			return error.response.data.errors;
		} else {
			return { message: "Something Went Wrong!" };
		}
	}
};

export const submitAccountId = async (productId, referenceId, referralCode) => {
	let user = localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))
		: "";

	let body = {
		user_id: user._id,
		productId,
		referenceId,
		referralCode,
	};

	let headers = {
		"Content-Type": "application/json",
	};

	try {
		let data = await axios
			.post(
				`${baseUrlconfig.baseUrl}/useraccountid/create`,
				{ ...body },
				{ ...headers }
			)
			.then((res) => res.data);
		return data;
	} catch (error) {
		console.log(error.response);
		if (error.response) {
			return error.response.data.errors;
		} else {
			return { message: "Something Went Wrong!" };
		}
	}
};

export const createTransaction = async (amount) => {
	let user = localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))
		: "";

	let body = {
		user_id: user._id,
		amount,
	};

	let headers = {
		"Content-Type": "application/json",
	};

	try {
		let data = await axios
			.post(
				`${baseUrlconfig.baseUrl}/transactions/create`,
				{ ...body },
				{ ...headers }
			)
			.then((res) => res.data);
		return data;
	} catch (error) {
		console.log(error.response);
		if (error.response) {
			return error.response.data.errors;
		} else {
			return { message: "Something Went Wrong!" };
		}
	}
};
