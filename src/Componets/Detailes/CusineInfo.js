import React from "react";
import { Context } from "./CusineDetaile";
import { useContext } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import Navbar from "../Home/Navbar";
import Cart from "../Cart/Cart";
import { useParams } from "react-router-dom";
import Cusine from "../../Cusines.json";

function CusineDetaile() {
  // const [item, setItem] = useState([]);
  // let param = useParams();
  // let paramid = param.id;
  // console.log(paramid);
  // let CartItem = Cusine.filter((item) => item.id == paramid);
  // console.log(CartItem);
  const {
    icon,
    id,
    title,
    price,
    offer,
    deliveryTime,
    Ratings,
    cusineNameAndlocattion,
    cart,
    setCart,
  } = useContext(Context);

  // ADD TO CART FUNCTION

  function AddToCart(id) {
    let cartitem = Cusine.filter((item) => item.id === id);
    setCart(cartitem);
    console.log(cartitem);
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="card p-2 overflow-hidden h-100 shadow ">
          <img src={icon} className=" card-img-top img-fluid " />

          <div className="offer_time">
            <div className="offer">{offer}</div>
            <div className="time">{deliveryTime}</div>
          </div>
          <div className="cusine_title">
            <div>{title}</div>

            <div className="ratings">
              {Ratings}
              <FaStar />
            </div>
          </div>
          <div className="brand_and_price">
            <div className="brand">{cusineNameAndlocattion}</div>
            <div className="price">₹ {price}</div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={() => AddToCart(id)}>
        Add
      </button>
    </div>
  );
}

export default CusineDetaile;
