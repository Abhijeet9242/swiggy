import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getData } from "../Redux/ProductData/action";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [proddetails, setProddetails] = useState([]);

  let params = useParams();
  console.log(params.id);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getData());
  //   }, []);

  //   const datadetails = useSelector((state) => state.productState.productdata);

  //   //   console.log(datadetails);

  useEffect(() => {
    const itemData = async () => {
      let result = await fetch(
        `http://localhost:3001/item?restaurant_id=${params.id}`
      );
      let res = await result.json();
      console.log(res);
      setProddetails(res);
      // setProddetails(res);
    };
    itemData();
  }, []);

  // const getmoreData = (id) => {
  //   console.log(id);
  // };

  console.log(proddetails);

  return (
    <div>
      {proddetails.map((item, i) => (
        <div key={i}>
          <h1>{item.name}</h1>
          <h1>{item.category}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
