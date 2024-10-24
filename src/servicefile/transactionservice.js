import { baseUrlconfig } from "../config";
import { API } from "../utils/api";

export const alltransactions = async (id) => {
	try {
		let data = await API.get(
			`${baseUrlconfig.baseUrl}/transactions/getuserstransactions/${id}`
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
