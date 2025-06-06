import React, { useState } from "react";
import "./CategoryNavBar.styles.scss";

const categories = [
  { name: "NEW IN", items: ["Just Arrived", "Trending", "Editor's Pick"] },
  { name: "SHOES", items: ["Sneakers", "Heels", "Loafers"] },
  { name: "BAGS", items: ["Handbags", "Backpacks", "Wallets"] },
  { name: "CLOTHING", items: ["T-Shirts", "Dresses", "Jackets"] },
  { name: "SPORTS", items: ["Activewear", "Running", "Yoga"] },
  { name: "ACCESSORIES", items: ["Watches", "Sunglasses", "Belts"] },
  { name: "BEAUTY", items: ["Skincare", "Fragrance", "Makeup"] },
  { name: "PREMIUM", items: ["Designer", "Luxury Picks"] },
  { name: "OUTLET", items: ["Sale Shoes", "Clearance Clothing"] },
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
            {cat.name}

            {activeCategory === index && (
              <div className="category-overlay">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="overlay-item">
                    {item}
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
