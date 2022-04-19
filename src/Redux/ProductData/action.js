import { STORE_PRODUCTS_DATA } from "./actionType";

export const storeProductData = (data) => ({
  type: STORE_PRODUCTS_DATA,
  payload: data,
});
