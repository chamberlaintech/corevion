import React from "react";
import "./CTAProduct.css";
import { products } from "../../constants/data";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Link } from "react-router";

const CTAProduct = () => {
  return (
    <div className="ctaproduct section-padding flex-center">
      <div className="ctaproduct-heading">
        <h2 className="h2-text">Secure the Core</h2>
        <p className="subheading-text">
          Choose your configuration. Units are limited
        </p>
      </div>
      <Swiper
        modules={[Navigation]}
        loop={false}
        spaceBetween={24}
        slidesPerView={1}
        style={{ padding: "1.5rem 1.5rem" }}
        breakpoints={{
          600: {
            slidesPerView: 1,
          },
          1000: {
            slidesPerView: 2,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        className="ctaproduct-swiper"
      >
        <SliderButtons />
        {products.slice(0, 3).map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <ProductCard
                key={index}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                subheading={product.subheading}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="ctaproduct-button">
        <Link to="/store">
          <div className="primary-button">View all Products</div>
        </Link>
      </div>
    </div>
  );
};

export default CTAProduct;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex-center ctaproduct-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
