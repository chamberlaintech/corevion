import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li className="nav-text">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            HOME
          </NavLink>
        </li>
        <li className="nav-text">
          <NavLink
            to="store"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            STORE
          </NavLink>
        </li>
        <li className="nav-text">
          <NavLink
            to="logs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            LOGS
          </NavLink>
        </li>
        <li className="nav-text">
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ABOUT
          </NavLink>
        </li>
        <li className="nav-text">
          <NavLink
            to="contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            CONTACT
          </NavLink>
        </li>
        <li className="nav-text navbar-cart desktop-cart">
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaShoppingCart size={24} className="cart-icon" />
              {cartItems.length > 0 && (
                <span className="cart-badge">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </div>
          </NavLink>
        </li>
      </ul>
      <div className="navbar-smallscreen">
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `navbar-cart mobile-cart ${isActive ? "active" : ""}`
          }
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              marginRight: 16,
            }}
          >
            <FaShoppingCart size={24} className="cart-icon" />
            {cartItems.length > 0 && (
              <span className="cart-badge">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </div>
        </NavLink>

        {/* Hamburger icon remains separate */}
        <BiMenuAltRight
          fontSize={40}
          onClick={() => setToggleMenu(true)}
          className="overlay-open"
        />
      </div>

      {toggleMenu && (
        <div className="navbar-smallscreen-overlay flex-center slide-bottom">
          <MdOutlineClose
            fontSize={28}
            className="overlay-close"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="navbar-smallscreen-links">
            <li className="nav-text">
              <NavLink to="/" onClick={() => setToggleMenu(false)}>
                HOME
              </NavLink>
            </li>
            <li className="nav-text">
              <NavLink to="store" onClick={() => setToggleMenu(false)}>
                STORE
              </NavLink>
            </li>
            <li className="nav-text">
              <NavLink to="logs" onClick={() => setToggleMenu(false)}>
                LOGS
              </NavLink>
            </li>
            <li className="nav-text">
              <NavLink to="about" onClick={() => setToggleMenu(false)}>
                ABOUT
              </NavLink>
            </li>
            <li className="nav-text">
              <NavLink to="contact" onClick={() => setToggleMenu(false)}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
