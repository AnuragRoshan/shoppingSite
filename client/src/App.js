import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from './Component/Navbar';
import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Component/Footer";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/product/:id' element={<Product />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
