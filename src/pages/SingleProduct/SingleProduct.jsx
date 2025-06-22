import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../../constants/data";
import "./SingleProduct.css";
import { CartContext } from "../../context/CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="single-product section-padding flex-center">
      <div className="single-product-content-top flex-center">
        <div className="single-product-left">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="single-product-right">
          <h2 className="h2-text">{product.title}</h2>
          <h6 className="h6-text">{product.subheading}</h6>
          <p className="cardmenu-text">{product.price}</p>
          <p className="body-text">{product.text}</p>
          <div className="single-product-right-buttons">
            <button
              className="primary-button"
              onClick={() => addToCart(product, 1)}
            >
              Add to Cart
            </button>
            <Link to="/store">
              <button className="secondary-button">View all Modules</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="single-product-content-bottom flex-center">
        <h3 className="h3-text">Technical Overview</h3>
        <div className="single-product-overview">
          <div className="single-product-bullets">
            <ul className="bullets-list">
              {product.bullets.map((bullet, index) => (
                <li key={index} className="bullet-item">
                  <div className="bullet-point" />
                  <p className="body-text">{bullet}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="single-product-specs">
            <div className="specs-card">
              {product.specs.map((spec, index) => (
                <div key={index} className="spec-item">
                  <span className="cardmenu-text">{spec.label}</span>
                  <span className="mediumbody-text">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
