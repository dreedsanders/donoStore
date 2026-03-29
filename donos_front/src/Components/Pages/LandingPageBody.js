import React, { useState, useMemo } from "react";
import SignIn from "./SignIn";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ItemCard from "../Items/ItemCard";
import PopularItemCard from "../Items/PopularItemCard";
import {
  topCategoriesFromItems,
  normalizeCategoryName,
} from "../../utils/topCategories";

export default function LandingPageBody(props) {
  const history = useHistory();
  let user = useSelector((state) => state.userState.current_user);
  let itemsBundle = useSelector((state) => state.itemState.items);
  let items = Array.isArray(itemsBundle) && itemsBundle[0] ? itemsBundle[0] : [];
  let signin = useSelector((state) => state.userState.signin);

  const isLoggedIn = Boolean(user?.[0]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const topCategories = topCategoriesFromItems(items, 8);

  const filteredItems = useMemo(() => {
    if (!selectedCategory) return items;
    return items.filter(
      (item) => normalizeCategoryName(item.category) === selectedCategory
    );
  }, [items, selectedCategory]);

  const selectCategory = (name) => {
    setSelectedCategory((prev) => (prev === name ? null : name));
  };

  let popular = items.slice(0, 5);

  return (
    <div className="marketplace-page listing-page">
      <header className="marketplace-nav">
        <Link to="/home" className="marketplace-back">
          ← Back to home
        </Link>
        <h1 className="marketplace-title">Marketplace</h1>
        <span className="marketplace-count">
          {selectedCategory
            ? `${filteredItems.length} of ${items.length} · ${selectedCategory}`
            : `${items.length} listing${items.length === 1 ? "" : "s"}`}
        </span>
        <button
          type="button"
          className="marketplace-nav-cart"
          aria-label="Shopping cart"
          onClick={() => history.push("/shopping")}
        >
          <img
            src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-cart-love-flatart-icons-flat-flatarticons.png"
            alt=""
            height="28"
          />
        </button>
      </header>

      <section id="body" className="marketplace-body">
        <div className="col-left">
          <div className="body-log-in">
            {!isLoggedIn ? (
              <p>
                Log in to add items to your wishlist, cart, and to see reviews.
              </p>
            ) : null}
            {isLoggedIn ? (
              <button type="button" className="button" onClick={props.handleLogout}>
                Log out
              </button>
            ) : (
              <button type="button" className="button" onClick={props.handleShowSignIn}>
                Log in
              </button>
            )}
            {signin ? (
              <SignIn handleCloseSignIn={props.handleCloseSignIn} />
            ) : null}
          </div>
          <div className="body-popular-items">
            <h3>Highlighted items</h3>
            <ul className="popular-items">
              {popular.map((pop) =>
                pop ? <PopularItemCard item={pop} key={pop.id} /> : null
              )}
            </ul>
          </div>
          <div className="extra-information-services">
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="col-right marketplace-main">
          <div className="marketplace-toolbar">
            <h2 className="marketplace-toolbar-heading">Shop by category</h2>
            <ul className="categories marketplace-category-chips">
              <li>
                <button
                  type="button"
                  className={`marketplace-chip${selectedCategory === null ? " marketplace-chip--active" : ""}`}
                  onClick={() => setSelectedCategory(null)}
                  aria-pressed={selectedCategory === null}
                >
                  All
                  <span className="marketplace-chip-count">{items.length}</span>
                </button>
              </li>
              {topCategories.map((cate) => (
                <li key={cate.name}>
                  <button
                    type="button"
                    className={`marketplace-chip${
                      selectedCategory === cate.name ? " marketplace-chip--active" : ""
                    }`}
                    onClick={() => selectCategory(cate.name)}
                    aria-pressed={selectedCategory === cate.name}
                  >
                    {cate.name}
                    <span className="marketplace-chip-count">{cate.amount}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="items-scroll marketplace-grid" id="browse">
            {filteredItems.length === 0 ? (
              <p className="marketplace-empty" role="status">
                No listings in this category. Try another filter or clear with{" "}
                <button type="button" className="marketplace-empty-link" onClick={() => setSelectedCategory(null)}>
                  All
                </button>
                .
              </p>
            ) : (
              filteredItems.map((item) => <ItemCard item={item} key={item.id} />)
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
