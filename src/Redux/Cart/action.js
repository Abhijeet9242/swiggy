import { ADD_TO_CART } from "./actionType";

export const addToCart = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});

export const getCartData = () => (dispatch) => {
  fetch(" https://swiggydbjson.herokuapp.com/cart")
    .then((data) => data.json())
    // .then((res) => console.log(res));
    .then((res) => dispatch(addToCart(res)));
};
