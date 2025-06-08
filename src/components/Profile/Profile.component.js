import React, { useState } from "react";
import {
  FaUser,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaCreditCard,
} from "react-icons/fa";
import "./Profile.styles.scss";

const tabs = [
  { label: "Personal Details", icon: <FaUser /> },
  { label: "Orders", icon: <FaBoxOpen /> },
  { label: "Addresses", icon: <FaMapMarkerAlt /> },
  { label: "Card Details", icon: <FaCreditCard /> },
];

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Personal Details");

  const renderContent = () => {
    switch (activeTab) {
      case "Personal Details":
        return (
          <div className="tab-content">
            <p>
              <strong>Name:</strong> John Doe
            </p>
            <p>
              <strong>Email:</strong> john@example.com
            </p>
            <p>
              <strong>Phone:</strong> +91 9876543210
            </p>
          </div>
        );
      case "Orders":
        return (
          <div className="tab-content">
            <p>You have 3 recent orders.</p>
          </div>
        );
      case "Addresses":
        return (
          <div className="tab-content">
            <p>Primary Address: 123 Street, City, Country</p>
          </div>
        );
      case "Card Details":
        return (
          <div className="tab-content">
            <p>Card ending in **** 1234</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-layout">
        <aside className="profile-sidebar">
          <div className="user-avatar">
            <img src="https://placehold.co/100x100" alt="User Avatar" />
            <h2 className="sidebar-title">John Doe</h2>
          </div>
          <div className="profile-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                className={`tab-btn ${activeTab === tab.label ? "active" : ""}`}
                onClick={() => setActiveTab(tab.label)}
              >
                <span className="icon">{tab.icon}</span>
                <span className="label">{tab.label}</span>
              </button>
            ))}
          </div>
        </aside>
      </div>
      <div>
        <main className="profile-content">{renderContent()}</main>
      </div>
    </div>
  );
};

export default ProfilePage;
