import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dashboard from "../Pages/Dashboard";
import Transactions from "../Pages/Transactions";
import { useSelector } from "react-redux";

export default function MyPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const transactions = useSelector((state) => state.userState.transactions);

  const closeMyPage = () => {
    dispatch({ type: "CLOSEPAGE", mypage: false });
    if (history.location.pathname === "/mypage") {
      history.push("/home");
    }
  };

  return (
    <div>
      {transactions ? (
        <Transactions onClose={closeMyPage} />
      ) : (
        <Dashboard onClose={closeMyPage} />
      )}
    </div>
  );
}
