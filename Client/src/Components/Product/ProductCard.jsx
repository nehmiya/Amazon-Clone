import React, { useContext } from "react";
import Rating from '@mui/material/Rating'
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from './Product.module.css'
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utils/action.type";

function ProductCard({ product, flex, renderDesc }) {

  const [state,dispatch]=useContext(DataContext)


    const addToCart = ()=>{
      dispatch({
        type: Type.ADD_TO_BASKET,
        item: {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          rating: product.rating,
          description: product.description
        }
      });
    }



  return (
    <div className={`${classes.card__container} ${flex ? classes.flex : ""}`}>
      <Link to={`/products/${product.id}`}>
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
      </Link>
      <div>
        <h3>{product.title}</h3>
        {renderDesc && (<div className={classes.description}>
          {product.description}
        </div>)} 
        <div className={classes.rating}>
          <Rating readOnly value={product.rating?.rate || 0} />
          <small>{product.rating?.count || 0}</small>
        </div>
        <div>
          <CurrencyFormat amount={product.price} />
        </div>
        <button className={classes.button} onClick={addToCart}>Add To Cart </button>
      </div>
    </div>
  );
}

export default ProductCard;
