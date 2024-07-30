import { baseUrlconfig } from "../config";
import axios from "axios";

export const alltransactions = async (id) => {
  let headers = {
    "Content-Type": "application/json",
  };

  try {
    let data = await axios
      .get(`${baseUrlconfig.baseUrl}/transactions/getuserstransactions/${id}`, {
        ...headers,
      })
      .then((res) => res.data);
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
