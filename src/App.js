import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { Landing } from "./components/Landing";
import Product from "./components/Product";
// import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Product />}></Route>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
    </Routes>
  );
}

export default App;
