import React from "react";
import styled from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styled.nav}>
      <div className={styled.navleft}>
        <div></div>
        <div></div>
      </div>
      <div className={styled.navright}>hello</div>
    </div>
  );
};

export default Navbar;
