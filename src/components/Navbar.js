import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo1 (2).png";
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-4 py-2 navbar-custom fixed-top">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src={logo}
          alt="brand logo"
          style={{
            height: "65px",
            width: "auto",
            filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.15))",
          }}
        />
        
      </Link>

     
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
        aria-controls="navbarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">🛒</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
