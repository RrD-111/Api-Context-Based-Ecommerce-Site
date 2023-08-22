import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../Context";
import "./styles.css";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const { cart } = CartState();

  return (
    <div className="header-container">
      <div className="left-section">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/011/401/535/small/online-shopping-trolley-click-and-collect-order-logo-design-template-vector.jpg"
          alt="Logo"
          className="logo"
        />
        <span className="header-title">ShopperStop</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
        <SearchIcon />
      </div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

