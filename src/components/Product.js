import styled from "./Product.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, sortData } from "../Redux/ProductData/action";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const data = useSelector((state) => state.productState.productdata);

  console.log(data);

  const handlingSort = () => {
    dispatch(sortData());
  };

  const handleProductDetails = (prodid) => {
    navigate(`/product/${prodid}`);
  };

  return (
    <div className={styled.maincont}>
      <div className={styled.filterdiv}>
        <div className={styled.filterleft}>
          <p>restaurants</p>
        </div>
        <div className={styled.filterright}>
          <div className={styled.filterlistdiv}>
            <ul className={styled.ul}>
              <li>
                <button onClick={handlingSort}>Relevance</button>
              </li>
              <li>
                <button>Deleivery Time</button>
              </li>
              <li>
                <button>Rating</button>
              </li>
              <li>
                <button>Cost: low to high</button>
              </li>
              <li>
                <button>Cost: high to low</button>
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
              <div>{"★" + item.rating}</div>
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
    </div>
  );
};

export default Product;
