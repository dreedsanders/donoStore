import React from "react";
import { Link } from "react-router-dom";

const BRANDS = [
  { name: "Studio Line", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
  { name: "North & Co.", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80" },
  { name: "Urban Foundry", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
  { name: "Harbor Goods", img: "https://images.unsplash.com/photo-1560343090-f0409e92791d?w=400&q=80" },
  { name: "Field & Supply", img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&q=80" },
];

export default function YouLove() {
    return (
      <div id="you-love">
        <div className="love-header">
        <h1>Brands you&apos;ll see here</h1>
        <Link to="/market" className="love-see-all">
          See all →
        </Link>
        </div>
        <div className="love-images">
        {BRANDS.map((b) => (
          <div className="love-card" key={b.name}>
            <img src={b.img} alt="" />
            <h3>{b.name}</h3>
          </div>
        ))}
        </div>
      </div>
    );
}
