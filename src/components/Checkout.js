import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Checkout.css";
import useEffect from "react";
import { CartContext } from "../Context/CartContext";
import { TotalPriceContext } from "../Context/TotalPrice";

const Checkout = () => {
  //   const [cdata, setCdata] = useState([]);

  const { mycart, setmyCart } = useContext(CartContext);
  const { price } = useContext(TotalPriceContext);
  const [cdata, setCdata] = useState([]);

  async function getMore() {
    let cdata = await fetch("https://swiggydbjson.herokuapp.com/cart");
    let res = await cdata.json();
    // console.log(res);

    // let totalprice = 0;
    // res.map((e) => (totalprice = e.price + totalprice));
    // setPrice(totalprice);

    // setmyCart(res);

    setCdata(res);
  }
  getMore();
  //   console.log(mycart);
  return (
    <>
      <Navbar />
      <div className="maincheckdiv">
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form>
                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label for="fname">
                      <i className="fa fa-user"></i> Full Name
                    </label>
                    <input type="text" id="fname" name="firstname" />
                    <label for="email">
                      <i className="fa fa-envelope"></i> Email
                    </label>
                    <input type="text" id="email" name="email" />
                    <label for="adr">
                      <i className="fa fa-address-card-o"></i> Address
                    </label>
                    <input type="text" name="address" />
                    <label for="city">
                      <i className="fa fa-institution"></i> City
                    </label>
                    <input type="text" name="city" />

                    <div className="row">
                      <div className="col-50">
                        <label for="state">State</label>
                        <input type="text" name="state" />
                      </div>
                      <div className="col-50">
                        <label for="zip">Zip</label>
                        <input type="text" name="zip" />
                      </div>
                    </div>
                  </div>

                  <div className="col-50">
                    <h3>Payment</h3>
                    <label for="fname">Accepted Cards</label>
                    <div className="icon-container">
                      <i
                        className="fa fa-cc-visa"
                        style={{ color: "navy" }}
                      ></i>
                      <i
                        className="fa fa-cc-amex"
                        style={{ color: "blue" }}
                      ></i>
                      <i
                        className="fa fa-cc-mastercard"
                        style={{ color: "red" }}
                      ></i>
                      <i
                        className="fa fa-cc-discover"
                        style={{ color: "orange" }}
                      ></i>
                    </div>
                    <label for="cname">Name on Card</label>
                    <input type="text" name="cardname" />
                    <label for="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" />
                    <label for="expmonth">Exp Month</label>
                    <input type="text" id="expmonth" name="expmonth" />
                    <div className="row">
                      <div className="col-50">
                        <label for="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" />
                      </div>
                      <div className="col-50">
                        <label for="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" />
                      </div>
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  value="Continue to checkout"
                  className="btn"
                />
              </form>
            </div>
          </div>
          <div className="col-25">
            <div className="container">
              <h4>
                Cart{" "}
                <span className="price" style={{ color: "black" }}>
                  <i className="fa fa-shopping-cart"></i> <b>4</b>
                </span>
              </h4>

              {cdata.map((item, i) => (
                <p key={i}>
                  <span>{item.name}</span>{" "}
                  <span class="price">${item.price}</span>
                </p>
              ))}

              <hr />
              <p>
                Total{" "}
                <span className="price" style={{ color: "black" }}>
                  <b>₹{price}</b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
