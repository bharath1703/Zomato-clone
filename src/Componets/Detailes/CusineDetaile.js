import React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Overview from "./Overview";
import data from "./Data";
import { useState } from "react";
import CusineInfo from "./CusineInfo";
import Navbar from "../Home/Navbar";
import Cart from "../Cart/Cart";

export const Context = React.createContext();

function CusineDetaile() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const param = useParams();
  // console.log(param.id);
  let paramid = param.id;
  // console.log(paramid);

  let Detailed_cusine = data.filter((item) => item.id == paramid);
  // console.log(Detailed_cusine);
  // console.log(Cusines);

  return (
    <div>
      <div className="tranding_img_card_container">
        {Detailed_cusine.map((item) => {
          // console.log(item.path);
          const {
            icon,
            title,
            price,
            id,
            offer,
            deliveryTime,
            Ratings,
            cusineNameAndlocattion,
          } = item;
          // console.log(price);
          return (
            <div className="col-11 col-sm-8 col-md-10 col-lg-12 mx-0 h-100">
              <Context.Provider
                value={{
                  icon,
                  title,
                  price,
                  id,
                  offer,
                  deliveryTime,
                  Ratings,
                  cusineNameAndlocattion,
                  cart,
                  setCart,
                }}
              >
                <CusineInfo />
              </Context.Provider>
            </div>
          );
        })}
      </div>
      <Overview />
    </div>
  );
}

export default CusineDetaile;
