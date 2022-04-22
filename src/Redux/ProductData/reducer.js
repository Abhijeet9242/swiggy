import { SINGLE_PRODUCT_DATA, STORE_PRODUCTS_DATA } from "./actionType";

const init = {
  productdata: [],
  singledata: [],
};
const productsReducer = (state = init, { type, payload }) => {
  switch (type) {
    case STORE_PRODUCTS_DATA:
      return { ...state, productdata: payload };
    case SINGLE_PRODUCT_DATA:
      return { ...state, singledata: payload };
    default:
      return state;
  }
};
export { productsReducer };
