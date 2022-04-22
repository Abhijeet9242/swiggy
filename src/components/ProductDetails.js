import React, { useEffect, useState, useContext } from "react";
import styled from "./ProductDetails.module.css";
import { useSelector } from "react-redux";
// import styled "./ProductDetails.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getData } from "../Redux/ProductData/action";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { ProductContext } from "../Context/SingleProduct";

const ProductDetails = (props) => {
  const { single } = useContext(ProductContext);
  const [proddetails, setProddetails] = useState([]);

  let a = [];
  a = proddetails;
  console.log(a);

  let params = useParams();

  useEffect(() => {
    const itemData = async () => {
      let result = await fetch(
        `http://localhost:3001/item?restaurant_id=${params.id}`
      );
      let res = await result.json();
      // console.log(res);
      setProddetails(res);
      // setProddetails(res);
    };
    itemData();
  }, []);

  // console.log(proddetails);

  // console.log(single);

  //filtering on product categories

  const handleProductCatozero = (catoname) => {
    let res = proddetails.filter((item) => {
      return item.category.toLowerCase() === catoname.toLowerCase();
    });
    setProddetails(res);
  };
  const handleProductCatoone = (catoname) => {
    let res = proddetails.filter((item) => {
      return item.category.toLowerCase() === catoname.toLowerCase();
    });
    setProddetails(res);
  };

  return (
    <>
      <Navbar />
      <div className={styled.proddetailsmaindiv}>
        <div className={styled.proddetails}>
          {single.map((item, i) => (
            <>
              <div className={styled.first}>
                <div className={styled.firstimgdiv}>
                  <img src={item.img_url} alt="" />
                </div>
              </div>
              <div className={styled.second}>
                <div className={styled.secondcontdiv}>
                  <div className={styled.middlecontdiv}>
                    <p className={styled.categorytext}>{item.name}</p>
                    <p className={styled.categoryname}>{item.categories}</p>
                    <div className={styled.secondflexcont}>
                      <span>|</span>
                      <span>
                        {item.rating}{" "}
                        <p className={styled.midledesflex}>100+ Ratings</p>
                      </span>
                      <span>|</span>
                      <span>
                        {item.delivery_time + "mins"}
                        <p className={styled.midledesflex}>Delievery Time</p>
                      </span>
                      <span>|</span>
                      <span>
                        {"₹" + item.price_for_two}{" "}
                        <p className={styled.midledesflex}>Cost For Two</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styled.third}>
                <div className={styled.thirdofferdiv}>
                  <p>
                    50% off up to ₹100 + Flat ₹30 cashback with Paytm | Use code
                    WELCOME50
                  </p>
                  <p>50% off up to ₹100 | Use code TRYNEW</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className={styled.searchingmaindiv}>
          <div>VEG</div>
        </div>
      </div>
      <div className={styled.proflexdiv}>
        <div className={styled.firstpart}>
          {single.map((item) => (
            <div className={styled.catemaindiv}>
              <div onClick={() => handleProductCatozero(item.categories[0])}>
                {item.categories[0]}
              </div>
              <div onClick={() => handleProductCatoone(item.categories[1])}>
                {item.categories[1]}
              </div>
              <div>{item.categories[2]}</div>
            </div>
          ))}
        </div>
        <div className={styled.secondpart}>
          <p className={styled.lengthname}>{proddetails.length + "items"}</p>
          {proddetails.map((item) => (
            <div className={styled.resultitemdiv}>
              <p className={styled.titlemidleflex}>{item.category}</p>
              <div className={styled.itemdataflex}>
                <div className={styled.itemdivflexleft}>
                  <p className={styled.square}>▣</p>
                  <p className={styled.squarename}>{item.name}</p>
                  <p className={styled.squareprice}>{"₹" + item.price}</p>
                  <p className={styled.squaredes}>{item.des}</p>
                </div>
                <div className={styled.itemdivflexright}>
                  <div className={styled.rightimgdivflex}>
                    <img src={item.img_url} alt="" />
                  </div>
                  <div className={styled.rightbtndiv}>
                    <button className={styled.rightbtndivflex}>ADD</button>
                  </div>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
        <div className={styled.thirdpart}>
          <div className={styled.productcartdiv}>
            <h1 className={styled.carttitle}>Cart</h1>
            <p className={styled.carttitleitem}>ITEMS</p>
            <div className={styled.prodlistitem}>
              <p>▣DISh name</p>
              <p>
                <button>+</button>
                <button>-</button>
              </p>
              <p>₹</p>
            </div>
            <div className={styled.subtotaldiv}>
              <p>SubTotal</p>
              <p>₹</p>
            </div>
            <div className={styled.checkoutbtndiv}>CHECKOUT →</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
