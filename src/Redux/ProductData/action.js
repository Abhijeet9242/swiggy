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

export const sortData = () => (dispatch) => {
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

// export { storeProductData, getData };
