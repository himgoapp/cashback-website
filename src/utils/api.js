import axios from "axios";
import { baseUrlconfig } from "../config";

export function getToken() {
	const Token = localStorage.getItem("token");
	return Token;
}

export const API = axios.create({
	baseURL: baseUrlconfig.baseUrl,
	headers: {
		"Content-Type": "application/json",
	},
});

API.interceptors.request.use(
	(config) => {
		const token = getToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		// Dynamically set Content-Type based on request type
		if (config.url.includes("/auth/imageupload")) {
			config.headers["Content-Type"] = "multipart/form-data";
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
