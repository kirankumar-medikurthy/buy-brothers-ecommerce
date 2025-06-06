import React from "react";
import "./Homepage.styles.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const categories = [
  { name: "Men", image: "https://placehold.co/400x400/png" },
  { name: "Women", image: "https://placehold.co/400x400/png" },
  { name: "Kids", image: "https://placehold.co/400x400/png" },
  { name: "Accessories", image: "https://placehold.co/400x400/png" },
];

const recentlyViewed = [
  { name: "Product 1", price: "₹999", image: "https://placehold.co/400x400/png" },
  { name: "Product 2", price: "₹799", image: "https://placehold.co/400x400/png" },
  { name: "Product 3", price: "₹599", image: "https://placehold.co/400x400/png" },
  { name: "Product 4", price: "₹899", image: "https://placehold.co/400x400/png" },
  { name: "Product 5", price: "₹999", image: "https://placehold.co/400x400/png" },
  { name: "Product 6", price: "₹799", image: "https://placehold.co/400x400/png" },
];

const Homepage = () => {
  const renderRecentlyViewedSection = () => (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      // navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 1.5 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }}
    >
      {recentlyViewed.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="product-card">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <span>{item.price}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className="homepage">
      <div className="hero-banner">
        <h1>Shop the Latest Fashion</h1>
        <p>Trendy styles at unbeatable prices</p>
        <button>Shop Now</button>
      </div>

      <div className="section">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {categories.map((cat) => (
            <div key={cat.name} className="category-card">
              <img src={cat.image} alt={cat.name} />
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Recently Viewed</h2>
        {renderRecentlyViewedSection()}
      </div>
    </div>
  );
};

export default Homepage;
