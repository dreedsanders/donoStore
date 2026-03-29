import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TransactionItem from "./TransactionItem";

export default function Transactions(props) {
  let dispatch = useDispatch();

  let mytransactions = useSelector((state) => state.userState.transactionItems);

  const handleDashPage = () => {
    dispatch({ type: "TRANSACTIONS", transactions: false });
  };
  return (
    <div className="transactions">
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
      <div className="transactions-toolbar">
        <div className="mypage-header">
          <h1>Transactions</h1>
        </div>
        <button type="button" className="transactions-back" onClick={handleDashPage}>
          ← Back to dashboard
        </button>
      </div>
      <div className="transaction-item">
        {mytransactions.map((item) => (
          <TransactionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
