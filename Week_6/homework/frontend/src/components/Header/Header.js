import "./style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <h1 className="title-text"> To Do App</h1>
      <div className="link-container">
        <Link className="header-link" to="/">
          Home
        </Link>
        <Link className="header-link" to="/login">
          Login
        </Link>
        <Link className="header-link" to="/signup">
          Signup
        </Link>
      </div>
    </div>
  );
}
