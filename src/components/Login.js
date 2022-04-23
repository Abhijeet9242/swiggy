import React, { useState } from "react";
import styles from "./Login.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [lform, setLform] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLform({ ...lform, [name]: value });
    // console.log(lform);
  };

  const checkLogin = async (e) => {
    e.preventDefault();
    let cdata = await fetch("https://swiggydbjson.herokuapp.com/user");
    let res = await cdata.json();
    // console.log(lform);
    // console.log(res);

    res.filter((user) =>
      user.email === lform.email || user.password === lform.password
        ? navigate("/home")
        : navigate("/register")
    );
  };

  const gotoReg = () => {
    navigate("/register");
  };

  return (
    <>
      <Navbar />
      <div className={styles.box}>
        <div className={styles.header}>
          <div className={styles.headText}>
            <p className={styles.hText}>Login</p>
            <p>
              or <span onClick={gotoReg}>create an account</span>{" "}
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

        <input
          type="email"
          className={styles.entry}
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />

        <input
          type="password"
          className={styles.entry}
          placeholder="password"
          onChange={handleChange}
          name="password"
        />

        <button className={styles.btn} onClick={checkLogin}>
          Login
        </button>
        <p className={styles.footText}>
          By clicking on Login, I accept the{" "}
          <span className={styles.terms}>
            Terms & Conditions & Privacy Policy
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
}
