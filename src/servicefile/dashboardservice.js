import { baseUrlconfig } from "../config";
import { API } from "../utils/api";

export const userInfoFxn = async (id) => {
	let body = {
		id,
	};

	try {
		let data = await API.post(`${baseUrlconfig.baseUrl}/users/userinfo`, {
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
