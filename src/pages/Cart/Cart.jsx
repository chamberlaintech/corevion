import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return total + price * item.quantity;
  }, 0);

  const deliveryFee = subtotal > 0 ? 0.082 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart section-padding">
      <div className="cart-heading">
        <h2 className="h2-text">Your Shipping Cart</h2>
      </div>

      {cartItems.length === 0 ? (
        <h5 className="h5-text cart-empty">Your cart is empty</h5>
      ) : (
        <div className="cart-content">
          <div className="cart-items-container">
            {cartItems.map((item, idx) => (
              <React.Fragment key={item.id}>
                <div className="cart-item">
                  <div className="cart-item-left">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-item-img"
                    />
                  </div>
                  <div className="cart-item-info">
                    <p className="boldbody-text cart-title">{item.title}</p>
                    <p className="body-text cart-subheading">
                      {item.subheading}
                    </p>
                    <p className="boldbody-text cart-price">{item.price}</p>
                  </div>
                  <FaRegTrashAlt
                    className="cart-item-delete"
                    onClick={() => removeFromCart(item.id)}
                  />

                  <div className="cart-item-quantity-changer">
                    <button
                      className="minus"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="boldbody-text flex-center">
                      {item.quantity}
                    </span>
                    <button
                      className="plus"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                {idx < cartItems.length - 1 && (
                  <div className="cart-item-divider" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="cart-summary">
            <h6 className="h6-text cart-summary-title">Cart Summary</h6>
            <div className="cart-summary-details">
              <div className="summary-row">
                <span className="body-text">Subtotal</span>
                <span className="boldbody-text">₿{subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span className="body-text">Delivery Fee</span>
                <span className="boldbody-text">₿{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row">
                <span className="boldbody-text">Total</span>
                <span className="boldbody-text total-amount">
                  ₿{total.toFixed(2)}
                </span>
              </div>
            </div>
            <button className="card-button" disabled={cartItems.length === 0}>
              Go to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
