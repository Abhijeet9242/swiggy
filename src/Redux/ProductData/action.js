import { GET_PRODUCTS_DATA } from "./actionType";

export const getProductData = (data) => ({
  type: GET_PRODUCTS_DATA,
  payload: data,
});
