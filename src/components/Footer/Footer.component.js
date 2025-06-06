import React from "react";
import "./Footer.styles.scss";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaSnapchatGhost,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <p>
          Sign up & be the first to know about product arrivals & exclusive
          offers
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="ENTER YOUR EMAIL" />
          <button>SUBMIT</button>
        </div>
        <div className="social-icons">
          <FaInstagram />
          <FaFacebookF />
          <FaTiktok />
          <FaSnapchatGhost />
          <FaTwitter />
          <FaPinterestP />
          <FaYoutube />
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>About BuyBrother</li>
            <li>Consumer Rights</li>
            <li>Disclaimer</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Customer Service</h4>
          <ul>
            <li>Shipping Information</li>
            <li>Returns Information</li>
            <li>Order Tracking</li>
            <li>FAQs</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Customer Support</h4>
          <p>We are available all days from:</p>
          <strong>OPEN 9AM - 9PM</strong>
          <p>📞 +971 4814 2666</p>
          <p>📧 customercare@buybrother.com</p>
        </div>
        <div className="footer-column">
          <h4>Download The App</h4>
          <div className="app-links">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_(black)_SVG.svg"
              alt="App Store"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Huawei_AppGallery_badge_EN.svg"
              alt="App Gallery"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="left">© 2025 BuyBrother. All rights reserved.</div>
        <div className="right">
          <span>Shipping</span>
          <span>Returns</span>
          <span>FAQs</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
