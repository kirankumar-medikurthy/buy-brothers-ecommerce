import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./NotFound.styles.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-icon">
        <MdErrorOutline size={80} />
      </div>
      <h1 className="not-found-title">Oops! Page not found</h1>
      <p className="not-found-message">
        The page you're looking for doesn’t exist or has been moved.
      </p>
      <button className="not-found-button" onClick={() => navigate("/")}>
        <FaShoppingCart className="cart-icon" />
        Go Back to Shop
      </button>
    </div>
  );
};

export default NotFound;
