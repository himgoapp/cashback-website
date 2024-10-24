import { baseUrlconfig } from "../config";
import { API } from "../utils/api";

export const userAccountIdsInfo = async (id) => {
	try {
		let data = await API.get(`/useraccountid/getaccountids/${id}`).then(
			(res) => res.data
		);

		return data.userAccountIdInfo;
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
