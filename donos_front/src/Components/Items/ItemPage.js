import React from 'react';
import { useSelector } from "react-redux";


export default function ItemPage() {
    let item = useSelector((state) => state.itemState.current_item[0])
    return (
      <div className="itempage">
        <div className="itempage-left">
          <img src={item.image} alt=""></img>
        </div>
        <div className="itempage-right">
          <div className="itempage-title">
            <h1>{item.name}</h1>
            <p>inclueds 1 {item.name}</p>
            <h3> $ {item.asking_price} </h3>
            {/* ratings */}
          </div>
          <div className="itempage-action">
            <button>Buy</button>
            <button>Wishlist</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    );
}
