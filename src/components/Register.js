import React, { useState } from "react";
import styles from "./Register.module.css";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    // console.log(form);

    fetch(` https://swiggydbjson.herokuapp.com/user`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });

    navigate("/login");
  };

  const gotoLog = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className={styles.regmaindiv}>
        <div className={styles.box}>
          <div className={styles.header}>
            <div className={styles.headText}>
              <p className={styles.hText}>Sign Up</p>
              <p>
                or <span onClick={gotoLog}>login to your account</span>{" "}
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
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />
            <input
              type="text"
              className={styles.entry}
              placeholder="Name"
              onChange={handleChange}
              name="username"
            />

            <input
              type="email"
              className={styles.entry}
              placeholder="Email"
              onChange={handleChange}
              name="email"
              style={{ marginBottom: "20px" }}
            />

            <input
              type="password"
              className={styles.entry}
              placeholder="Password"
              onChange={handleChange}
              name="password"
            />
          </div>

          <div className={styles.referal}>Have a referral code?</div>
          <button className={styles.btn} onClick={handleClick}>
            Continue
          </button>
          <p className={styles.footText}>
            By creating an account, I accept the{" "}
            <span className={styles.terms}>
              Terms & Conditions & Privacy Policy
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
