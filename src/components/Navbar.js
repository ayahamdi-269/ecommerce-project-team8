import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../nav.css"; 

export default function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">Éclat</Link>
      </div>

      {/* Hamburger button */}
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menu */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}><i class="bi bi-house-fill"></i> Home</Link>

        <Link to="/cart" className="cart-link" onClick={() => setMenuOpen(false)}>
         <i class="bi bi-cart4"></i>  Cart
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>

        <Link to="/wishlist" onClick={() => setMenuOpen(false)}><i class="bi bi-heart-fill"></i> Wishlist</Link>

        <Link to="/profile" onClick={() => setMenuOpen(false)}>
          <img 
            src="https://i.postimg.cc/PfLcHSR5/Congrats-You-have-found-this-cute-rare-pfp.jpg" 
            alt="profile" 
            className="profile-pic"
          />
        </Link>
      </div>
    </nav>
  );
}
