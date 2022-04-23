import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../Context/LocationContext";
import styled from "./Navbar.module.css";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const { mycart } = useContext(CartContext);
  const navigate = useNavigate();
  const { location } = useContext(LocationContext);
  const handleSearch = () => {
    navigate("/search");
  };
  // console.log(mycart);

  return (
    <>
      <div className={styled.mainnavdiv}>
        <div className={styled.navleft}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png"
            alt=""
          />
          <span className={styled.locspan}> {location}</span>
        </div>

        <div className={styled.navright}>
          <ul className={styled.ul}>
            <li onClick={handleSearch}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEX///8AAADt7e38/Pz5+fl8fHzc3Nz29vZTU1Px8fFkZGTGxsadnZ0tLS3j4+PPz8+Dg4M3NzdycnKWlpYnJyeurq4QEBBfX1+Pj48cHBy3t7dNTU1FRUVAQEBsbGykpKQ3jRtcAAADh0lEQVRogbVZ16KCMAxFGaIsAUEEx///5VWvTQtJ0yGeR5se2zSbIOAQbquubc63oqinwzEfkx0r7oDd2NSbBfq0TVagzs5LYoHLUH7FvM8vOuo3zpk/99Cz1C9cKz/q0cj8f/qtO/U2teN+4vGjY/9j2jtxHwmKOj00zf08EQ/RO2g+RCq5d9Jvwn3WFkuB0ZZ7d5pvbAiD2z5uc6Hcknvuj4POGqrJnT2cnfsYMaLV7Bg2RqPquzYFkNxN76qdHM1HSdR7mmLN6HSSJ8KD3FBwOnwagcJta7uNYlesoGIA9vFU0SQXJTv3c78gz37SKyZ01DdAXnjQygwWMiT2MqfoXG4PEjc37qc7Gc1XHtw9OUq10+FXatxRKS/IW9MxRvpP6E4ePMTmgtyd8v9tAmvE0jndkpZAK7bHxOLILVpAap1YvHPXsgGUZjhORwXzx1aAq+OsUX6pFeXRDmgpE0tuUUWFSNk1WoGE5VGdfRBrKURQ7vlswgECNnpRka1Sb26pWZQyhMLwa1gDbAI9m4jI3saiuBGyRVFeWpQTWgjyVrfwE/IVTh5qyX+q8+tn4exPrrcWERSv/uRg5yiuQnb291DIdMhDYcW/LRYVQI9SGdyp8yYXGQFHRSYaWwLeE9e6IbQgvuQP5u5QM/kOC6A0IV4NlO6pF9BKTyzuNsw/WwBaALIYhNrCKwLIsoXsAEEvXmkUnFBTfkPlcnfnBo3r/ARsycNgZOOiKZEjaD4urgFGdmoolmMRx8CbwEamMpF9k1ONrsxQmMgk+yan+CVHL2w2UFpt65pRnSux/hf1zmePrnKLocVUFGPX1JWzcdeVnyCr45nUPGxejghrvqGKVVmD4reHDQIf9mYbJqZDCnNMvTH1VPOhdqoR3tHUG1PwuM+F6xxF0X3W0MRv8HaGpq1F3FXidbdZnhpm39oA80ZH7rmcihO5gMDnmwRNaxkQnwcMiZgaRJMoqmDCv068jyR24/m3fu/4d4M7BRn6hIMQfyhivNSbqgj9h5wXLsqEmrJ644iibHUGcs5mWYcyMItcXHaHhe1cbke8LyPY7cJ2WY3tsXkiHh5ZQr9VQrDz7uSCkjD4Lxq4BXaE633R7y8QUe7kM0mkQbnTauSUO61HTrjTiuTYndYkR+60KvnSndYlD8r+h+TzD3xrkwdR+kNytbj6ATk0eOtFRhXlMJ2mtgz+AKR3I3xR9ei7AAAAAElFTkSuQmCC"
                alt=""
              />
              Search
            </li>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3MGPlNv1AQb_WMM1d9BtV2jVJuIHNMZaevAYAy6CLPQ&s"
                alt=""
              />
              Offer
            </li>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRX5dIHpYjXHQgE0IGdCwiNoOpMqh9hhlX8qN0OF36Aw&s=0"
                alt=""
              />
              Help
            </li>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0e1UEWKCcHseAw12kOa_2DN2IJxpd-I7xm1aD7DfWTQ&s"
                alt=""
              />
              Sign In
            </li>
            <li className={styled.carno}>
              <span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOV4VaRCekJshpiqupuO5PJFvPODOAlZ778Tzo_gnQA&s"
                  alt=""
                />
              </span>
              <span>
                <p className={styled.cartcout}>{mycart.length}</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
