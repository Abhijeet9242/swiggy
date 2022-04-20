import { STORE_PRODUCTS_DATA } from "./actionType";

const init = {
  productdata: [],
};
const productsReducer = (state = init, { type, payload }) => {
  switch (type) {
    case STORE_PRODUCTS_DATA:
      return { ...state, productdata: payload };
    default:
      return state;
  }
};
export { productsReducer };
