import { baseUrlconfig } from "../config";
import { API } from "../utils/api";

export const userInfoFxn = async (id) => {
	let body = {
		id,
	};

	try {
		let data = await API.post(`/users/userinfo`, {
			...body,
		}).then((res) => res.data);
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

export const getDashboardInfo = async (id) => {
	let body = {
		id,
	};

	try {
		let data = await API.get(`/users/getdashboardinfo/${id}`, {
			...body,
		}).then((res) => res.data);
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
