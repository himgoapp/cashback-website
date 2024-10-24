import { baseUrlconfig } from "../config";
import { API } from "../utils/api";

export const alltransactions = async (id) => {
	try {
		let data = await API.get(`/transactions/getuserstransactions/${id}`).then(
			(res) => res.data
		);
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
