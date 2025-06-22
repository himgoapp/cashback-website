import { API } from "../utils/api";

export const CreateSubscriber = async (data) => {
  try {
    
    const response = await API.post("/subscribe/addemail", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    return response.data;
  } catch (error) {
    
    return {
      success: false,
      error: error.response?.data?.message || error.message || "Failed to create manager"
    };
  }
};