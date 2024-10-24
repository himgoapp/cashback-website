import { baseUrlconfig } from "../config";
import { API } from "../utils/api";

export const loginOtp = async (phoneNumber, isEmail = false) => {
	let body = {
		phoneNumber: isEmail ? phoneNumber : `91${phoneNumber}`,
	};

	try {
		let data = await API.post(`${baseUrlconfig.baseUrl}/auth/loginVerify`, {
			...body,
		}).then((res) => res.data);

		return data;
	} catch (error) {
		const { response } = error;
		if (response) {
			return {
				message: response.data.message || "Something Went Wrong!",
			};
		}
		return { message: "Something Went Wrong!" };
	}
};

export const loginVerify = async (phoneNumber, loginOtp) => {
	let body = {
		phoneNumber: `91${phoneNumber}`,
		Otp: loginOtp,
	};

	try {
		let data = await API.post(`${baseUrlconfig.baseUrl}/auth/verifyLoginOtp`, {
			...body,
		}).then((res) => res.data);

		return data;
	} catch (error) {
		return { message: "Something Went Wrong!" };
	}
};

// INFO: Not used yet
export const verifySendOtpPhone = async (phoneNumber) => {
	let body = {
		phoneNumber: `91${phoneNumber}`,
	};

	try {
		let data = await API.post(`${baseUrlconfig.baseUrl}/auth/sendOtp`, {
			...body,
		}).then((res) => res.data);

		return data;
	} catch (error) {
		return { message: "Something Went Wrong!" };
	}
};

// INFO: Not used yet
export const phoneVerify = async (phoneNumber, loginOtp) => {
	let body = {
		phoneNumber: `91${phoneNumber}`,
		Otp: loginOtp,
	};

	try {
		let data = await API.post(`${baseUrlconfig.baseUrl}/auth/verifyOtp`, {
			...body,
		}).then((res) => res.data);

		return data;
	} catch (error) {
		return { message: "Something Went Wrong!" };
	}
};

export const signUpFxn = async (phoneNumber, email, userName) => {
	let body = {
		phoneNumber: phoneNumber,
		email,
		userName,
		role: "user",
	};

	try {
		let data = await API.post(`${baseUrlconfig.baseUrl}/auth/signup`, {
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

// INFO: Not used yet
export const sendEmailOtpAPI = async (email) => {
	let body = {
		email: email,
	};

	try {
		let data = await API.post(`${baseUrlconfig.baseUrl}/auth/sendemailotp`, {
			...body,
		}).then((res) => res.data);

		return data;
	} catch (error) {
		const { response } = error;
		if (response) {
			return {
				message: response.data.message || "Something Went Wrong!",
			};
		}
		return { message: "Something Went Wrong!" };
	}
};

export const getUserInfo = async () => {
	try {
		let data = await API.get(`${baseUrlconfig.baseUrl}/users/getuserinfo`).then(
			(res) => res.data
		);

		return {
			success: true,
			...data,
		};
	} catch (error) {
		const { response } = error;
		if (response) {
			return {
				message: response.data.message || "Something Went Wrong!",
			};
		}
		return { message: "Something Went Wrong!" };
	}
};
