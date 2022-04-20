import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./components/Landing";
import Product from "./components/Product";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Product />
    </div>
  );
}

export default App;
