import { baseUrlconfig } from "../config";
import { API } from "../utils/api";

// INFO: Not used yet
export const getKYCDetails = async () => {
	let data = await API.get(`${baseUrlconfig.baseUrl}/products/products`).then(
		(res) => res.data
	);

	return data.products;
};

export const getProductsSimple = async () => {
	let data = await API.get(
		`${baseUrlconfig.baseUrl}/products/productsimple`
	).then((res) => res.data);

	return data.products;
};

export const addPanCard = async (user_id, panCardNo) => {
	let body = {
		user_id,
		panCardNo,
	};

	try {
		let data = await API.post(`${baseUrlconfig.baseUrl}/users/panadd`, {
			...body,
		}).then((res) => res.data);
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
	user_id,
	file,
	firstName,
	lastName,
	addressProofType,
	documentNumber,
	proofState
) => {
	const formData = new FormData();
	formData.append("image", file);
	formData.append("id", user_id);
	formData.append("firstName", firstName);
	formData.append("lastName", lastName);
	formData.append("addressProofType", addressProofType);
	formData.append("documentNumber", documentNumber);
	formData.append("proofState", proofState);

	let body = formData;

	try {
		let data = await API.post(
			`${baseUrlconfig.baseUrl}/auth/imageupload`,
			body
		).then((res) => res.data);
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

export const addBankDetails = async (
	user_id,
	account_number,
	bank_name,
	ifsc_code
) => {
	let body = {
		user_id,
		account_number,
		bank_name,
		ifsc_code,
	};

	try {
		let data = await API.post(`${baseUrlconfig.baseUrl}/banks/create`, {
			...body,
		}).then((res) => res.data);
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

export const submitAccountId = async (
	user_id,
	productId,
	referenceId,
	referralCode
) => {
	let body = {
		user_id,
		productId,
		referenceId,
		referralCode,
	};

	try {
		let data = await API.post(`${baseUrlconfig.baseUrl}/useraccountid/create`, {
			...body,
		}).then((res) => res.data);
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

export const createTransaction = async (user_id, amount) => {
	let body = {
		user_id,
		amount,
	};

	try {
		let data = await API.post(`${baseUrlconfig.baseUrl}/transactions/create`, {
			...body,
		}).then((res) => res.data);
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
