import React from "react";
import "./styles/orderonline.css";
import { SiTicktick } from "react-icons/si";
import Footer from "../Home/Footer";

function Overview() {
  return (
    <div className="overview">
      <div className="overview_container">
        <h1>About this place</h1>
        <h2>Cusines</h2>
        <div className="cusine_container">
          <div className="cusines_menu">
            <span>Nort India</span>
            <span>Continental</span>
            <span>Fast Food</span>
            <span>Desserts</span>
          </div>
        </div>
        <div className="content">
          <h2>People say This Place is Known For</h2>
          <h4>
            Humble Staff, Bartender, Host, Nice Concept, Best Place, Elaborate
            Menu
          </h4>
          <h2>Average Cost</h2>
          <h4>
            ₹3,000 for two people (approx.) with alcohol Exclusive of applicable
            taxes and charges, if any
          </h4>
          <h2>₹262 for a pint of beer (approx.)</h2>
          <h4>Cash and Cards accepted Digital payments accepted</h4>
        </div>
        <div className="more_info_container">
          <h2>More Info</h2>
          <div className="More_info">
            <div className="box1">
              <ul>
                <li>
                  <SiTicktick className="tick" /> Home Delivery
                </li>

                <li>
                  <SiTicktick className="tick" /> Full Bar Available
                </li>

                <li>
                  <SiTicktick className="tick" /> Table booking recommended
                </li>

                <li>
                  <SiTicktick className="tick" /> Live Sports Screening
                </li>
                <li>
                  <SiTicktick className="tick" /> Serves Alcohol
                </li>
              </ul>
            </div>
            <div className="box2">
              <ul>
                <li>
                  <SiTicktick className="tick" /> Takeaway Available
                </li>

                <li>
                  <SiTicktick className="tick" /> Indoor Seating
                </li>

                <li>
                  <SiTicktick className="tick" /> Resto Bar
                </li>

                <li>
                  <SiTicktick className="tick" /> Nightlife
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Overview;
