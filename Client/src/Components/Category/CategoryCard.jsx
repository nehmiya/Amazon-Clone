import React from "react";
import classes from "./Category.module.css";
import { Link } from "react-router";

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <h2>{data?.title}</h2>

        <img src={data?.imgLink} alt={data.name} />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
