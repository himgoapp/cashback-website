import { baseUrlconfig } from "../config";
import axios from "axios";

export const userAccountIdsInfo = async (id) => {
  let headers = {
    "Content-Type": "application/json",
  };
  let data = await axios
    .get(`${baseUrlconfig.baseUrl}/useraccountid/getaccountids/${id}`, {
      ...headers,
    })
    .then((res) => res.data);

  return data.userAccountIdInfo;
};
