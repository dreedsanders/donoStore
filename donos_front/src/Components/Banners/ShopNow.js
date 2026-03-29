import React from "react";
import { Link } from "react-router-dom";

export default function ShopNow() {
  return (
    <div id="shop-now">
      <div className="shop-now-text">
        <h1>Holiday savings, without the chaos</h1>
        <h3>
          Deals on pre-owned and new finds—browse the market and save on what
          you actually want.
        </h3>
        <Link to="/market" className="shop-now-cta">
          Shop deals →
        </Link>
      </div>
      <div className="shop-now-image">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
