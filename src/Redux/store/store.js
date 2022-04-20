// import { productsReducer } from "../ProductData/reducer";
// const store = createStore(productsReducer);

// export { store };

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { cartReducer } from "../Cart/reducer";
import { loginReducer } from "../ForLogin/reducer";
import { signupReducer } from "../ForSignup/reducer";
import { productsReducer } from "../ProductData/reducer";

const mainReducer = combineReducers({
  productState: productsReducer,
  cartState: cartReducer,
  loginState: loginReducer,
  signupState: signupReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk));

export { store };
