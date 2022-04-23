import React from "react";
import styles from "./Login.module.css";
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className={styles.box}>
        <div className={styles.header}>
          <div className={styles.headText}>
            <p className={styles.hText}>Login</p>
            <p>
              or <span>create an account</span>{" "}
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

        <input type="email" className={styles.entry} placeholder="Email" />

        <input type="email" className={styles.entry} placeholder="Email" />

        <button className={styles.btn}>Login</button>
        <p className={styles.footText}>
          By clicking on Login, I accept the{" "}
          <span className={styles.terms}>
            Terms & Conditions & Privacy Policy
          </span>
        </p>
      </div>
    </>
  );
}
