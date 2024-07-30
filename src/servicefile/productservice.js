import { baseUrlconfig } from "../config";
import axios from "axios";

export const getProducts = async () => {
  let data = await axios
    .get(`${baseUrlconfig.baseUrl}/products/products`)
    .then((res) => res.data);

  return data.products;
};

export const getProductsSimple = async () => {
  let data = await axios
    .get(`${baseUrlconfig.baseUrl}/products/productsimple`)
    .then((res) => res.data);

  return data.products;
};

export const submitAccountId = async (productId, referenceId, referralCode) => {
  let user = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : "";

  let body = {
    user_id: user._id,
    productId,
    referenceId,
    referralCode,
  };

  let headers = {
    "Content-Type": "application/json",
  };

  try {
    let data = await axios
      .post(
        `${baseUrlconfig.baseUrl}/useraccountid/create`,
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
