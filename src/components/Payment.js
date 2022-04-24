import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "./Payment.module.css";

const Payment = () => {
  const navigate = useNavigate();

  const success = () => {
    setTimeout(() => {
      navigate("/success");
    }, 2000);
  };

  useEffect(() => {
    success();
  });

  return (
    <div className={styled.processingdiv}>
      <img
        src="https://1.bp.blogspot.com/-TUnIV6lCpUI/Ug5AjWt-L5I/AAAAAAAABRY/X5083DNXw28/s1600/LoadingWait.gif"
        alt=""
      />
    </div>
  );
};

export default Payment;
