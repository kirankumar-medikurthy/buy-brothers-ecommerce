import React from "react";
import "./Homepage.styles.scss";
import {
  pagination,
  Navigation,
  Scrollbar,
  A11y,
  Pagination,
} from "swiper/modules";
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
  {
    name: "Product 1",
    price: "₹999",
    image: "https://placehold.co/400x400/png",
  },
  {
    name: "Product 2",
    price: "₹799",
    image: "https://placehold.co/400x400/png",
  },
  {
    name: "Product 3",
    price: "₹599",
    image: "https://placehold.co/400x400/png",
  },
  {
    name: "Product 4",
    price: "₹899",
    image: "https://placehold.co/400x400/png",
  },
];

const Homepage = () => {
  const renderRecentlyViewedSection = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {recentlyViewed?.map((item, idx) => (
          <SwiperSlide>
            <div key={idx} className="product-card">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <span>{item.price}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
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
        <div className="recently-viewed-slider">
          {/* {recentlyViewed.map((item, idx) => (
            <div key={idx} className="product-card">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <span>{item.price}</span>
            </div>
          ))} */}
          {renderRecentlyViewedSection()}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
