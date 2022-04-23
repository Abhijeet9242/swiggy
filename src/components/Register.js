import React from "react";
import styles from "./Register.module.css";
import Navbar from "../components/Navbar";

export default function Register() {
  return (
    <>
      <Navbar />

      <div className={styles.box}>
        <div className={styles.header}>
          <div className={styles.headText}>
            <p className={styles.hText}>Sign Up</p>
            <p>
              or <span>login to your account</span>{" "}
            </p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.headImage}>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt=""
            />
          </div>
        </div>
        <div className={styles.formField}>
          <input
            type="text"
            className={styles.entry}
            placeholder="Phone Number"
          />

          <input type="text" className={styles.entry} placeholder="Name" />

          <input type="email" className={styles.entry} placeholder="Email" />

          <input
            type="password"
            className={styles.entry}
            placeholder="Password"
          />
        </div>

        <div className={styles.referal}>Have a referral code?</div>
        <button className={styles.btn}>Continue</button>
        <p className={styles.footText}>
          By creating an account, I accept the{" "}
          <span className={styles.terms}>
            Terms & Conditions & Privacy Policy
          </span>
        </p>
      </div>
    </>
  );
}
