import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CompanyFooter from "../Components/Banners/CompanyFooter";
import Featured from "../Components/Banners/Featured";
import ShopNow from "../Components/Banners/ShopNow";
import StartSelling from "../Components/Banners/StartSelling";
import YouLove from "../Components/Banners/YouLove";
import Footer from "../Components/Pages/Footer";
import LandingPageHeader from "../Components/Pages/LandingPageHeader";
import MyPage from "../Components/User/MyPage";

export default function LandingPage() {
  let dispatch = useDispatch();
    let mypage = useSelector((state) => state.userState.mypage);

  const handleShowSignIn = () => {
    dispatch({ type: "SHOWSIGNIN", signin: true })
  };

  const handleCloseSignIn = () => {
    dispatch({ type: "CLOSESIGNIN", signin: false })
  }

  const handleLogout = () => {
    dispatch({ type: "LOGGEDOUT", current_user: null, loggedin: false });
  };

  const handleCloseDiv = (e) => {
    if (e.target.id === "body" || e.target.id === "header") {
      dispatch({ type: "CLOSEPAGE", mypage: false });
    }
  };
  return (
    <div className="App" onClick={handleCloseDiv}>
      <div id="landing-page">
        <LandingPageHeader
          handleShowSignIn={handleShowSignIn}
          handleCloseSignIn={handleCloseSignIn}
          handleLogout={handleLogout}
        />
        {mypage ? <MyPage /> : null}
        <ShopNow />
        <YouLove />
        {/* <LandingPageBody /> */}
        <Featured />
        <StartSelling />
        <CompanyFooter />
        <Footer />
      </div>
    </div>
  );
}
