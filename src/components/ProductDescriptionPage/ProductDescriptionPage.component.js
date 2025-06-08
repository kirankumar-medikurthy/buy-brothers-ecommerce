import React from "react";
import "./ProductDescriptionPage.styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductDescriptionPage = () => {
  const thumbnails = [
    "https://placehold.co/200x200/png",
    "https://placehold.co/200x200/png",
    "https://placehold.co/200x200/png",
    "https://placehold.co/200x200/png",
  ];

  return (
    <div className="product-description-page">
      <div className="content-wrapper">
        <div className="left-section">
          <div className="main-image">
            <img src="https://placehold.co/400x400/png" alt="Main Product" />
          </div>
          <div className="thumbnail-slider">
            <Swiper
              spaceBetween={10}
              breakpoints={{
                0: { slidesPerView: 3 },
                480: { slidesPerView: 4 },
                768: { slidesPerView: 5 }
              }}
            >
              {thumbnails.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="thumbnail-wrapper">
                    <img src={src} alt={`Thumbnail ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="right-section">
          <h2 className="product-title">Steve Madden FLORENZIA Embellished Slingback Pumps</h2>

          <div className="product-price">
            AED 259 <span className="original-price">AED 449</span>
          </div>

          <div className="highlights">
            <h3>Highlights</h3>
            <ul>
              <li>Pointed toe slingback style</li>
              <li>Secure ankle strap with buckle</li>
              <li>Crystal embellished upper</li>
              <li>Flared mid-height heel</li>
            </ul>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>
              These stylish Steve Madden pumps are designed for the modern fashionista. Made with 
              quality materials and embellished with crystals, they add elegance to any outfit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
