import React from "react";
import "./Store.css";
import { products } from "../../constants/data";
import ProductCard from "../../components/ProductCard/ProductCard";

const Store = () => {
  return (
    <div className="store section-padding flex-center">
      <div className="store-heading">
        <h2 className="h2-text">Access Modules</h2>
        <p className="subheading-text">
          Equip your system with officially certified Corevion hardware.
        </p>
      </div>
      <div className="store-content flex-center">
        {products.map((product, item) => {
          return (
            <ProductCard
              key={item}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              subheading={product.subheading}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Store;
