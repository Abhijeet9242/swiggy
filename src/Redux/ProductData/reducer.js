import { STORE_PRODUCTS_DATA } from "./actionType";

const initstate = {
  products: [],
};
export const productsReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case STORE_PRODUCTS_DATA:
      return { ...state, products: payload };
    default:
      return state;
  }
};
