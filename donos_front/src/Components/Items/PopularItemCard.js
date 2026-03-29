import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

export default function PopularItemCard(props) {
    let mypage = useSelector((state) => state.userState.mypage);

  return (
    <div className="item">
      <img src={props.item.image} height="50px" alt="yes" />
      <div>
        <h5>{props.item.name}</h5>

        <p>${props.item.asking_price}</p>
      </div>
      {mypage ? <Link to="">Edit</Link> : <button>Buy Now</button>}
    </div>
  );
}
