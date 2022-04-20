import styled from "./Product.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/ProductData/action";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const data = useSelector((state) => state.productState.productdata);

  // console.log(data);

  return (
    <div className={styled.maincont}>
      <div className={styled.filterdiv}>
        <div className={styled.filterleft}>
          <p>restaurants</p>
        </div>
        <div className={styled.filterright}>
          <div className={styled.filterlistdiv}>
            <ul className={styled.ul}>
              <li>Relevance</li>
              <li>Deleivery Time</li>
              <li>Rating</li>
              <li>Cost: low to high</li>
              <li>Cost: high to low</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styled.productmaindiv}>
        {data.map((item, i) => (
          <div className={styled.itemdiv} key={i}>
            <div className={styled.imgdiv}>
              <img src={item.img_url} alt="" />
            </div>
            <div className={styled.dishname}>{item.name}</div>
            <div className={styled.itemcategory}>{item.categories}</div>
            <div className={styled.itemdes}>
              <div>{"★" + item.rating}</div>
              <div>.</div>
              <div>{item.delivery_time + "MINS"}</div>
              <div>.</div>
              <div>{"₹" + item.price_for_two + "For Two"}</div>
            </div>
            <div></div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
