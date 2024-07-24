import React from "react";
import HeaderImage from "./HeaderImage";
import Collections from "./Collections";
import Brands from "./Brands";
import Footer from "./Footer";
import "./Styles/home.css";
function Home() {
  return (
    <div className="home_container">
      <HeaderImage />
      <Collections />
      <Brands />
      <Footer />
    </div>
  );
}

export default Home;
