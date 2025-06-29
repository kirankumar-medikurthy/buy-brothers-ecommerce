import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CategoryNavBar.styles.scss";

const categories = [
  { name: "NEW IN", items: ["Just Arrived", "Trending", "Editor's Pick"] },
  { name: "SHOES", items: ["Sneakers", "Heels", "Loafers"] },
  { name: "BAGS", items: ["Handbags", "Backpacks", "Wallets"] },
  { name: "CLOTHING", items: ["T-Shirts", "Dresses", "Jackets"] },
];

const CategoryNavBar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="category-nav-wrapper">
      <div className="category-nav">
        {categories?.map((cat, index) => (
          <div
            key={index}
            className={`category-item ${
              activeCategory === index ? "active" : ""
            }`}
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <Link to={`/products/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="category-link">
            {cat.name}
            </Link>

            {activeCategory === index && (
              <div className="category-overlay">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="overlay-item">
                    <Link to={`/product/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavBar;
