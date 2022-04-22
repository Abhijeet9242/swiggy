import { STORE_PRODUCTS_DATA } from "./actionType";

export const storeProductData = (payload) => ({
  type: STORE_PRODUCTS_DATA,
  payload: payload,
});

export const getData = () => (dispatch) => {
  fetch(" http://localhost:3001/restaurants")
    .then((data) => data.json())
    // .then((res) => console.log(res));
    .then((res) => dispatch(storeProductData(res)));
};

export const sortDataLH = () => (dispatch) => {
  fetch(" http://localhost:3001/restaurants")
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
  fetch(" http://localhost:3001/restaurants")
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
  fetch(" http://localhost:3001/restaurants")
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
  fetch(" http://localhost:3001/restaurants")
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
