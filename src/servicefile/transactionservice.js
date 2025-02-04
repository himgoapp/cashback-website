import { baseUrlconfig } from "../config";
import { API } from "../utils/api";

export const alltransactions = async (id , type , page) => {
	try {
		let params ={ type , page}
		let data = await API.get(`/transactions/getuserstransactions/${id}?type=${type}&&page=${page}`).then(
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
