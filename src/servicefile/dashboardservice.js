import { baseUrlconfig } from "../config";
import axios from "axios";

export const userInfoFxn = async (id) => {
  let body = {
    id,
  };

  let headers = {
    "Content-Type": "application/json",
  };

  try {
    let data = await axios
      .post(
        `${baseUrlconfig.baseUrl}/users/userinfo`,
        { ...body },
        { ...headers }
      )
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
