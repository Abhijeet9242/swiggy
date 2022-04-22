import React from "react";
import styled from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styled.mainnavdiv}>
        <div className={styled.navleft}>
          <img
            src="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png"
            alt=""
          />
        </div>
        <div className={styled.navright}>
          <ul className={styled.ul}>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>service</li>
            <li>gallery</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
