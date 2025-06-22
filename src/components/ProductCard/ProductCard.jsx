import React, { useContext } from "react";
import "./ProductCard.css";
import { Link } from "react-router";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ image, title, price, id, subheading }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <Link to={`/product/${id}`}>
      <div className="product-card">
        <div className="product-card-img">
          <img src={image} alt={image} />
        </div>
        <div className="product-card-content">
          <div className="product-card-text">
            <h6 className="cardmenu-text">{title}</h6>
            <p className="body-text">{price}</p>
          </div>
          <div className="product-card-button flex-center">
            <button
              className="card-button"
              onClick={(e) => {
                e.preventDefault();
                addToCart({ id, image, title, price, subheading }, 1);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
