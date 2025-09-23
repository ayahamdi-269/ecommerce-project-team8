import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../nav.css"; 

export default function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left side - الجملة */}
      <div className="navbar-text">
        Stay Pretty
      </div>

      {/* Center - اللوجو */}

      <div className="navbar-logo">
        <Link to="/"><img 
            src="https://i.postimg.cc/6QKGdpv7/IMG-20250922-WA0018.png" 
            alt=""
          /> </Link>

      </div>
      {/* Right side - الروابط */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}><i className="bi bi-house-fill"></i> Home</Link>
        <Link to="/cart" className="cart-link" onClick={() => setMenuOpen(false)}>
          <i className="bi bi-cart4"></i> Cart
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
        <Link to="/wishlist" onClick={() => setMenuOpen(false)}><i className="bi bi-heart-fill"></i> Wishlist</Link>
        <Link to="/profile" onClick={() => setMenuOpen(false)}>
          <img 
            src="https://i.postimg.cc/0N4w3RXx/Congrats-You-have-found-this-cute-rare-pfp.jpg" 
            alt="profile" 
            className="profile-pic"
          />
        </Link>
      </div>

      {/* Hamburger button */}
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}
