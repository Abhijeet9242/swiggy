import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import Product from "./components/Product";
import Search from "./components/Search";
// import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
// import { Landing } from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/home" element={<Product />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
    </Routes>
  );
}

export default App;
