import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./Redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./Context/SingleProduct";
import { LocationContextProvider } from "./Context/LocationContext";
import { CartContextProvider } from "./Context/CartContext";
import { ProductDetailsContextProvider } from "./Context/ProductDetails";
// import { TotalPriceContextProvider } from "./Context/TotalPrice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductDetailsContextProvider>
        <CartContextProvider>
          <LocationContextProvider>
            <ProductContextProvider>
              <Provider store={store}>
                <App />
              </Provider>
            </ProductContextProvider>
          </LocationContextProvider>
        </CartContextProvider>
      </ProductDetailsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
