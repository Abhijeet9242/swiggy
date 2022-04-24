import React, { useEffect, useContext, useState } from "react";
import styled from "./ProductDetails.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import styled "./ProductDetails.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getData } from "../Redux/ProductData/action";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { ProductContext } from "../Context/SingleProduct";
import { TotalPriceContext } from "../Context/TotalPrice";
import { CartContext } from "../Context/CartContext";
import { ProductDetailsContext } from "../Context/ProductDetails";
// import { DriveEtaSharp } from "@material-ui/icons";
import { getCartData } from "../Redux/Cart/action";

const ProductDetails = (props) => {
  const navigate = useNavigate();
  const [quant, setquant] = useState(1);
  const { proddetails, setProddetails } = useContext(ProductDetailsContext);
  const { single } = useContext(ProductContext);
  const { mycart, setmyCart } = useContext(CartContext);
  const { price, setPrice } = useContext(TotalPriceContext);
  // const [mycart, setmyCart] = useState([]);

  // const [proddetails, setProddetails] = useState([]);
  // const [price, setPrice] = useState(0);
  // const dispatch = useDispatch();
  // const [cartdis, setCartdis] = useState([]);

  let params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const itemData = async () => {
      let result = await fetch(
        `https://swiggydbjson.herokuapp.com/item?restaurant_id=${params.id}`
      );
      let res = await result.json();
      // console.log(res);
      setProddetails(res);
      // setProddetails(res);
    };
    itemData();
  }, [params.id]);

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
  const handleProductCatotwo = (catoname) => {
    let res = proddetails.filter((item) => {
      return item.category.toLowerCase() === catoname.toLowerCase();
    });
    setProddetails(res);
  };

  const handleVeg = (catoname) => {
    // console.log(catoname);
    let res = proddetails.filter((item) => {
      return item.veg === catoname;
    });
    // console.log(res);
    setProddetails(res);
  };

  //handling cart
  // const handleAddCart = (itemid) => {
  //   let res = proddetails.find((item) => {
  //     return item.id === itemid;
  //   });
  // console.log(res);
  // setMy(res);
  // setmyCart(res);

  // useEffect(() => {
  //   dispatch(getCartData);
  // }, []);

  const mycartdata = useSelector((state) => state.cartState.cartdata);
  console.log("mycartdata", mycartdata);

  const handleAddCart = (itemid) => {
    let res = proddetails.find((item) => {
      return item.id === itemid;
    });

    fetch(` https://swiggydbjson.herokuapp.com/cart`, {
      method: "POST",
      body: JSON.stringify(res),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getMore();
    });
  };

  async function getMore() {
    let cdata = await fetch("https://swiggydbjson.herokuapp.com/cart");
    let res = await cdata.json();
    // console.log(res);

    let totalprice = 0;
    res.map((e) => (totalprice = e.price + totalprice));
    setPrice(totalprice);

    setmyCart(res);
  }

  //   localStorage.setItem("cart", JSON.stringify(res));
  // };
  // let cartres = localStorage.getItem("cart");
  // console.log(cartres);

  // console.log(mycart.length);

  // const handleInc = async (incid) => {
  //   let cdata = await fetch("https://swiggydbjson.herokuapp.com/cart");
  //   let res = await cdata.json();
  //   // console.log(res);
  //   res.find((item) => {
  //     return item.id === incid;
  //   });
  // };

  // const handleDec = () => {};

  //subtotal

  const gotoCheckout = () => {
    navigate("/checkout");
  };

  const handleIncr = () => {
    alert("Item already added");
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
                      <span className={styled.spanflexcol}>|</span>
                      <span className={styled.spanflexcol}>
                        {item.rating}{" "}
                        <p className={styled.midledesflex}>100+ Ratings</p>
                      </span>
                      <span className={styled.spanflexcol}>|</span>
                      <span className={styled.spanflexcol}>
                        {item.delivery_time + "mins"}
                        <p className={styled.midledesflex}>Delievery Time</p>
                      </span>
                      <span className={styled.spanflexcol}>|</span>
                      <span className={styled.spanflexcol}>
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
          <div onClick={() => handleVeg(true)}>VEG</div>
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
              <div onClick={() => handleProductCatotwo(item.categories[2])}>
                {item.categories[2]}
              </div>
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
                    <button
                      className={styled.rightbtndivflex}
                      onClick={() => handleAddCart(item.id)}
                    >
                      ADD
                    </button>
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
            <p className={styled.carttitleitem}>ITEMS {mycart.length}</p>

            {mycart.map((item, i) => (
              <div className={styled.prodlistitem} key={i}>
                <div>▣{item.name}</div>
                <div>
                  <button className={styled.incbtn} onClick={handleIncr}>
                    +
                  </button>
                  <button className={styled.incbtn1}>-</button>
                </div>
                <div>{quant}</div>
                <div>₹{item.price}</div>
              </div>
            ))}

            <div className={styled.subtotaldiv}>
              <p>SubTotal</p>

              <p>₹{price}</p>
            </div>
            <div className={styled.checkoutbtndiv} onClick={gotoCheckout}>
              CHECKOUT →
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
