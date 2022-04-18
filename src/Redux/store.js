import { createStore, combineReducers } from "redux";
import { cartReducer } from "./Cart/reducer";
import { loginReducer } from "./ForLogin/reducer";
import { signupReducer } from "./ForSignup/reducer";
import { productsReducer } from "./ProductData/reducer";

const mainReducer = combineReducers({
  cartState: cartReducer,
  loginState: loginReducer,
  signupState: signupReducer,
  productState: productsReducer,
});
export const store = createStore(mainReducer);
