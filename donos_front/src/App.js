import "./App.css";
import LandingPage from "./Containers/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./Components/Pages/Welcome"
import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import MyPage from "./Components/User/MyPage"
import ItemPage from "./Components/Items/ItemPage"
import Shopping from "./Containers/Shopping";
import LandingPageBody from "./Components/Pages/LandingPageBody";
function App() {

  let dispatch = useDispatch();

  useEffect(() => {
    getUsers();
    getItems();
  }, []);

  const getUsers = () => {
    let reqPack = {
       method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
    fetch("http://localhost:3000/users", reqPack)
      .then(res => res.json())
      .then(data => dispatch({ type: "GETUSERS", users: data }))
  }
  const getItems = () => {
    let reqPack = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch("http://localhost:3000/items", reqPack)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GETITEMS", items: data}));
  };
    const handleShowSignIn = () => {
      dispatch({ type: "SHOWSIGNIN", signin: true });
    };

    const handleCloseSignIn = () => {
      dispatch({ type: "CLOSESIGNIN", signin: false });
    };

    const handleLogout = () => {
      dispatch({ type: "LOGGEDOUT", current_user: null, loggedin: false });
    };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/home">
          <LandingPage />
        </Route>
        <Route exact path="/mypage">
          <MyPage />
        </Route>
        <Route exact path="/itempage">
          <ItemPage />
        </Route>
        <Route exact path="/market">
          <LandingPageBody
            handleShowSignIn={handleShowSignIn}
            handleCloseSignIn={handleCloseSignIn}
            handleLogout={handleLogout}
          />
        </Route>
        <Route exact path="/shopping" >
          <Shopping />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
