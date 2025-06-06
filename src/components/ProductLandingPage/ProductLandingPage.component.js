import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./ProductLandingPage.styles.scss";

const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 100) + 50,
  sizes: ["XS", "S", "M", "L", "XL"],
  image: "https://placehold.co/300x300/png"
}));

const ProductLandingPage = () => {
  const [visibleCount, setVisibleCount] = useState(15);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 15);
  };

  return (
    <div className="product-landing-page">
      <aside className="filters">
        <h3>Filters</h3>

        <div className="filter-section">
          <div className="filter-group">
            <label htmlFor="category">Category</label>
            <select id="category">
              <option>All</option>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="size">Size</label>
            <select id="size">
              <option>All</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="price">Price</label>
            <select id="price">
              <option>All</option>
              <option>Under $50</option>
              <option>$50 - $100</option>
              <option>$100 - $200</option>
            </select>
          </div>
        </div>
      </aside>

      <main className="product-list">
        {products.slice(0, visibleCount).map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <button className="wishlist">♥</button>
            <div className="overlay">
              <Swiper spaceBetween={10} slidesPerView={3} className="size-swiper">
                {product.sizes.map((size, index) => (
                  <SwiperSlide key={index} className="size-slide">
                    <button className="size-btn">{size}</button>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="add-to-bag">Add to Bag</button>
            </div>
            <div className="product-info">
              <h4>{product.name}</h4>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </main>

      {visibleCount < products.length && (
        <div className="load-more-wrapper">
          <button className="load-more" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductLandingPage;
