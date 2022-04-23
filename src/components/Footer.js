import React from "react";
import styled from "./Footer.module.css";

const Footer = () => {
  return (
    <>
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

export default Footer;
