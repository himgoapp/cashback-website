import { baseUrlconfig } from "../config";
import { API } from "../utils/api";

export const getProducts = async () => {
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
