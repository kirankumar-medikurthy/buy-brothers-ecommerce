import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./NavBar.styles.scss";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCartOverlay, setShowCartOverlay] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <div className="logo">BuyBrother</div>

        <div className="nav-links">
          <span>Men</span>
          <span>Women</span>
          <span>Kids</span>
        </div>

        <div className="nav-icons">
          {showSearch ? (
            <input
              className="search-input"
              type="text"
              placeholder="Search products..."
              onBlur={() => setShowSearch(false)}
              autoFocus
            />
          ) : (
            <FaSearch className="icon" onClick={() => setShowSearch(true)} />
          )}

          <FaShoppingCart className="icon" onClick={() => setShowCartOverlay(true)} />
          <FaUserCircle className="icon" onClick={() => navigate("/profile")} />
        </div>
      </div>

      {showCartOverlay && (
        <div className="cart-overlay" onClick={() => setShowCartOverlay(false)}>
          <div className="cart-content" onClick={(e) => e.stopPropagation()}>
            <h3>Your Cart</h3>
            <p>No items added yet.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
