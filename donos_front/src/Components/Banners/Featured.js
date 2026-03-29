import React from "react";
import { Link } from "react-router-dom";

const PICS = [
  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
  "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
];

export default function Featured() {
  return (
    <div id="featured">
      <div className="featured-info">
        <p>Featured</p>
        <h3>Dono&apos;s Store</h3>
        <h4>Deals made easy—every season</h4>
        <div>
          <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
            Free shipping on select orders. Fair prices from real sellers.
          </p>
          <Link to="/market" className="featured-cta">
            Browse the market
          </Link>
        </div>
      </div>
      <div className="featured-pictures-container">
        {PICS.map((src) => (
          <img key={src} src={src} className="featured-pic" alt="" />
        ))}
      </div>
    </div>
  );
}
