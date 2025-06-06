import React from "react";
import "./ProductDescriptionPage.styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "https://placehold.co/300x300/png",
  "https://placehold.co/300x300/png",
  "https://placehold.co/300x300/png",
  "https://placehold.co/300x300/png",
];

const sizes = [35, 36, 37, 38, 39, 40, 41];

const ProductDescriptionPage = () => {
  return (
    <div className="product-description-page">
      <div className="product-container">
        <div className="image-preview">
          <div className="thumbnails">
            {images.map((img, idx) => (
              <img src={img} key={idx} alt="thumb" className="thumbnail" />
            ))}
          </div>
          <div className="main-image">
            <img src={images[0]} alt="product" />
          </div>
        </div>

        <div className="product-details">
          <h2 className="brand">Steve Madden</h2>
          <p className="product-name">FLORENZIA Embellished Slingback Pumps</p>

          <div className="price-section">
            <span className="sale-price">AED 259</span>
            <span className="original-price">AED 449</span>
            <span className="discount">-42%</span>
          </div>

          <div className="size-selector">
            <label>Select Size:</label>
            <Swiper spaceBetween={8} slidesPerView={6} className="size-swiper">
              {sizes.map((size) => (
                <SwiperSlide key={size}>
                  <button className="size-btn">{size}</button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button className="add-to-bag">ADD TO BAG</button>

          <div className="availability-info">
            <p>
              <b>263 OTHERS ARE VIEWING</b>
            </p>
          </div>

          <div className="product-info">
            <h3>Also available in:</h3>
            <div className="variant-images">
              {images.map((img, idx) => (
                <img src={img} key={idx} alt="variant" className="variant-img" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="similar-products-section">
        <h3>Similar Products</h3>
        <div className="similar-products">
          {images.map((img, idx) => (
            <div className="similar-product-card" key={idx}>
              <img src={img} alt="similar" />
              <p className="product-title">Product Name</p>
              <div className="price-section">
                <span className="sale-price">AED 299</span>
                <span className="original-price">AED 499</span>
                <span className="discount">-40%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
