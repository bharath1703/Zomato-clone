import React from "react";
import { BiCartAdd } from "react-icons/bi";
import "./Styles/navbar.css";
import { Link } from "react-router-dom";
function Navbar({ size }) {
  return (
    <div className="navbar_container ">
      <div className="Main_navbar">
        <div>
          <Link to="/" id="logo">
            <h3>Zomato</h3>
          </Link>
        </div>
        <div className="cart_box">
          <Link to="/cart" id="cartlink">
            <BiCartAdd className="cart" />
            <span>{size}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
