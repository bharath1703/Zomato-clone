import React from "react";
import Logo from "../../BrandsLogo.json";
import "./Styles/logos.css";

function Brands() {
  return (
    <div>
      <div className="card-body">
        <h3 className="card-title">Top brands near you</h3>
        <h4 className="info">
          Dine out order food from top brands in your neighborhood
        </h4>
      </div>
      <div className="logo_container">
        {Logo.map((filtered_logo) => {
          return (
            <div>
              <div className="logo">
                <img src={filtered_logo.icon} />
                <div className="logo_title">{filtered_logo.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Brands;
