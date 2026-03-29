import React from "react";
import SignIn from "./SignIn";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { topCategoriesFromItems } from "../../utils/topCategories";

export default function LandingPageHeader(props) {
  let history = useHistory();
  let dispatch = useDispatch();

  let user = useSelector((state) => state.userState.current_user);
  let signin = useSelector((state) => state.userState.signin);
  let itemsBundle = useSelector((state) => state.itemState.items);
  let items = Array.isArray(itemsBundle) && itemsBundle[0] ? itemsBundle[0] : [];

  const goHome = () => {
    history.push("/");
  };

  const handleMyPage = () => {
    dispatch({ type: "MYPAGE", mypage: true });
  };

  const topCategories = topCategoriesFromItems(items, 5);

  return (
    <div id="sep">
      <section id="header-help">
        <div>
          <button type="button">Need help? Contact</button>
        </div>
        <div>
          <button
            type="button"
            className="helpbutton header-cart-link"
            aria-label="Cart"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              history.push("/shopping");
            }}
          >
            <img
              src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-cart-love-flatart-icons-flat-flatarticons.png"
              alt=""
              height="35"
            />
          </button>
          <button type="button" className="helpbutton" aria-label="Notifications">
            <img
              src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-notification-social-media-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
              height="35"
              alt=""
            />
          </button>
        </div>
      </section>
      <section id="header">
        <div className="header-icon icon">
          <img
            src="https://img.icons8.com/dusk/64/000000/e-commerce.png"
            alt="Home"
            onClick={goHome}
            onKeyDown={(e) => e.key === "Enter" && goHome()}
            role="button"
            tabIndex={0}
          />
        </div>
        <div className="header-search">
          <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              className="search-input"
              name="search"
              placeholder="Search listings…"
              autoComplete="off"
              aria-label="Search"
            />
          </form>
        </div>
        <div className="header-login">
          {user?.[0] ? (
            <div className="viewmypage">
              <button
                type="button"
                className="button header-auth-btn"
                onClick={handleMyPage}
              >
                My page
              </button>
              <button
                type="button"
                className="button header-auth-btn"
                onClick={props.handleLogout}
              >
                Log out
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="button header-auth-btn"
              onClick={props.handleShowSignIn}
            >
              Log in
            </button>
          )}
          {signin ? (
            <SignIn handleCloseSignIn={props.handleCloseSignIn} />
          ) : null}
        </div>
      </section>
      <div id="filter" className="home-category-strip">
        <Link to="/market" className="filter-browse-link">
          Marketplace
        </Link>
        <div className="categories-bar" aria-label="Popular categories">
          {topCategories.length === 0 ? (
            <span className="category-strip-hint">Browse the marketplace for categories</span>
          ) : (
            <ul className="categories category-chips">
              {topCategories.map((cate) => (
                <li key={cate.name}>
                  <Link to="/market" className="category-chip">
                    {cate.name}
                    <span className="category-chip-count">{cate.amount}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
