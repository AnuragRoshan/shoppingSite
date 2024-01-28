import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-top">
      {/* <div className="nav-inner-top"> */}
      <div className="nav-head">ShopHub</div>
      <div className="nav-list">
        <Link to={"/"}>
          <div className="nav-items">Home</div>
        </Link>
        <Link to={"/cart"}>
          <div className="nav-items">Cart</div>
        </Link>
        <div className="search-input">
          <input
            type="text"
            name="search"
            placeholder="Search Products"
            //   value={searchInput}
            //   onChange={handleSearchInputChange}
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
