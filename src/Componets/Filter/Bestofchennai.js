import React from "react";
import Cusines from "../../Cusines.json";
import { FaStar } from "react-icons/fa";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
function Bestofchennai() {
  let tranding_items = Cusines.slice().filter(
    (top_filterd_items) => top_filterd_items.Ratings <= 3.5
  );
  // console.log();
  return (
    <div>
      <div className="tranding_img_card_container">
        {tranding_items.map((item) => {
          // console.log(item.path);
          return (
            <div className="col-11 col-sm-8 col-md-5 col-lg-3 mx-0 mb-0 ">
              <div className="row justify-content-center">
                <Link to={`/Tranding/${item.id}`} className="links">
                  <div className="card p-2 overflow-hidden h-100 shadow ">
                    <img src={item.icon} className=" card-img-top img-fluid " />

                    <div className="offer_time">
                      <div className="offer">{item.offer}</div>
                      <div className="time">{item.deliveryTime}</div>
                    </div>
                    <div className="cusine_title">
                      <div>{item.title}</div>

                      <div className="ratings">
                        {item.Ratings}
                        <FaStar className="star_icon" />
                      </div>
                    </div>
                    <div className="brand_and_price">
                      <div className="brand">{item.cusineNameAndlocattion}</div>
                      <div className="price">₹ {item.price}</div>
                    </div>
                  </div>
                  {/* </Link> */}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Bestofchennai;
