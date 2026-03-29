import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function getItemRecordId(item) {
  if (!item || typeof item !== "object") return null;
  const raw = item.id != null ? item.id : item.item_id;
  return raw != null ? String(raw) : null;
}

function clickTargetElement(target) {
  if (!target) return null;
  return target.nodeType === 1 ? target : target.parentElement;
}

export default function ItemCard(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((state) => state.itemState.cart || {});
  const itemId = getItemRecordId(props.item);
  const inCartCount = itemId ? cart[itemId] || 0 : 0;

  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (!justAdded) return undefined;
    const t = setTimeout(() => setJustAdded(false), 1800);
    return () => clearTimeout(t);
  }, [justAdded]);

  const handleItemClick = (e) => {
    const el = clickTargetElement(e.target);
    if (el && typeof el.closest === "function" && el.closest("button, a")) {
      return;
    }
    dispatch({ type: "CLICK", current_item: props.item });
    history.push("/itempage");
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!itemId) return;
    dispatch({ type: "ADD_TO_CART", itemId: itemId });
    setJustAdded(true);
  };

  const handleRemoveOne = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!itemId) return;
    dispatch({ type: "REMOVE_ONE_FROM_CART", itemId: itemId });
  };

  const handleRemoveAll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!itemId) return;
    dispatch({ type: "REMOVE_ITEM_FROM_CART", itemId: itemId });
  };

  return (
    <div className="item" onClick={handleItemClick}>
      <div className="item-description">
        <p>{props.item.name}</p>
        <div className="item-picture">
          <div>
            <img src={props.item.image} alt="" height="100px" />
          </div>
          <br />
          <div>
            <button
              type="button"
              className={`item-add-cart-btn${justAdded ? " item-add-cart-btn--added" : ""}`}
              onClick={handleAddToCart}
            >
              {justAdded ? "Added to cart" : "Add to cart"}
            </button>
            {inCartCount > 0 ? (
              <div className="item-cart-line" aria-live="polite">
                <p className="item-cart-count">
                  {inCartCount} of these in your cart
                </p>
                <div className="item-cart-actions">
                  <button
                    type="button"
                    className="item-cart-btn item-cart-btn--minus"
                    onClick={handleRemoveOne}
                    aria-label="Remove one from cart"
                  >
                    −
                  </button>
                  <button
                    type="button"
                    className="item-cart-btn item-cart-btn--remove"
                    onClick={handleRemoveAll}
                  >
                    Remove all
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="item-activity">
        <div>
          <img
            src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cart-black-friday-flatart-icons-outline-flatarticons.png"
            alt=""
          />
          <p>5 people have in cart</p>
        </div>
        <div>
          <img
            src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-like-notifications-justicon-lineal-justicon.png"
            alt=""
          />
          <p>Add to wishlist</p>
        </div>
      </div>
    </div>
  );
}
