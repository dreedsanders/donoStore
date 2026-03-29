import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="welcome">
      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
        id="welcome-img"
        alt=""
      />
      <div className="welcome-link">
        <h1>Dono&apos;s Shop</h1>
        <p className="welcome-sub">
          Curated listings, simple checkout, and a calmer place to browse.
        </p>
        <Link to="/home" className="welcome-btn">
          Enter the store
        </Link>
      </div>
    </div>
  );
}
