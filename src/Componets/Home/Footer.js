import React from "react";
import "./Styles/footer.css";
import { MdOutlineLanguage } from "react-icons/md";
function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_sub_container">
        <div>
          <div className="footer_head">
            <div>
              <h2>Zomato</h2>
            </div>

            <div className="footer_sub_items">
              <div className="footer_location">
                <label>
                  <select>
                    <option>India</option>
                    <option>Australia</option>
                    <option>Eroupe</option>
                    <option>Indonesia</option>
                    <option>Asia</option>
                    <option>egypt</option>
                    <option>France</option>
                    <option>Irland</option>
                    <option>Japan</option>
                    <option>China</option>
                  </select>
                </label>
              </div>
              <div className="footer_language">
                <label>
                  <select>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Telugu</option>
                    <option>Tamil</option>
                    <option>Urdhu</option>
                    <option>Marati</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_box">
          <div className="footer_card">
            <h6>ABOUT ZOMATO</h6>
            <span>Who We Are</span>
            <span>Blog</span>
            <span>Work With Us</span>
            <span>Investor Relations</span>
            <span>Report Fraud</span>
            <span>Press Kit</span>
            <span>Contact Us</span>
          </div>
          <div className="footer_card">
            <h6>ZOMAVERSE</h6>
            <span>Zomato</span>
            <span>Blinkit</span>
            <span>Feeding India</span>
            <span>Hyperpure</span>
            <span>Zomaland</span>
          </div>
          <div className="footer_card">
            <h6>FOR RESTAURANTS</h6>
            <span>Partner With Us</span>
            <span>Apps For You</span>
          </div>
          <div className="footer_card">
            <h6>LEARN MORE</h6>
            <span>Privacy</span>
            <span>Security</span>
            <span>Terms</span>
            <span>Sitemap</span>
          </div>
          <div className="footer_card">
            <h6>SOCIAL LINKS</h6>
          </div>
        </div>
      </div>
      <div className="footer_license">
        <hr></hr>
        <span>
          By contunuing past page,you agree to our Terms of Service,Cookie
          Policy and Content Policies All trademarks are properties of their
          respective owners 2008-2024 @ Zomato Ltd All rights reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
