import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductLandingPage.styles.scss";

// Sample product data
const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Mesh Detail Pointed Toe Pumps - Black`,
  brand: "CHARLES & KEITH",
  price: 299,
  sizes: ["35", "36", "37", "38", "39", "40", "41", "42"],
  image: "https://placehold.co/400x400/png",
}));

// Accordion item
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-title-container" onClick={toggleAccordion}>
        <div className="accordion-title">{title}</div>
        <div className="arrow">{isOpen ? "▴" : "▾"}</div>
      </div>
      {isOpen && content && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const ProductLandingPage = () => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedSizes, setSelectedSizes] = useState({});

  const loadMore = () => setVisibleCount((prev) => prev + 12);

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <div className="product-landing-page">
      <aside className="filters">
        <div className="filters-header">
          <h3>FILTERS</h3>
          <button className="clear-all">Clear All</button>
        </div>

        <div className="accordion">
          {[
            {
              title: "CATEGORIES",
              content: (
                <>
                  <input
                    type="text"
                    placeholder="Search Categories"
                    className="filter-search"
                  />
                  <ul className="filter-list">
                    <li>
                      <label>
                        <input type="checkbox" /> Flip flops and Slides
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" /> Sandals
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" /> Shoes Accessories
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" /> Sneakers
                      </label>
                    </li>
                  </ul>
                </>
              ),
            },
            { title: "BRANDS" },
            { title: "COLOURS" },
            { title: "GENDER" },
            { title: "DISCOUNT" },
            { title: "BY STOCK" },
            { title: "SIZES" },
          ].map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </aside>

      <div className="product-list-container">
        <main className="product-list">
          {products.slice(0, visibleCount).map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <button className="wishlist">&#9825;</button>
              </div>

              <div className="product-info">
                <h4 className="brand">{product.brand}</h4>
                <p className="name">{product.name}</p>
                <p className="price">₹ {product.price}</p>
              </div>

              <div className="product-hover-overlay">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={3}
                  navigation
                  className="size-swiper"
                >
                  {product.sizes.map((size) => (
                    <SwiperSlide key={size}>
                      <button
                        className={`size-btn ${
                          selectedSizes[product.id] === size ? "selected" : ""
                        }`}
                        onClick={() => handleSizeSelect(product.id, size)}
                      >
                        {size}
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button className="add-to-bag">ADD TO BAG</button>
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
    </div>
  );
};

export default ProductLandingPage;
