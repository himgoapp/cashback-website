import { baseUrlconfig } from "../config";
import { API } from "../utils/api";

export const getProducts = async () => {
	try {
		let data = await API.get(`/products/products`).then((res) => res.data);
		return data.products;
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

export const getProductsSimple = async () => {
	try {
		let data = await API.get(`/products/productsimple`).then((res) => res.data);

		return data.products;
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
		let data = await API.post(`/useraccountid/create`, {
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
