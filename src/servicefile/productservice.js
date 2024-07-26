import { baseUrlconfig } from "../config";
import axios from "axios";

export const getProducts = async () => {
  let data = await axios
    .get(`${baseUrlconfig.baseUrl}/products/products`)
    .then((res) => res.data);

  return data.products;
};
