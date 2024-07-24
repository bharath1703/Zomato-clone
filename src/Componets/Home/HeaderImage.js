import React from "react";
import "./Styles/header.css";
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { IoLogInOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

// import Cusines from "../../Cusines.json"
function HeaderImage() {
  return (
    <div className="header_img_container">
      <div className="header_navbar_item">
        <div>
          <Link
            to="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN&gl=US&pli=1"
            id="Link"
          >
            <span>Get the App</span>
          </Link>
        </div>
        <div className="navbar_span_items">
          <ul className="navbar">
            <li>Investor Relation</li>
            <li>Add restaurents</li>
            <li className="Log">
              <IoLogInOutline />
              Login
              <ul className="login">
                <form>
                  <li>
                    <input
                      type="text"
                      placeholder="Enter UserName"
                      className="input"
                    />
                  </li>
                  <li>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="input"
                    />
                  </li>
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </form>
                <h6>Don't Have An Account ?</h6>
                <Link to={"/register"} className="btn btn-success">
                  Register
                </Link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h1>zomato</h1>
        <h3>Discover the best food & drinks in Chennai</h3>
        <label>
          <select className="location">
            <option>Select Location</option>
            <option>Andhra Pradesh</option>
            <option>Africa</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Birchgrove Park</option>
            <option>Chennai</option>
            <option>Canada</option>
            <option>Delhi</option>
            <option>Double Bay</option>
            <option>Eroup</option>
            <option>Rose Bay</option>
            <option>Watsons Bay</option>
          </select>

          <input
            className="search_feiled"
            type="search"
            placeholder="Search for a restaurents,cusine or a dish"
          ></input>
        </label>
      </div>
    </div>
  );
}

export default HeaderImage;
