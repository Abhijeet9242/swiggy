import React from "react";
import Navbar from "./Navbar";
import styled from "./Search.module.css";
// import { useState } from "react";
// import { useSelector } from "react-redux";

const Search = () => {
  // const [searchdata, setSearch] = useState("");
  // const [data, setData] = useState([]);

  // const productdata = useSelector((state) => state.productState.productdata);

  // const getSearchdata = () => {
  //   // console.log(productdata);
  //   // console.log(searchdata);
  //   let res = productdata.filter((item) => {
  //     return item.name.toLowerCase().includes(searchdata.toLowerCase());
  //   });
  //   console.log(res);
  // };

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  //   let res = productdata.filter((item) => {
  //     return productdata.name.toLowerCase() === searchdata.toLowerCase();
  //   });
  //   console.log(res);
  // };

  return (
    <>
      <Navbar />
      <div classNameName={styled.ipdiv}>
        <input
          type="text"
          placeholder="Search for Restaurants"
          // onChange={handleSearch}
        />
      </div>

      <div></div>
    </>
  );
};

export default Search;
