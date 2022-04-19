import * as React from "react";
import styled from "./Landing.module.css";

export const Landing = () => {
  return (
    <>
      <div className={styled.landing}>
        <div className={styled.top}>
          <div className={styled.topleft}>
            <div className={styled.topleftinfo}>
              <div className={styled.toplefttitle}>
                <div className={styled.logoswiggy}>swiggy</div>
                <div className={styled.loginsign}>
                  <div>login</div>
                  <div>signup</div>
                </div>
              </div>
              <div className={styled.headinghungry}>
                <h1>HUNGRY?</h1>
              </div>
              <p className={styled.topdes}>
                Order food from favourite restaurants near you
              </p>
            </div>
          </div>
          <div className={styled.topright}>
            <img
              src="https://swiggy-clone-five.vercel.app/static/media/swiggy2.7a07461eff9b39782538.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
