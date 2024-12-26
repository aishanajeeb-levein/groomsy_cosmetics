import React from "react";
import rightlogo from "../img/rightlogo2.png";
import { motion as m } from "framer-motion";

function TopBanner() {
  function handleClick() {
    alert("working fine.....");
  }

  return (
    <div className="top_banner">
      <m.div
        className="topbanner_heading"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        exit={{ opacity: 1 }}
      >
        <h1>Discover Your Inner Beauty</h1>
        <h1>Enjoy Every Moment with Our Products</h1>
        <h1>Bringing You the Best in Beauty</h1>
        <p>Your One-Stop Shop for Premium Skincare, Body Care, and Hair Care</p>

        <button className="ShowNow_btn" onClick={handleClick}>
          Explore Our Collection
        </button>
      </m.div>
      <m.div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        exit={{ opacity: 1 }}
      >
        <img src={rightlogo} alt="Not Found" />
      </m.div>

      <div className="checking"></div>
    </div>
  );
}

export default TopBanner;
