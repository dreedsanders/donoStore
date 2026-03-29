import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import PopularItemCard from "../Items/PopularItemCard";

export default function Dashboard(props) {
    let history = useHistory();
    let dispatch = useDispatch();

    let user = useSelector((state) => state.userState.current_user);
    let items = useSelector((state) => state.itemState.items);
    let myItems = items[0].filter((item) => item.user_id === user[0].id);

    const goHome = () => {
      history.push("/");
    };

    const handleTransactionsPage = () => {
        let thisuser = {
            name: user[0].name
        }
        let reqPack = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
          body: JSON.stringify(thisuser)
        };
        fetch("http://localhost:3000/transactions", reqPack)
          .then((res) => res.json())
          .then(data => dispatch({ type: "TRANSACTIONS", transactions: true, transactionItems: data}));
    };

    return (
      <div>
        <div className="mypage">
          <button
            type="button"
            className="mypage-exit"
            onClick={props.onClose}
            aria-label="Close My Page"
          >
            <span className="mypage-exit-x" aria-hidden="true">
              ×
            </span>
            <span className="mypage-exit-label">Exit</span>
          </button>
          <div className="mypage-left">
            <img
              src="https://img.icons8.com/dusk/64/000000/e-commerce.png"
              alt="yes"
              onClick={goHome}
              id="mypage-icon"
            />
            <div className="mypage-dashboard">
              <ul id="categories">
                <li>
                  <div id="single-category" onClick={handleTransactionsPage}>
                    <img
                      src="https://img.icons8.com/office/50/000000/ledger.png"
                      alt="transactions"
                    />
                    Transactions{" "}
                  </div>
                </li>
                <li>
                  <div id="single-category">
                    {" "}
                    <img
                      src="https://img.icons8.com/color/48/000000/overview-pages-3.png"
                      alt="items"
                    />
                    All Items{" "}
                  </div>
                </li>
                <li>
                  <div id="single-category">
                    <img
                      src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-cart-love-flatart-icons-flat-flatarticons.png"
                      alt="cart"
                    />
                    Cart{" "}
                  </div>
                </li>
                <li>
                  <div id="single-category">
                    <img
                      src="https://img.icons8.com/cute-clipart/64/000000/wish-list.png"
                      alt="wishlist"
                    />
                    Wishlist{" "}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mypage-right">
            <div className="mypage-header">
              <div className="mypage-header-titles">
                <h1>{user[0].name}&apos;s Dashboard</h1>
                <p className="mypage-header-sub">Welcome to your store dashboard</p>
              </div>
              <div className="mypage-header-user">
                <img
                  className="mypage-header-avatar"
                  src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                  alt=""
                />
                <h2 className="mypage-header-name">{user[0].name}</h2>
              </div>
            </div>
            <div className="mypage-info">
              <div className="mypage-bio">
                <div className="mypage-profile-block">
                  <img
                    className="mypage-profile-photo"
                    src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                    alt=""
                  />
                  <h3 className="mypage-profile-heading">My profile</h3>
                </div>
                <p className="mypage-bio-meta">Last login — tracked when you sign in</p>
                <div className="mypage-balance-block">
                  <h3 className="mypage-balance-heading">Account balance</h3>
                  <p className="mypage-balance-value">
                    $
                    {Number(user[0].account_balance ?? 0).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <button type="button" className="mypage-edit-btn">
                    Edit
                  </button>
                </div>
              </div>
              <div className="mypage-items">
                <h5>Recent Items</h5>
                {/* scrollable list of my items */}
                {myItems.map((item) =>
                  item.id < 2252 ? (
                    <PopularItemCard item={item} key={item.id} />
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
