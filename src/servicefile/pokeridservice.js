import { baseUrlconfig } from "../config";
import { API } from "../utils/api";

export const userAccountIdsInfo = async (id) => {
	let data = await API.get(
		`${baseUrlconfig.baseUrl}/useraccountid/getaccountids/${id}`
	).then((res) => res.data);

	return data.userAccountIdInfo;
};
