import React from "react";
import { Link } from "react-router-dom";

export default function StartSelling() {
  return (
    <div id="selling">
      <div id="shop-now">
        <div className="shop-now-text">
          <h1>Turn clutter into cash</h1>
          <h3>
            List items in minutes. Reach buyers who are already browsing the
            market.
          </h3>
          <Link to="/market" className="shop-now-cta">
            Start selling →
          </Link>
        </div>
        <div className="shop-now-image">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
