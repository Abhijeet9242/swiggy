import styled from "./Product.module.css";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleProductdata } from "../Redux/ProductData/action";
import {
  getData,
  sortDataLH,
  sortDataHL,
  sortDataRating,
  sortDelivery,
} from "../Redux/ProductData/action";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { ProductContext } from "../Context/SingleProduct";
import Footer from "./Footer";

const Product = () => {
  const { setSingle } = useContext(ProductContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const data = useSelector((state) => state.productState.productdata);

  // console.log(data);

  //filtering
  const handlingSortLH = () => {
    dispatch(sortDataLH());
  };

  const handlingSortHL = () => {
    dispatch(sortDataHL());
  };

  const handlingRating = () => {
    dispatch(sortDataRating());
  };

  const handlingDelivery = () => {
    dispatch(sortDelivery());
  };

  const handleProductDetails = (prodid) => {
    // navigate(`/product/${prodid}`);

    let res = data.filter((e) => {
      return e.id === prodid;
    });
    // console.log(res);
    setSingle(res);

    navigate(`/product/${prodid}`);
  };

  return (
    <div className={styled.maincont}>
      <Navbar />
      <div className={styled.homecoro}>
        <div>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/rmu9xmyxpyc3iwgvh6u1"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jcjcvebiczqe5jr2vijo"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"
            alt=""
          />
        </div>
      </div>
      <div className={styled.filterdiv}>
        <div className={styled.filterleft}>
          <p className={styled.rescount}>{data.length} restaurants</p>
        </div>
        <div className={styled.filterright}>
          <div className={styled.filterlistdiv}>
            <ul className={styled.ul}>
              <li>
                <button>Relevance</button>
              </li>
              <li>
                <button onClick={handlingDelivery}>Deleivery Time</button>
              </li>
              <li>
                <button onClick={handlingRating}>Rating</button>
              </li>
              <li>
                <button onClick={handlingSortLH}>Cost: low to high</button>
              </li>
              <li>
                <button onClick={handlingSortHL}>Cost: high to low</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styled.productmaindiv}>
        {data.map((item, i) => (
          <div
            className={styled.itemdiv}
            key={i}
            onClick={() => handleProductDetails(item.id)}
          >
            <div className={styled.imgdiv}>
              <img src={item.img_url} alt="" />
            </div>
            <div className={styled.dishname}>{item.name}</div>
            <div className={styled.itemcategory}>{item.categories}</div>
            <div className={styled.itemdes}>
              <div>
                <span className={styled.rating}>{"★" + item.rating}</span>
              </div>
              <div>.</div>
              <div>{item.delivery_time + "MINS"}</div>
              <div>.</div>
              <div>{"₹" + item.price_for_two + "For Two"}</div>
            </div>
            <div className={styled.hrline}>
              <hr></hr>
            </div>
            <div className={styled.itemoffer}>
              <div className={styled.offerlogo}>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/205/938/small/offer-tag-icon-free-vector.jpg"
                  alt=""
                  className={styled.offerlogoimg}
                />
              </div>
              <div className={styled.itemofferrate}>
                50% off | Use WELCOME50
              </div>
            </div>
            <div className={styled.hrline}>
              <hr></hr>
            </div>
            <div className={styled.itemquickview}>QUICK VIEW</div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
