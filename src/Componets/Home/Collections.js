import React from "react";
import breakfast from "../Home/Images/breakfast.jpg";
import biryani from "../Home/Images/biryani.jpg";
import vegfriedRice from "../Home/Images/vegfriedRice.jpg";
import "./Styles/collections.css";
import Cusines from "../../Cusines.json";
import { Link } from "react-router-dom";

function Collections() {
  let collection_item = Cusines.slice().filter(
    (filtered_top_collection) =>
      filtered_top_collection.catagory == "collection"
  );
  return (
    <div>
      <div>
        <h2 className="card_title">Collection</h2>
        <h4 className="sub_title">
          Explore curated lists of top resturants,cafes,pubs,and bars in
          chennai,based on trends
        </h4>
      </div>
      <div className="Collection_container">
        {collection_item.map((item) => {
          return (
            <div
              className=" col-lg-3 col-md-4 col-sm-6   mb-2 "
              id="card_container"
            >
              <div className="row justify-content-center">
                <Link to={`/${item.path}`} className="links">
                  <div
                    className="card p-2 overflow-hidden shadow "
                    id="Img_Card"
                  >
                    <div className="Img-Card">
                      {<img src={item.icon} class="card-img-top img-fluid " />}
                    </div>
                    <div className="card-title">{item.title}</div>
                    <div className="card-info">{item.info}</div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Collections;
