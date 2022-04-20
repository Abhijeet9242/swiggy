import { ADD_TO_CART } from "./actionType";

const initstate = {
  cartdata: [],
};
const cartReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: payload };
    default:
      return state;
  }
};

export { cartReducer };
