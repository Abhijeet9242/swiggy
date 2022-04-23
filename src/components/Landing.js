import * as React from "react";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../Context/LocationContext";
import styled from "./Landing.module.css";

export const Landing = () => {
  const navigate = useNavigate();
  const { setLocation, location } = React.useContext(LocationContext);
  // const handleLocation = () =>{
  //   navigator.geolocation.getCurrentPosition(successCallback,errorCallback)
  //   if(
  // }

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      console.log("location not found");
    }

    function onSuccess(position) {
      // console.log(position);
      let { latitude, longitude } = position.coords;

      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=c2ab82e7d6484f4fa91f9e16e7bd159f`
      )
        .then((response) => response.json())
        .then((result) => {
          let alldata = result.results[0].components;
          let { city } = alldata;
          // console.log(city, postcode, country);
          setLocation(city);
          // setTimeout(() => {
          //   navigate("/home");
          // }, 2000);
        });
    }
    function onError(error) {
      // console.log(error);
      if (error.code === 1) {
        console.log("you denied the request");
      } else if (error.code === 2) {
        console.log("location not available");
      } else {
        console.log("something wentt wrong");
      }
    }
  };

  const goLogin = () => {
    navigate("/login");
  };
  const goRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <div className={styled.landing}>
        <div className={styled.top}>
          <div className={styled.topleft}>
            <div className={styled.topleftinfo}>
              <div className={styled.toplefttitle}>
                <div className={styled.logoswiggy}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png"
                    alt=""
                  />
                </div>
                <div className={styled.loginsign}>
                  <button className={styled.signinbtn} onClick={goLogin}>
                    Login
                  </button>
                  <button
                    style={{ background: "black", color: "white" }}
                    onClick={goRegister}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              <div className={styled.headinghungry}>
                <h1>HUNGRY?</h1>
              </div>
              <p className={styled.topdes}>
                Order food from favourite restaurants near you
              </p>
              <input
                className={styled.topleftinput}
                placeholder="Get Your Current City Location by Clicking on Find Food"
                onChange={(e) => e.preventDefault()}
              />

              <button className={styled.inputbtn} onClick={handleLocation}>
                FIND FOOD
              </button>
              <h5 className={styled.topleftbottom}>
                Your City is:
                <span className={styled.locationcol}>{location} </span>
              </h5>
              {/* <h5 className={styled.topleftbottom}>
                MUMBAI DELHI GURGAON PUNE CHENNAI KOLKATA BANGLORE HYDERABAD &
                MORE
              </h5> */}
            </div>
          </div>
          <div className={styled.topright}>
            <img
              src="https://swiggy-clone-five.vercel.app/static/media/swiggy2.7a07461eff9b39782538.jpg"
              alt="Swiggy.com"
            />
          </div>
        </div>
      </div>
      <div className={styled.midbar}>
        <div className={styled.midbardesc}>
          <div className={styled.midbardescription}>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
              alt="swiggy"
            />
            <h3>No Minimum Order</h3>
            <p>
              Order in for youself or for the group, with no restriction on
              order value
            </p>
          </div>
          <div className={styled.midbardescription}>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
              alt="swiggy"
            />
            <h3>Live Order Tracking</h3>
            <p>
              Know where your order is at all times, from the resturant to your
              doorstep
            </p>
          </div>
          <div className={styled.midbardescription}>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
              alt="swiggy"
            />
            <h3>Lightening Fast Delivery</h3>
            <p>
              Experience Swiggy's superfast delivery for food delivered fresh on
              time
            </p>
          </div>
        </div>
      </div>
      <div className={styled.footer}>
        <div className={styled.footerdesc}>
          <h1>Restaurants in your pocket</h1>
          <p>
            Order food from your favourite resturant & track on the go using our
            all new Swiggy app
          </p>
          <img
            src="https://logowik.com/content/uploads/images/app-store-and-google-play.jpg"
            alt=""
          />
        </div>
        <div className={styled.footerdesc2}>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
            alt=""
          />
        </div>
      </div>
      <div className={styled.footer2}>
        <div className={styled.footer2desc}>
          <div className={styled.footer2heading}>
            <h4>COMPANY</h4>
          </div>
          <div className={styled.footer2names}>
            <p>About Us</p>
            <p>Team</p>
            <p>Career</p>
            <p>Swiggy Blog</p>
            <p>Swiggy Super</p>
          </div>
        </div>
        <div className={styled.footer2desc}>
          <div className={styled.footer2heading}>
            <h4>CONTACT</h4>
          </div>
          <div className={styled.footer2names}>
            <p>Help & Support</p>
            <p>Partner With us</p>
            <p>Ride With Us</p>
          </div>
        </div>
        <div className={styled.footer2desc}>
          <div className={styled.footer2heading}>
            <h4>LEGAL</h4>
          </div>
          <div className={styled.footer2names}>
            <p>Terms & Conditions</p>
            <p>Refund & Cancellation</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Offer Terms</p>
            <p>Phising & Fraud</p>
          </div>
        </div>
        <div className={styled.footer2desc}>
          <img
            src="https://logowik.com/content/uploads/images/app-store-and-google-play.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
