import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function findItemById(items, id) {
  return items.find((i) => String(i.id) === String(id));
}

export default function Shopping() {
  const dispatch = useDispatch();
  const itemsBundle = useSelector((state) => state.itemState.items);
  const items = Array.isArray(itemsBundle) && itemsBundle[0] ? itemsBundle[0] : [];
  const cart = useSelector((state) => state.itemState.cart || {});

  const lines = Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => {
      const item = findItemById(items, id);
      return { id, qty, item };
    });

  const totalItems = lines.reduce((sum, row) => sum + row.qty, 0);

  const addOne = (itemId) => {
    dispatch({ type: "ADD_TO_CART", itemId });
  };

  const removeOne = (itemId) => {
    dispatch({ type: "REMOVE_ONE_FROM_CART", itemId });
  };

  const removeLine = (itemId) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", itemId });
  };

  return (
    <div className="shopping-cart-page">
      <header className="shopping-cart-header">
        <Link to="/home" className="shopping-cart-back">
          ← Back to home
        </Link>
        <h1 className="shopping-cart-title">Your cart</h1>
        {totalItems > 0 ? (
          <span className="shopping-cart-meta">{totalItems} items</span>
        ) : (
          <span className="shopping-cart-meta">Empty</span>
        )}
      </header>

      {lines.length === 0 ? (
        <p className="shopping-cart-empty">
          Nothing here yet.{" "}
          <Link to="/market" className="shopping-cart-inline-link">
            Browse the marketplace
          </Link>
          .
        </p>
      ) : (
        <ul className="shopping-cart-list">
          {lines.map(({ id, qty, item }) => (
            <li key={id} className="shopping-cart-row">
              {item ? (
                <>
                  <img src={item.image} alt="" className="shopping-cart-thumb" />
                  <div className="shopping-cart-row-main">
                    <span className="shopping-cart-name">{item.name}</span>
                    <div className="shopping-cart-controls">
                      <button
                        type="button"
                        className="shopping-cart-step"
                        onClick={() => removeOne(id)}
                        aria-label="Remove one"
                      >
                        −
                      </button>
                      <span className="shopping-cart-qty-num">{qty}</span>
                      <button
                        type="button"
                        className="shopping-cart-step"
                        onClick={() => addOne(id)}
                        aria-label="Add one"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="shopping-cart-remove-line"
                        onClick={() => removeLine(id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="shopping-cart-row-main">
                  <span className="shopping-cart-name">Item #{id}</span>
                  <div className="shopping-cart-controls">
                    <button
                      type="button"
                      className="shopping-cart-remove-line"
                      onClick={() => removeLine(id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
