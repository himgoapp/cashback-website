import { API } from "../utils/api";


export const ContactUs = async (data) => {
  try {
    const response = await API.post("/contacts/addcontact", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json", 
      },
    });

    return response.data;
  } catch (error) {
    const { response } = error;
    return {
      message: response?.data?.message || "Something Went Wrong!",
    };
  }
};