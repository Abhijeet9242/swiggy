import { STORE_PRODUCTS_DATA } from "./actionType";
import { SINGLE_PRODUCT_DATA } from "./actionType";

export const storeProductData = (payload) => ({
  type: STORE_PRODUCTS_DATA,
  payload: payload,
});

export const singleProductdata = (payload) => ({
  type: SINGLE_PRODUCT_DATA,
  payload: payload,
});

export const getData = () => (dispatch) => {
  fetch(" https://swiggydbjson.herokuapp.com/restaurants")
    .then((data) => data.json())
    // .then((res) => console.log(res));
    .then((res) => dispatch(storeProductData(res)));
};

export const sortDataLH = () => (dispatch) => {
  fetch(" https://swiggydbjson.herokuapp.com/restaurants")
    .then((data) => data.json())
    // .then((res) => console.log(res));
    .then((res) =>
      dispatch(
        storeProductData(
          res.sort((a, b) => {
            return a.price_for_two - b.price_for_two;
          })
        )
      )
    );
};

export const sortDataHL = () => (dispatch) => {
  fetch(" https://swiggydbjson.herokuapp.com/restaurants")
    .then((data) => data.json())
    // .then((res) => console.log(res));
    .then((res) =>
      dispatch(
        storeProductData(
          res.sort((a, b) => {
            return b.price_for_two - a.price_for_two;
          })
        )
      )
    );
};

export const sortDataRating = () => (dispatch) => {
  fetch(" https://swiggydbjson.herokuapp.com/restaurants")
    .then((data) => data.json())
    // .then((res) => console.log(res));
    .then((res) =>
      dispatch(
        storeProductData(
          res.sort((a, b) => {
            return a.rating - b.rating;
          })
        )
      )
    );
};

export const sortDelivery = () => (dispatch) => {
  fetch(" https://swiggydbjson.herokuapp.com/restaurants")
    .then((data) => data.json())
    // .then((res) => console.log(res));
    .then((res) =>
      dispatch(
        storeProductData(
          res.sort((a, b) => {
            return a.delivery_time - b.delivery_time;
          })
        )
      )
    );
};
// export { storeProductData, getData };
