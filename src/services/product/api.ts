import API from "../api";
import type { ResponseProduct } from "./type";

export const getProducts = async () => {
  try {
    const response = await API.get("https://dummyjson.com/products");

    if (response.status === 200) {
      return response.data as ResponseProduct;
    }
  } catch (error) {
    console.error(error);
  }
};
