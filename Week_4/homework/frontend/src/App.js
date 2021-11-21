import "./style.css";
import React from "react";
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "./components/Header/Header.js";
import Home from "./pages/Home/Home.js";

export default function App() {
  return (
    <Router>
      <div className="global-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        <div className="content-container">
          <Switch>
            {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
