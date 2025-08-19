import React from "react";
import Rating from '@mui/material/Rating'
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from './Product.module.css'

function ProductCard({ product }) {
  return (
    <div className={classes.card__container}>
      <a href={product.id}>
        <img
          src={product.image}
          alt={product.title}
          onError={(e) => {
            if (e.target.src.endsWith(".jpg")) {
              e.target.src = e.target.src.replace(".jpg", "t.png");
            } else {
              e.target.src =
                "https://via.placeholder.com/250x250?text=No+Image";
            }
          }}
        />
      </a>
      <div>
        <h3>{product.title}</h3>
        <div className={classes.rating}>
          {/* Rating */}
          <Rating readOnly value={product.rating.rate} />
          {/* Count */}
          <small>{product.rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={product.price} />
        </div>
        <button className={classes.button}>Add To Cart </button>
      </div>
    </div>
  );
}

export default ProductCard;
