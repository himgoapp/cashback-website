import { API } from "../utils/api";

export const getVendors = async () => {
  try {
    const response = await API.get("/vendors/vendorsimple");
    return response.data;
  } catch (error) {
    const { response } = error;
    return {
      message: response?.data?.message || "Something Went Wrong!",
    };
  }
};