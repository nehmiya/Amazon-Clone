import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import LowerHeader from "./LowerHeader";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      {/* Top Header */}
      <section>
        <div className={classes.header__container}>
          {/* Logo + Deliver To */}
          <div className={classes.logo__container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </a>
            <span>
              <SlLocationPin />
            </span>
            <div className={classes.delivery}>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className={classes.search}>
            <select>
              <option value="">All</option>
              <option value="electronics">Electronics</option>
              <option value="books">Books</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <FaSearch />
          </div>

          {/* Right Section */}
          <div className={classes.order__container}>
            {/* Language Selector */}
            <div className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/1200px-Flag_of_the_United_States_%28Web_Colors%29.svg.png"
                alt="Flag"
              />
              <select>
                <option value="EN">EN</option>
                <option value="ES">ES</option>
              </select>
            </div>

            {/* Account */}
            <a href="#">
              <p>Hello, Sign in</p>
              <span>Account & Lists</span>
            </a>

            {/* Orders */}
            <a href="#">
              <p>Returns</p>
              <span>& Orders</span>
            </a>

            {/* Cart */}
            <a to={'/cart'} className={classes.cart}>
              <FaShoppingCart />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lower Header */}
      <LowerHeader />
    </>
  );
}

export default Header;
