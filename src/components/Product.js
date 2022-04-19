import React from "react";
import { useEffect } from "react";
import { store } from "../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { storeProductData } from "../Redux/ProductData/action";

const Product = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productState.Product);

  useEffect(() => {
    fetch("http://localhost:3001/restaurants")
      .then((data) => data.json())
      .then((res) => {
        // console.log(res);
        dispatch(storeProductData(res));
      }, []);
  });

  console.log(data);

  return <div>products</div>;
};

export default Product;
