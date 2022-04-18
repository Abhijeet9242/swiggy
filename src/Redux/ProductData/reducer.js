import { GET_PRODUCTS_DATA } from "./actionType";

const initstate = {
  products: [],
};
export const productsReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_DATA:
      return { ...state, products: payload };
    default:
      return state;
  }
};
