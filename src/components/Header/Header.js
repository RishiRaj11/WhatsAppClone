import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <header className="header">
        <div>
          <Link to="/" className="header_logo">
            <h1>
              <img
                src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
                alt="logo"
                id="image"
              />
              GitApi
            </h1>
          </Link>
        </div>
        <div className="cart">
          <Link to="/cart" className="cart_button">
            <i className="fas  fa-shopping-cart" />
            <sup className="badge">2</sup>
          </Link>
          <Link to="/">
            <img src={user} alt="login" className="user_icon" />
          </Link>
        </div>
      </header>
      <hr />
    </div>
  );
};

export default Header;
